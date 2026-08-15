import React, { useState, useEffect } from 'react';
import { PreparedQuestion } from '../utils/quizUtils';
import { Timer, ArrowLeft, ArrowRight, CheckCircle2, Grid, HelpCircle, Send, AlertTriangle } from 'lucide-react';

interface QuizScreenProps {
  studentName: string;
  className: string;
  attemptNumber: number;
  questions: PreparedQuestion[];
  onSubmitQuiz: (userAnswers: Record<number, any>, durationSeconds: number) => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  studentName,
  className,
  attemptNumber,
  questions,
  onSubmitQuiz,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [showGridModal, setShowGridModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Stopwatch timer interval
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const currentAnswer = userAnswers[currentQuestion.id];

  // Helper for option select
  const handleOptionSelect = (value: any) => {
    if (currentQuestion.type === 'pg' || currentQuestion.type === 'benar_salah') {
      setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
    } else if (currentQuestion.type === 'pg_kompleks') {
      const existing: string[] = Array.isArray(currentAnswer) ? [...currentAnswer] : [];
      const letter = typeof value === 'string' ? value.charAt(0) : value;
      const index = existing.indexOf(letter);
      if (index > -1) {
        existing.splice(index, 1);
      } else {
        existing.push(letter);
      }
      setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: existing }));
    }
  };

  const handleMatchingSelect = (leftId: string, rightId: string) => {
    const existing = (currentAnswer && typeof currentAnswer === 'object') ? { ...currentAnswer } : {};
    existing[leftId] = rightId;
    setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: existing }));
  };

  const isAnswered = (q: PreparedQuestion) => {
    const ans = userAnswers[q.id];
    if (ans === undefined || ans === null) return false;
    if (q.type === 'pg' || q.type === 'benar_salah') return typeof ans === 'string' && ans.trim().length > 0;
    if (q.type === 'pg_kompleks') return Array.isArray(ans) && ans.length > 0;
    if (q.type === 'menjodohkan') return typeof ans === 'object' && Object.keys(ans).length > 0;
    return false;
  };

  const totalAnsweredCount = questions.filter(q => isAnswered(q)).length;

  const handleConfirmSubmit = () => {
    onSubmitQuiz(userAnswers, secondsElapsed);
  };

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
      {/* Top Bar: Student Info & Timer */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200 flex flex-wrap items-center justify-between gap-3 sticky top-2 z-20 backdrop-blur-md bg-white/95">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 font-extrabold flex items-center justify-center text-lg">
            {studentName.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span>{studentName}</span>
              {className && (
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                  {className}
                </span>
              )}
            </div>
            <div className="text-xs font-medium text-slate-500">
              Kesempatan Ke-{attemptNumber} dari 3 {attemptNumber === 3 && '• ⚡ Soal Diacak'}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 ml-auto">
          {/* Stopwatch Display */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 text-amber-300 font-mono font-bold text-sm sm:text-base border border-slate-800 shadow-inner">
            <Timer className="w-4 h-4 text-amber-400 animate-spin" />
            <span>{formatTimer(secondsElapsed)}</span>
          </div>

          {/* Soal Grid Modal Trigger Button */}
          <button
            onClick={() => setShowGridModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs sm:text-sm border border-indigo-200 transition-colors cursor-pointer"
          >
            <Grid className="w-4 h-4" />
            <span>{totalAnsweredCount}/{totalQuestions} Soal</span>
          </button>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-xl border border-slate-100 space-y-6">
        {/* Header of Question */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-indigo-600 text-white font-extrabold text-xs sm:text-sm">
              Soal No. {currentIndex + 1} / {totalQuestions}
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs border border-indigo-200">
              {currentQuestion.level}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 uppercase tracking-wide">
              {currentQuestion.type === 'pg' && 'Pilihan Ganda'}
              {currentQuestion.type === 'pg_kompleks' && 'Pilihan Ganda Kompleks'}
              {currentQuestion.type === 'benar_salah' && 'Benar / Salah'}
              {currentQuestion.type === 'menjodohkan' && 'Menjodohkan'}
            </span>
          </div>

          {isAnswered(currentQuestion) && (
            <span className="flex items-center gap-1 text-emerald-600 font-bold text-xs bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-4 h-4" />
              Sudah Dijawab
            </span>
          )}
        </div>

        {/* Question Text with high-contrast text */}
        <div className="text-slate-900 font-bold text-base sm:text-xl leading-relaxed">
          {currentQuestion.questionText}
        </div>

        {/* Options Rendering */}
        <div className="pt-2 space-y-3">
          {/* TYPE 1: PG & BENAR SALAH */}
          {(currentQuestion.type === 'pg' || currentQuestion.type === 'benar_salah') && (
            <div className="space-y-3">
              {(currentQuestion.shuffledOptions || currentQuestion.options || []).map((optionText, optIdx) => {
                const letter = optionText.charAt(0); // 'A', 'B', etc.
                const isSelected = currentAnswer === letter || currentAnswer === optionText;

                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => handleOptionSelect(letter)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-start gap-3.5 cursor-pointer ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/90 text-indigo-950 font-bold shadow-md ring-2 ring-indigo-200'
                        : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-slate-50/80 text-slate-900 font-medium'
                    }`}
                  >
                    <div className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                      isSelected
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-700 border border-slate-300'
                    }`}>
                      {letter}
                    </div>
                    <div className="text-sm sm:text-base leading-snug pt-0.5 text-slate-900">
                      {optionText}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* TYPE 2: PG KOMPLEKS (MULTIPLE CHECKBOXES) */}
          {currentQuestion.type === 'pg_kompleks' && (
            <div className="space-y-3">
              <p className="text-xs font-semibold text-indigo-700 bg-indigo-50 p-2.5 rounded-xl border border-indigo-100">
                💡 Pertanyaan ini memiliki lebih dari 1 jawaban benar. Centang semua yang sesuai!
              </p>
              {(currentQuestion.shuffledOptions || currentQuestion.options || []).map((optionText, optIdx) => {
                const letter = optionText.charAt(0);
                const selectedList: string[] = Array.isArray(currentAnswer) ? currentAnswer : [];
                const isChecked = selectedList.includes(letter);

                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => handleOptionSelect(letter)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-start gap-3.5 cursor-pointer ${
                      isChecked
                        ? 'border-indigo-600 bg-indigo-50/90 text-indigo-950 font-bold shadow-md ring-2 ring-indigo-200'
                        : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-slate-50/80 text-slate-900 font-medium'
                    }`}
                  >
                    <div className={`w-6 h-6 shrink-0 rounded-md flex items-center justify-center transition-colors border ${
                      isChecked
                        ? 'bg-indigo-600 border-indigo-600 text-white'
                        : 'bg-white border-slate-400 text-transparent'
                    }`}>
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="text-sm sm:text-base leading-snug text-slate-900">
                      {optionText}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* TYPE 3: MENJODOHKAN (MATCHING) */}
          {currentQuestion.type === 'menjodohkan' && (
            <div className="space-y-4">
              <p className="text-xs font-semibold text-indigo-700 bg-indigo-50 p-2.5 rounded-xl border border-indigo-100">
                🔗 Pasangkan setiap item pada Kolom A dengan pilihan fungsi yang tepat pada Kolom B.
              </p>

              <div className="grid gap-4 sm:gap-5">
                {(currentQuestion.shuffledMatchingData?.columnA || currentQuestion.matchingData?.columnA || []).map((colA) => {
                  const selectedRightId = (currentAnswer && typeof currentAnswer === 'object') ? currentAnswer[colA.id] : '';

                  return (
                    <div key={colA.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div className="font-bold text-slate-900 text-sm sm:text-base sm:w-1/3">
                        {colA.text}
                      </div>

                      <div className="w-full sm:w-2/3">
                        <select
                          value={selectedRightId || ''}
                          onChange={(e) => handleMatchingSelect(colA.id, e.target.value)}
                          className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-semibold text-xs sm:text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
                        >
                          <option value="">-- Pasangkan dengan Kolom B --</option>
                          {(currentQuestion.shuffledMatchingData?.columnB || currentQuestion.matchingData?.columnB || []).map((colB) => (
                            <option key={colB.id} value={colB.id}>
                              {colB.text}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Buttons */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            type="button"
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((prev) => prev - 1)}
            className={`px-4 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
              currentIndex === 0
                ? 'opacity-40 bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-800 cursor-pointer active:scale-95'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>

          {currentIndex < totalQuestions - 1 ? (
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => prev + 1)}
              className="px-5 sm:px-7 py-3 rounded-xl font-bold text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 flex items-center gap-2 transition-all cursor-pointer active:scale-95 ml-auto"
            >
              <span>Selanjutnya</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowConfirmModal(true)}
              className="px-6 sm:px-8 py-3 rounded-xl font-extrabold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 flex items-center gap-2 transition-all cursor-pointer active:scale-95 ml-auto"
            >
              <Send className="w-4 h-4" />
              <span>Selesai & Kirim Ujian</span>
            </button>
          )}
        </div>
      </div>

      {/* QUESTION GRID MODAL */}
      {showGridModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 space-y-5 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                <Grid className="w-5 h-5 text-indigo-600" />
                Daftar Navigasi Soal
              </h3>
              <button
                onClick={() => setShowGridModal(false)}
                className="text-slate-400 hover:text-slate-700 font-bold p-1 text-lg"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-8 gap-2.5">
              {questions.map((q, idx) => {
                const answered = isAnswered(q);
                const isCurrent = idx === currentIndex;

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setShowGridModal(false);
                    }}
                    className={`h-11 rounded-xl font-extrabold text-sm flex items-center justify-center transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-indigo-600 text-white ring-4 ring-indigo-200 scale-105'
                        : answered
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 hover:bg-emerald-200'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t text-xs font-medium text-slate-500 flex items-center justify-around">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500" /> Sudah Dijawab
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-indigo-600" /> Soal Saat Ini
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-300" /> Belum Dijawab
              </span>
            </div>
          </div>
        </div>
      )}

      {/* CONFIRMATION SUBMIT MODAL */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl border border-slate-100 text-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 mx-auto flex items-center justify-center">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-extrabold text-slate-900 text-xl">Kirim Jawaban Pengendalian Mutu Produk?</h3>
              <p className="text-sm text-slate-600">
                Anda telah menjawab <strong>{totalAnsweredCount}</strong> dari total <strong>{totalQuestions}</strong> soal.
                {totalAnsweredCount < totalQuestions && (
                  <span className="block mt-1 text-rose-600 font-semibold">
                    ⚠️ Masih ada {totalQuestions - totalAnsweredCount} soal yang belum dijawab!
                  </span>
                )}
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="px-5 py-2.5 rounded-xl font-bold text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                Periksa Kembali
              </button>
              <button
                type="button"
                onClick={handleConfirmSubmit}
                className="px-6 py-2.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 transition-colors"
              >
                Kirim Ujian Sekarang
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
