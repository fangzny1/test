export interface PracticeRecord {
  id: string;
  date: string;
  type: 'full' | 'review' | 'section';
  totalQuestions: number;
  wrongCount: number;
  scorePercent: number;
  wrongIds: string[];
  duration: number;
  section?: string;
}

export interface SavedProgress {
  section: string | null; // null = all
  currentIndex: number;
  wrongAnswers: string[];
  type: 'full' | 'review';
  reviewList: string[];
}

const RECORDS_KEY = 'practiceRecords';
const WRONG_KEY = 'wrongQuestions';
const PROGRESS_KEY = 'practiceProgress';

export function loadRecords(): PracticeRecord[] {
  try {
    const raw = localStorage.getItem(RECORDS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveRecord(record: PracticeRecord): void {
  const records = [record, ...loadRecords()];
  localStorage.setItem(RECORDS_KEY, JSON.stringify(records));
}

export function loadWrongIds(): string[] {
  try {
    const raw = localStorage.getItem(WRONG_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveWrongIds(ids: string[]): void {
  localStorage.setItem(WRONG_KEY, JSON.stringify(ids));
}

export function saveProgress(progress: SavedProgress): void {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export function loadProgress(): SavedProgress | null {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearProgress(): void {
  localStorage.removeItem(PROGRESS_KEY);
}

export function clearRecords(): void {
  localStorage.removeItem(RECORDS_KEY);
}
