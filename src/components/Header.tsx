import React from 'react';
import { KeyRound, ShieldCheck, Award } from 'lucide-react';

interface HeaderProps {
  onOpenAdmin: () => void;
  isAdminLoggedIn: boolean;
  onAdminLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAdmin,
  isAdminLoggedIn,
  onAdminLogout,
}) => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-b border-indigo-500/30 shadow-lg">
      {/* Subtle glowing animated gradient line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 via-indigo-500 to-cyan-400 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="p-2.5 bg-indigo-600/30 rounded-xl border border-indigo-400/30 backdrop-blur-sm shadow-inner">
            <Award className="w-7 h-7 text-indigo-300 animate-bounce" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white via-indigo-100 to-pink-200 bg-clip-text text-transparent tracking-wide">
              Ujian Pengendalian Mutu (Quality Control)
            </h1>
            <p className="text-xs sm:text-sm text-indigo-200/80 font-medium">
              Mata Pelajaran: <span className="text-indigo-300 font-semibold">Produk Kreatif dan Kewirausahaan (PKK)</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isAdminLoggedIn ? (
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                Mode Admin Aktif
              </span>
              <button
                onClick={onOpenAdmin}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
              >
                Panel Admin
              </button>
              <button
                onClick={onAdminLogout}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-rose-600/80 hover:bg-rose-500 text-white transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              id="admin-login-button"
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600/40 hover:bg-indigo-600/70 border border-indigo-400/40 text-indigo-100 transition-all shadow-sm hover:shadow-indigo-500/20 active:scale-95 cursor-pointer"
              title="Akses Laporan & Rekapitulasi Nilai Admin"
            >
              <KeyRound className="w-4 h-4 text-amber-300" />
              <span>Admin 🔑</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
