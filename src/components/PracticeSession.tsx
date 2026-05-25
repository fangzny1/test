import { useState, useMemo, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { questions } from '../data';
import { CheckCircle, XCircle, Info } from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveProgress, clearProgress } from '../storage';

export interface SessionResult {
  wrongIds: string[];
  total: number;
  duration: number;
  section?: string;
}

interface PracticeSessionProps {
  onComplete: (result: SessionResult) => void;
  onExit: () => void;
  reviewList: string[];
  initialSection?: string | null;
  initialIndex?: number;
  initialWrong?: string[];
}

export default function PracticeSession({
  onComplete, onExit, reviewList,
  initialSection, initialIndex = 0, initialWrong = [],
}: PracticeSessionProps) {
  const startTimeRef = useRef(Date.now());
  const isReview = reviewList.length > 0;

  const sections = useMemo(() => {
    const pool = isReview ? questions.filter(q => reviewList.includes(q.id)) : questions;
    const seen = new Set<string>();
    const result: { label: string; value: string }[] = [];
    for (const q of pool) {
      if (!seen.has(q.section)) {
        seen.add(q.section);
        result.push({ label: q.section, value: q.section });
      }
    }
    return result;
  }, [isReview, reviewList]);

  const [activeSection, setActiveSection] = useState<string | null>(
    initialSection && sections.some(s => s.value === initialSection) ? initialSection : null
  );

  const practiceQuestions = useMemo(() => {
    let pool = isReview ? questions.filter(q => reviewList.includes(q.id)) : questions;
    if (activeSection) {
      pool = pool.filter(q => q.section === activeSection);
    }
    return pool;
  }, [isReview, reviewList, activeSection]);

  const [currentIndex, setCurrentIndex] = useState(
    initialIndex < practiceQuestions.length ? initialIndex : 0
  );
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState<string[]>(initialWrong);
  const [showExplanation, setShowExplanation] = useState(false);

  const question = practiceQuestions[currentIndex];
  const progress = practiceQuestions.length > 0 ? (currentIndex / practiceQuestions.length) * 100 : 0;

  const saveCurrentProgress = useCallback(() => {
    saveProgress({
      section: activeSection,
      currentIndex,
      wrongAnswers,
      type: isReview ? 'review' : 'full',
      reviewList,
    });
  }, [activeSection, currentIndex, wrongAnswers, isReview, reviewList]);

  const handleExit = () => {
    saveCurrentProgress();
    onExit();
  };

  const handleSectionChange = (section: string | null) => {
    setActiveSection(section);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsChecked(false);
    setShowExplanation(false);
  };

  const handleCheck = () => {
    if (!selectedOption) return;
    setIsChecked(true);
    if (selectedOption !== question.correctAnswer) {
      setWrongAnswers(prev => {
        const next = [...prev, question.id];
        return next;
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < practiceQuestions.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setSelectedOption(null);
      setIsChecked(false);
      setShowExplanation(false);
      saveProgress({
        section: activeSection,
        currentIndex: nextIdx,
        wrongAnswers,
        type: isReview ? 'review' : 'full',
        reviewList,
      });
    } else {
      clearProgress();
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      onComplete({
        wrongIds: wrongAnswers,
        total: practiceQuestions.length,
        duration: Math.round((Date.now() - startTimeRef.current) / 1000),
        section: activeSection || undefined,
      });
    }
  };

  if (practiceQuestions.length === 0) {
    return (
      <div className="flex flex-col h-full bg-white max-w-4xl mx-auto items-center justify-center">
        <p className="text-gray-400 text-lg mb-4">No questions in this section</p>
        <button onClick={onExit} className="text-blue-500 font-semibold">Go back</button>
      </div>
    );
  }

  if (!question) return null;

  const isCorrect = selectedOption === question.correctAnswer;

  return (
    <div className="flex flex-col h-full bg-white max-w-4xl mx-auto md:border-x md:border-gray-100 shadow-sm relative">
      <header className="px-6 py-4 flex items-center space-x-4 sticky top-0 bg-white z-10 border-b border-gray-100">
        <button onClick={handleExit} className="text-gray-400 hover:text-gray-600 transition-colors shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-green-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 50 }}
          />
        </div>
        <select
          value={activeSection || ''}
          onChange={e => handleSectionChange(e.target.value || null)}
          className="shrink-0 text-sm font-medium bg-gray-100 border-0 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none cursor-pointer max-w-[160px] truncate"
        >
          <option value="">All ({isReview ? reviewList.length : questions.length})</option>
          {sections.map(s => {
            const count = (isReview ? questions.filter(q => reviewList.includes(q.id)) : questions)
              .filter(q => q.section === s.value).length;
            return (
              <option key={s.value} value={s.value}>{s.label} ({count})</option>
            );
          })}
        </select>
      </header>

      <div className="flex-1 overflow-y-auto px-6 py-8 pb-40">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{question.instructions}</h2>
        </div>

        {question.passage && (
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100 text-gray-700 whitespace-pre-wrap font-sans leading-relaxed text-sm">
            {question.passage}
          </div>
        )}

        <div className="mb-8">
          <p className="text-lg font-medium text-gray-800 whitespace-pre-wrap">{question.text}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-24">
          {question.options.map((opt, i) => {
            const isSelected = selectedOption === opt;
            const showsCorrect = isChecked && opt === question.correctAnswer;
            const showsIncorrect = isChecked && isSelected && !isCorrect;

            let btnClass = "p-4 rounded-xl border-2 text-left transition-all relative font-medium ";

            if (showsCorrect) {
              btnClass += "border-green-500 bg-green-50 text-green-700";
            } else if (showsIncorrect) {
              btnClass += "border-red-500 bg-red-50 text-red-700";
            } else if (isSelected) {
              btnClass += "border-blue-400 bg-blue-50 text-blue-700 shadow-[0_4px_0_theme(colors.blue.200)] translate-y-[-2px]";
            } else {
              btnClass += "border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 shadow-[0_4px_0_theme(colors.gray.200)]";
            }

            return (
              <button
                key={i}
                disabled={isChecked}
                onClick={() => setSelectedOption(opt)}
                className={btnClass}
                style={{
                  transform: isSelected && !isChecked ? 'translateY(2px)' : 'none',
                  boxShadow: isSelected && !isChecked ? 'none' : undefined,
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className={`fixed md:absolute bottom-0 left-0 right-0 p-6 border-t md:rounded-b-2xl transition-colors duration-300 flex flex-col gap-4 ${
        isChecked
          ? isCorrect
            ? 'bg-green-100 border-green-200'
            : 'bg-red-100 border-red-200'
          : 'bg-white border-gray-200'
      }`}>
        <AnimatePresence>
          {isChecked && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${isCorrect ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
                  {isCorrect ? <CheckCircle size={24} /> : <XCircle size={24} />}
                </div>
                <div>
                  <div className={`text-xl font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                    {isCorrect ? 'Excellent!' : 'Incorrect'}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowExplanation(!showExplanation)}
                className={`flex items-center gap-2 px-4 py-2 font-semibold rounded-xl transition-colors ${isCorrect ? 'text-green-700 hover:bg-green-200' : 'text-red-700 hover:bg-red-200'}`}
              >
                <Info size={20} />
                Explanation
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-white/60 p-4 rounded-xl text-sm font-sans text-gray-800 leading-relaxed border border-white">
                <span className="font-bold block mb-1">Correct Answer:</span> {question.correctAnswer}
                <hr className="my-2 border-black/10" />
                {question.explanation}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-4">
          <button
            disabled={!selectedOption && !isChecked}
            onClick={isChecked ? handleNext : handleCheck}
            className={`flex-1 py-4 px-6 rounded-2xl font-bold text-lg uppercase tracking-wide transition-all
              ${!selectedOption && !isChecked ? 'bg-gray-200 text-gray-400 cursor-not-allowed' :
                isChecked ? (isCorrect ? 'bg-green-500 hover:bg-green-600 text-white shadow-[0_4px_0_theme(colors.green.600)]' : 'bg-red-500 hover:bg-red-600 text-white shadow-[0_4px_0_theme(colors.red.600)]') :
                'bg-blue-500 hover:bg-blue-600 text-white shadow-[0_4px_0_theme(colors.blue.600)] active:shadow-none active:translate-y-1'
              }
            `}
          >
            {isChecked ? 'Continue' : 'Check'}
          </button>
        </div>
      </div>
    </div>
  );
}
