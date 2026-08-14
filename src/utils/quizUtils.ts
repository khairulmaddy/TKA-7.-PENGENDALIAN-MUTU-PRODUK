import { Question, StudentAttempt } from '../types';

export interface PreparedQuestion extends Question {
  shuffledOptions?: string[];
  shuffledMatchingData?: {
    columnA: { id: string; text: string }[];
    columnB: { id: string; text: string }[];
  };
}

// Fisher-Yates shuffle
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function prepareQuestionsForAttempt(questions: Question[], attemptNumber: number): PreparedQuestion[] {
  if (attemptNumber < 3) {
    return questions.map(q => ({ ...q }));
  }

  // Attempt 3: Shuffle question order AND shuffle option choices
  const shuffledQuestions = shuffleArray(questions);

  return shuffledQuestions.map(q => {
    const prepared: PreparedQuestion = { ...q };

    if (q.options) {
      // Shuffle options for PG and PG Kompleks (or keep Benar/Salah standard or shuffle)
      prepared.shuffledOptions = shuffleArray(q.options);
    }

    if (q.matchingData) {
      // Shuffle column B for matching question
      prepared.shuffledMatchingData = {
        columnA: [...q.matchingData.columnA],
        columnB: shuffleArray(q.matchingData.columnB)
      };
    }

    return prepared;
  });
}

// Evaluate user answers
export function evaluateAnswers(questions: Question[], userAnswers: Record<number, any>) {
  let totalCorrect = 0;
  let totalWrong = 0;

  const results: Record<number, boolean> = {};

  questions.forEach(q => {
    const userAns = userAnswers[q.id];
    let isCorrect = false;

    if (userAns !== undefined && userAns !== null) {
      if (q.type === 'pg' || q.type === 'benar_salah') {
        // Answer string e.g. "C" or "A. Menambah..." or "Salah"
        // Correct answer could be "C" or "Salah"
        if (typeof userAns === 'string') {
          // If option starts with "C." or is "C"
          const cleanUser = userAns.trim();
          if (cleanUser === q.correctAnswer) {
            isCorrect = true;
          } else if (cleanUser.startsWith(`${q.correctAnswer}.`)) {
            isCorrect = true;
          }
        }
      } else if (q.type === 'pg_kompleks') {
        // Answer is an array of letters e.g. ["A", "B", "D"] or selected option strings
        if (Array.isArray(userAns) && Array.isArray(q.correctAnswer)) {
          const userLetters = userAns.map(a => typeof a === 'string' ? a.charAt(0) : a).sort();
          const correctLetters = [...q.correctAnswer].sort();
          if (
            userLetters.length === correctLetters.length &&
            userLetters.every((val, idx) => val === correctLetters[idx])
          ) {
            isCorrect = true;
          }
        }
      } else if (q.type === 'menjodohkan') {
        // userAns is object like { '1': 'A', '2': 'C', ... }
        if (typeof userAns === 'object' && typeof q.correctAnswer === 'object' && !Array.isArray(q.correctAnswer)) {
          const targetObj = q.correctAnswer as Record<string, string>;
          const keys = Object.keys(targetObj);
          let allMatch = keys.length > 0;
          for (const key of keys) {
            if (userAns[key] !== targetObj[key]) {
              allMatch = false;
              break;
            }
          }
          isCorrect = allMatch;
        }
      }
    }

    results[q.id] = isCorrect;
    if (isCorrect) {
      totalCorrect++;
    } else {
      totalWrong++;
    }
  });

  const totalQuestions = questions.length;
  const score = Math.round((totalCorrect / totalQuestions) * 100);

  return {
    score,
    totalCorrect,
    totalWrong,
    totalQuestions,
    results
  };
}

// Storage helpers
const STORAGE_KEY = 'pkk_quiz_student_attempts_v1';

export function getStoredAttempts(): StudentAttempt[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Error reading stored attempts:', err);
  }
  return [];
}

export function saveStudentAttempt(attempt: StudentAttempt) {
  try {
    const current = getStoredAttempts();
    current.unshift(attempt); // newest first
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch (err) {
    console.error('Error saving student attempt:', err);
  }
}

export function clearStoredAttempts() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Error clearing attempts:', err);
  }
}

export function getStudentAttemptCount(studentName: string, className: string): number {
  const attempts = getStoredAttempts();
  const studentAttempts = attempts.filter(
    a => a.studentName.trim().toLowerCase() === studentName.trim().toLowerCase() &&
         a.className.trim().toLowerCase() === className.trim().toLowerCase()
  );
  return studentAttempts.length;
}

export function formatSeconds(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
