export type QuestionType = 'pg' | 'pg_kompleks' | 'benar_salah' | 'menjodohkan';

export interface MatchingPair {
  leftId: string;
  leftText: string;
  rightId: string;
  rightText: string;
}

export interface Question {
  id: number;
  level: string; // e.g., 'C1 - Mengingat', 'C5 - Mengevaluasi'
  type: QuestionType;
  questionText: string;
  options?: string[]; // for PG, PG Kompleks, Benar/Salah
  correctAnswer: string | string[] | Record<string, string>; // 'A', ['A','B'], 'Salah', or { '1': 'A', '2': 'C' }
  explanation: string;
  matchingData?: {
    columnA: { id: string; text: string }[];
    columnB: { id: string; text: string }[];
  };
}

export interface StudentAttempt {
  id: string;
  studentName: string;
  className: string;
  attemptNumber: number; // 1, 2, or 3
  score: number; // 0 to 100
  totalCorrect: number;
  totalWrong: number;
  totalQuestions: number;
  durationSeconds: number;
  timestamp: string;
  userAnswers: Record<number, any>; // questionId -> answer
}
