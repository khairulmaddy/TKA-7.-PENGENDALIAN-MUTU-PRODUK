import React, { useState } from 'react';
import { User, BookOpen, GraduationCap, Play, Info, Sparkles, AlertCircle } from 'lucide-react';
import { getStudentAttemptCount } from '../utils/quizUtils';

interface CoverScreenProps {
  onStartQuiz: (studentName: string, className: string, attemptNumber: number) => void;
}

export const CoverScreen: React.FC<CoverScreenProps> = ({ onStartQuiz }) => {
  const [studentName, setStudentName] = useState('');
  const [className, setClassName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Check attempt status whenever name/class are typed
  const attemptCount = (studentName.trim() && className.trim())
    ? getStudentAttemptCount(studentName, className)
    : 0;
  
  const currentAttemptNumber = attemptCount + 1;

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) {
      setErrorMsg('Silakan masukkan Nama Siswa terlebih dahulu.');
      return;
    }

    if (currentAttemptNumber > 3) {
      setErrorMsg('Anda telah menggunakan batas maksimal 3 kali kesempatan ujian.');
      return;
    }

    setErrorMsg('');
    onStartQuiz(studentName.trim(), className.trim(), currentAttemptNumber);
  };

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Animated gradient container card */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Top glowing colorful animated header banner */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white overflow-hidden">
          {/* Animated colorful radial glow circles */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl animate-pulse delay-700" />
          
          <div className="relative z-10 text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 backdrop-blur-md border border-white/20 text-indigo-200">
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
              Evaluasi Pembelajaran Digital
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Pengendalian Mutu Produk
            </h2>

            <div className="pt-1 flex items-center justify-center gap-2 text-sm text-indigo-200 font-medium">
              <BookOpen className="w-4 h-4 text-indigo-300" />
              <span>Mata Pelajaran: <strong className="text-white">Produk Kreatif dan Kewirausahaan</strong></span>
            </div>
          </div>
        </div>

        {/* Cover Form Body */}
        <form onSubmit={handleStart} className="p-6 sm:p-8 space-y-6">
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 flex gap-3 items-start text-xs sm:text-sm text-amber-900">
            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-amber-950">Aturan Pengendalian Mutu Produk (3 Kesempatan):</p>
              <ul className="list-disc list-inside space-y-0.5 text-amber-800">
                <li>Setiap siswa memiliki maksimal <strong>3 kali kesempatan</strong>.</li>
                <li><strong>Kesempatan 1 & 2</strong>: Menampilkan skor, kunci jawaban, dan pembahasan lengkap setelah selesai.</li>
                <li><strong>Kesempatan 3 (Terakhir)</strong>: Soal & pilihan jawaban diacak. Hanya menampilkan hasil akhir (Jumlah Benar & Salah).</li>
              </ul>
            </div>
          </div>

          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm font-medium flex items-center gap-2.5 animate-shake">
              <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="space-y-4">
            {/* Nama Siswa Input */}
            <div>
              <label htmlFor="studentName" className="block text-sm font-bold text-slate-700 mb-1.5">
                Nama Siswa <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  id="studentName"
                  type="text"
                  required
                  placeholder="Masukkan nama lengkap Anda..."
                  value={studentName}
                  onChange={(e) => {
                    setStudentName(e.target.value);
                    setErrorMsg('');
                  }}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 text-slate-900 font-medium placeholder-slate-400 transition-all outline-none text-base"
                />
              </div>
            </div>

            {/* Kelas Input */}
            <div>
              <label htmlFor="className" className="block text-sm font-bold text-slate-700 mb-1.5">
                Kelas
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <input
                  id="className"
                  type="text"
                  placeholder="Ketik kelas Anda (contoh: XII-RPL 1, XII-AKL 2)..."
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 text-slate-900 font-medium placeholder-slate-400 transition-all outline-none text-base"
                />
              </div>
              <p className="text-xs text-slate-500 mt-1">Dapat diisi nama kelas atau dikosongkan.</p>
            </div>
          </div>

          {/* Attempt indicator card */}
          {studentName.trim() && (
            <div className={`p-4 rounded-2xl border transition-all ${
              currentAttemptNumber <= 2 
                ? 'bg-indigo-50/70 border-indigo-200 text-indigo-950'
                : currentAttemptNumber === 3
                ? 'bg-purple-50/80 border-purple-300 text-purple-950'
                : 'bg-rose-50 border-rose-200 text-rose-950'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Status Kesempatan</span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold ${
                  currentAttemptNumber <= 2 ? 'bg-indigo-600 text-white' : currentAttemptNumber === 3 ? 'bg-purple-600 text-white' : 'bg-rose-600 text-white'
                }`}>
                  Kesempatan Ke-{Math.min(currentAttemptNumber, 3)} dari 3
                </span>
              </div>
              
              <p className="text-sm font-semibold mt-1">
                {currentAttemptNumber === 1 && 'Ujian Kesempatan Ke-1: Jawaban & Pembahasan akan ditampilkan setelah selesai.'}
                {currentAttemptNumber === 2 && 'Ujian Kesempatan Ke-2: Jawaban & Pembahasan akan ditampilkan setelah selesai.'}
                {currentAttemptNumber === 3 && '⚡ Kesempatan Terakhir (Ke-3): Soal & Opsi diacak! Hanya menampilkan nilai & hasil akhir.'}
                {currentAttemptNumber > 3 && '⛔ Anda sudah menyelesaikan 3 kali kesempatan.'}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={currentAttemptNumber > 3}
            className={`w-full py-4 px-6 rounded-2xl font-bold text-lg text-white shadow-xl flex items-center justify-center gap-3 transition-all duration-300 ${
              currentAttemptNumber > 3
                ? 'bg-slate-400 cursor-not-allowed opacity-60'
                : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-600 active:scale-[0.99] hover:shadow-indigo-500/25 cursor-pointer'
            }`}
          >
            <Play className="w-5 h-5 fill-current" />
            <span>{currentAttemptNumber > 3 ? 'Batas Kesempatan Habis' : 'Mulai Kerjakan Soal'}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
