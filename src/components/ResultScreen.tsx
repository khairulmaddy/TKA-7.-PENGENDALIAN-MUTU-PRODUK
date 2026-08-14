import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Question } from '../types';
import { formatSeconds } from '../utils/quizUtils';
import { Trophy, CheckCircle, XCircle, Clock, RefreshCw, BookOpen, AlertCircle, Sparkles } from 'lucide-react';

interface ResultScreenProps {
  studentName: string;
  className: string;
  attemptNumber: number;
  score: number;
  totalCorrect: number;
  totalWrong: number;
  totalQuestions: number;
  durationSeconds: number;
  questions: Question[];
  userAnswers: Record<number, any>;
  evaluationResults: Record<number, boolean>;
  onRetry: () => void;
  onResetToCover: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  studentName,
  className,
  attemptNumber,
  score,
  totalCorrect,
  totalWrong,
  totalQuestions,
  durationSeconds,
  questions,
  userAnswers,
  evaluationResults,
  onRetry,
  onResetToCover,
}) => {
  // Trigger confetti if high score
  useEffect(() => {
    if (score >= 70) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [score]);

  const isPassed = score >= 75;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10 space-y-8">
      {/* Score Summary Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-100 text-center relative overflow-hidden">
        {/* Glow decoration */}
        <div className={`absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-20 ${
          isPassed ? 'bg-emerald-500' : 'bg-amber-500'
        }`} />

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-slate-100 text-slate-800">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>Hasil Ujian • Kesempatan Ke-{attemptNumber} dari 3</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {isPassed ? '🎉 Selamat! Hasil Sangat Baik' : '💪 Tetap Semangat, Tingkatkan Lagi!'}
          </h2>

          <p className="text-slate-600 text-sm font-medium">
            Siswa: <strong className="text-slate-900">{studentName}</strong> {className && `(${className})`}
          </p>

          {/* Big Score Card */}
          <div className="py-6 flex flex-col items-center justify-center">
            <div className={`text-6xl sm:text-7xl font-black font-mono tracking-tight ${
              score >= 80 ? 'text-emerald-600' : score >= 60 ? 'text-indigo-600' : 'text-rose-600'
            }`}>
              {score}
              <span className="text-2xl sm:text-3xl font-bold text-slate-400">/100</span>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-bold">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                <CheckCircle className="w-4 h-4" />
                {totalCorrect} Jawaban Benar
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-rose-50 text-rose-700 border border-rose-200">
                <XCircle className="w-4 h-4" />
                {totalWrong} Jawaban Salah
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-700 border border-slate-200">
                <Clock className="w-4 h-4" />
                Durasi: {formatSeconds(durationSeconds)}
              </span>
            </div>
          </div>

          {/* Retry or Finish Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            {attemptNumber < 3 ? (
              <button
                onClick={onRetry}
                className="px-6 py-3.5 rounded-2xl font-extrabold text-sm bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-xl shadow-indigo-600/20 flex items-center gap-2 cursor-pointer transition-all active:scale-95"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Ulangi Ujian (Kesempatan Ke-{attemptNumber + 1})</span>
              </button>
            ) : (
              <div className="p-3 bg-purple-50 rounded-2xl border border-purple-200 text-purple-900 text-xs sm:text-sm font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>Seluruh 3 Kali Kesempatan Telah Digunakan. Rekapitulasi Otomatis Disimpan.</span>
              </div>
            )}

            <button
              onClick={onResetToCover}
              className="px-5 py-3.5 rounded-2xl font-bold text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer"
            >
              Halaman Depan
            </button>
          </div>
        </div>
      </div>

      {/* ANSWER REVIEW & PEMBAHASAN SECTION */}
      {attemptNumber < 3 ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              Kunci Jawaban & Pembahasan Soal
            </h3>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              Kesempatan Ke-{attemptNumber}
            </span>
          </div>

          <div className="space-y-4">
            {questions.map((q, idx) => {
              const isCorrect = evaluationResults[q.id];
              const userAns = userAnswers[q.id];

              return (
                <div
                  key={q.id}
                  className={`p-5 sm:p-6 rounded-2xl border-2 transition-all bg-white shadow-sm ${
                    isCorrect ? 'border-emerald-200 bg-emerald-50/20' : 'border-rose-200 bg-rose-50/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="font-extrabold text-sm sm:text-base text-slate-900">
                      Soal No. {idx + 1}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                      isCorrect ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-rose-100 text-rose-800 border border-rose-300'
                    }`}>
                      {isCorrect ? <CheckCircle className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                      {isCorrect ? 'BENAR' : 'SALAH'}
                    </span>
                  </div>

                  <p className="font-bold text-slate-900 text-sm sm:text-base leading-relaxed mb-4">
                    {q.questionText}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm mb-4">
                    <div className="p-3 rounded-xl bg-slate-100/80 border border-slate-200">
                      <span className="block text-slate-500 font-semibold mb-0.5">Jawaban Anda:</span>
                      <strong className={`font-bold ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                        {userAns !== undefined ? (
                          typeof userAns === 'object' ? JSON.stringify(userAns) : String(userAns)
                        ) : '(Tidak Dijawab)'}
                      </strong>
                    </div>

                    <div className="p-3 rounded-xl bg-indigo-50/80 border border-indigo-200">
                      <span className="block text-indigo-600 font-semibold mb-0.5">Kunci Jawaban:</span>
                      <strong className="font-bold text-indigo-900">
                        {typeof q.correctAnswer === 'object' ? JSON.stringify(q.correctAnswer) : String(q.correctAnswer)}
                      </strong>
                    </div>
                  </div>

                  {/* Pembahasan Box */}
                  <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-1">
                    <div className="font-bold text-amber-900 flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-amber-600" />
                      <span>Pembahasan:</span>
                    </div>
                    <p className="text-amber-900 leading-relaxed font-medium">
                      {q.explanation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Attempt 3 Final Summary Only Notice */
        <div className="p-6 bg-slate-900 text-white rounded-3xl space-y-3 text-center border border-slate-800 shadow-xl">
          <h4 className="text-lg font-extrabold text-amber-300">
            Selesai Ujian Kesempatan Terakhir (Ke-3)
          </h4>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Pada kesempatan terakhir, soal dan opsi pilihan telah diacak. Pembahasan tidak ditampilkan untuk menjaga integritas evaluasi akhir. Hasil penilaian Anda telah tersimpan secara otomatis.
          </p>
        </div>
      )}
    </div>
  );
};
