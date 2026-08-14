import React, { useState, useEffect } from 'react';
import { QUESTIONS } from './data/questions';
import { PreparedQuestion, prepareQuestionsForAttempt, evaluateAnswers, getStoredAttempts, saveStudentAttempt } from './utils/quizUtils';
import { StudentAttempt } from './types';
import { Header } from './components/Header';
import { CoverScreen } from './components/CoverScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { AdminModal } from './components/AdminModal';
import { AdminDashboard } from './components/AdminDashboard';
import { Footer } from './components/Footer';

export default function App() {
  const [viewMode, setViewMode] = useState<'cover' | 'quiz' | 'result' | 'admin'>('cover');
  const [studentName, setStudentName] = useState('');
  const [className, setClassName] = useState('');
  const [attemptNumber, setAttemptNumber] = useState(1);

  // Active quiz state
  const [activeQuestions, setActiveQuestions] = useState<PreparedQuestion[]>([]);
  
  // Last attempt results
  const [lastUserAnswers, setLastUserAnswers] = useState<Record<number, any>>({});
  const [lastScore, setLastScore] = useState(0);
  const [lastTotalCorrect, setLastTotalCorrect] = useState(0);
  const [lastTotalWrong, setLastTotalWrong] = useState(0);
  const [lastDurationSecs, setLastDurationSecs] = useState(0);
  const [lastEvaluationResults, setLastEvaluationResults] = useState<Record<number, boolean>>({});

  // Admin state
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [allAttempts, setAllAttempts] = useState<StudentAttempt[]>([]);

  useEffect(() => {
    setAllAttempts(getStoredAttempts());
  }, []);

  const handleRefreshAdminData = () => {
    setAllAttempts(getStoredAttempts());
  };

  // Start Quiz Handler
  const handleStartQuiz = (name: string, cls: string, attemptNum: number) => {
    setStudentName(name);
    setClassName(cls);
    setAttemptNumber(attemptNum);

    // Prepare questions (shuffled for attempt 3)
    const prepared = prepareQuestionsForAttempt(QUESTIONS, attemptNum);
    setActiveQuestions(prepared);
    setViewMode('quiz');
  };

  // Submit Quiz Handler
  const handleSubmitQuiz = (userAnswers: Record<number, any>, durationSeconds: number) => {
    const evalData = evaluateAnswers(QUESTIONS, userAnswers);

    setLastUserAnswers(userAnswers);
    setLastScore(evalData.score);
    setLastTotalCorrect(evalData.totalCorrect);
    setLastTotalWrong(evalData.totalWrong);
    setLastDurationSecs(durationSeconds);
    setLastEvaluationResults(evalData.results);

    // Save record globally/locally
    const newAttemptRecord: StudentAttempt = {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      studentName,
      className,
      attemptNumber,
      score: evalData.score,
      totalCorrect: evalData.totalCorrect,
      totalWrong: evalData.totalWrong,
      totalQuestions: evalData.totalQuestions,
      durationSeconds,
      timestamp: new Date().toISOString(),
      userAnswers,
    };

    saveStudentAttempt(newAttemptRecord);
    setAllAttempts(getStoredAttempts());

    setViewMode('result');
  };

  // Retry Quiz Handler
  const handleRetryQuiz = () => {
    const nextAttemptNum = attemptNumber + 1;
    if (nextAttemptNum <= 3) {
      handleStartQuiz(studentName, className, nextAttemptNum);
    }
  };

  // Back to Cover Handler
  const handleResetToCover = () => {
    setViewMode('cover');
  };

  // Admin Modal Login
  const handleOpenAdmin = () => {
    if (isAdminLoggedIn) {
      setViewMode('admin');
    } else {
      setIsAdminModalOpen(true);
    }
  };

  const handleAdminLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    setAllAttempts(getStoredAttempts());
    setViewMode('admin');
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    if (viewMode === 'admin') {
      setViewMode('cover');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 antialiased selection:bg-indigo-500 selection:text-white">
      {/* Top Header */}
      <Header
        onOpenAdmin={handleOpenAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
        onAdminLogout={handleAdminLogout}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {viewMode === 'cover' && (
          <CoverScreen onStartQuiz={handleStartQuiz} />
        )}

        {viewMode === 'quiz' && (
          <QuizScreen
            studentName={studentName}
            className={className}
            attemptNumber={attemptNumber}
            questions={activeQuestions}
            onSubmitQuiz={handleSubmitQuiz}
          />
        )}

        {viewMode === 'result' && (
          <ResultScreen
            studentName={studentName}
            className={className}
            attemptNumber={attemptNumber}
            score={lastScore}
            totalCorrect={lastTotalCorrect}
            totalWrong={lastTotalWrong}
            totalQuestions={QUESTIONS.length}
            durationSeconds={lastDurationSecs}
            questions={QUESTIONS}
            userAnswers={lastUserAnswers}
            evaluationResults={lastEvaluationResults}
            onRetry={handleRetryQuiz}
            onResetToCover={handleResetToCover}
          />
        )}

        {viewMode === 'admin' && (
          <AdminDashboard
            attempts={allAttempts}
            onRefreshData={handleRefreshAdminData}
            onLogout={handleAdminLogout}
          />
        )}
      </main>

      {/* Admin Login Password Modal */}
      <AdminModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        onLoginSuccess={handleAdminLoginSuccess}
      />

      {/* Footer Copyright */}
      <Footer />
    </div>
  );
}
