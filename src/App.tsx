import { useState, useEffect, useCallback } from 'react';
import PracticeSession, { SessionResult } from './components/PracticeSession';
import { loadRecords, saveRecord, loadWrongIds, saveWrongIds, PracticeRecord } from './storage';

export default function App() {
  const [view, setView] = useState<'home' | 'practice' | 'history'>('home');
  const [wrongStorage, setWrongStorage] = useState<string[]>([]);
  const [sessionReviewIds, setSessionReviewIds] = useState<string[]>([]);
  const [records, setRecords] = useState<PracticeRecord[]>([]);

  useEffect(() => {
    setWrongStorage(loadWrongIds());
    setRecords(loadRecords());
  }, []);

  const handleStartFullPractice = useCallback(() => {
    setSessionReviewIds([]);
    setView('practice');
  }, []);

  const handleStartReview = useCallback(() => {
    setSessionReviewIds([...wrongStorage]);
    setView('practice');
  }, [wrongStorage]);

  const handlePracticeComplete = useCallback((result: SessionResult) => {
    const merged = Array.from(new Set([...wrongStorage, ...result.wrongIds]));
    setWrongStorage(merged);
    saveWrongIds(merged);

    const record: PracticeRecord = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      date: new Date().toISOString(),
      type: sessionReviewIds.length > 0 ? 'review' : 'full',
      totalQuestions: result.total,
      wrongCount: result.wrongIds.length,
      scorePercent: result.total > 0 ? Math.round(((result.total - result.wrongIds.length) / result.total) * 100) : 0,
      wrongIds: result.wrongIds,
      duration: result.duration,
    };
    saveRecord(record);
    setRecords(loadRecords());
    setView('home');
  }, [wrongStorage, sessionReviewIds]);

  const handleViewHistory = useCallback(() => {
    setRecords(loadRecords());
    setView('history');
  }, []);

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  };

  const formatDuration = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return m > 0 ? `${m}m ${s}s` : `${s}s`;
  };

  if (view === 'practice') {
    return (
      <div className="h-screen bg-gray-50">
        <PracticeSession
          reviewList={sessionReviewIds}
          onComplete={handlePracticeComplete}
          onExit={() => setView('home')}
        />
      </div>
    );
  }

  if (view === 'history') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-xl w-full bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Practice History</h2>
            <button
              onClick={() => setView('home')}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            {records.length === 0 ? (
              <div className="text-center text-gray-400 py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <p className="font-medium">No records yet</p>
                <p className="text-sm mt-1">Complete a practice to see your history</p>
              </div>
            ) : (
              <div className="space-y-3">
                {records.map((r) => (
                  <div key={r.id} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">{formatDate(r.date)}</span>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${r.type === 'review' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'}`}>
                        {r.type === 'review' ? 'Review' : 'Full'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className={`text-2xl font-bold ${r.scorePercent >= 80 ? 'text-green-500' : r.scorePercent >= 60 ? 'text-yellow-500' : 'text-red-500'}`}>
                            {r.scorePercent}%
                          </div>
                          <div className="text-xs text-gray-400">Score</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-700">{r.totalQuestions}</div>
                          <div className="text-xs text-gray-400">Questions</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-red-400">{r.wrongCount}</div>
                          <div className="text-xs text-gray-400">Wrong</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-500">{formatDuration(r.duration)}</div>
                          <div className="text-xs text-gray-400">Time</div>
                        </div>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-8 pb-6 border-b border-gray-50 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path><path d="M8 7h6"></path><path d="M8 11h8"></path></svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">CET-4 Reading</h1>
          <p className="text-gray-500 font-medium">June 2025 Test Practice</p>
        </div>

        <div className="p-6 space-y-3">
          <button
            onClick={handleStartFullPractice}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg py-4 px-6 rounded-2xl transition-all shadow-[0_4px_0_theme(colors.blue.600)] active:shadow-none active:translate-y-1 truncate"
          >
            Start Practice
          </button>

          <button
            onClick={handleStartReview}
            disabled={wrongStorage.length === 0}
            className={`w-full font-bold text-lg py-4 px-6 rounded-2xl transition-all truncate ${
              wrongStorage.length > 0
                ? 'bg-orange-100 hover:bg-orange-200 text-orange-600 shadow-[0_4px_0_theme(colors.orange.200)] active:shadow-none active:translate-y-1 border-2 border-orange-200'
                : 'bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed'
            }`}
          >
            Review Mistakes ({wrongStorage.length})
          </button>

          <button
            onClick={handleViewHistory}
            className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold text-lg py-4 px-6 rounded-2xl transition-all border-2 border-gray-200 hover:border-gray-300"
          >
            Practice History
          </button>
        </div>
      </div>
    </div>
  );
}
