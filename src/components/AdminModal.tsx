import React, { useState } from 'react';
import { Lock, LogIn, AlertCircle, X } from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Verify password without revealing default password anywhere in UI copy
    if (password === 'admin123' || password === 'admin') {
      setErrorMsg('');
      onLoginSuccess();
      onClose();
    } else {
      setErrorMsg('Username atau Kata Sandi Admin tidak sesuai.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 mx-auto flex items-center justify-center shadow-inner">
            <Lock className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900">Akses Panel Admin</h3>
          <p className="text-xs text-slate-500 font-medium">
            Masukan kredensial pengawas untuk melihat rekapitulasi nilai siswa.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Username Admin
            </label>
            <input
              type="text"
              required
              placeholder="Masukkan username..."
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setErrorMsg('');
              }}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-slate-900 font-medium text-sm outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Kata Sandi Admin
            </label>
            <input
              type="password"
              required
              placeholder="Masukkan kata sandi..."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrorMsg('');
              }}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-slate-900 font-medium text-sm outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer mt-2"
          >
            <LogIn className="w-4 h-4" />
            <span>Masuk Panel Admin</span>
          </button>
        </form>
      </div>
    </div>
  );
};
