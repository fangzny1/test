export interface PracticeRecord {
  id: string;
  date: string;
  type: 'full' | 'review';
  totalQuestions: number;
  wrongCount: number;
  scorePercent: number;
  wrongIds: string[];
  duration: number; // seconds
}

const RECORDS_KEY = 'practiceRecords';
const WRONG_KEY = 'wrongQuestions';

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

export function clearRecords(): void {
  localStorage.removeItem(RECORDS_KEY);
}
