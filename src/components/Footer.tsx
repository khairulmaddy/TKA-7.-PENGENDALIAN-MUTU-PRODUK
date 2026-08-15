import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-6 bg-slate-900 text-slate-400 border-t border-slate-800 text-center">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm font-medium">
        <p className="text-slate-300">
          Produk Kreatif dan Kewirausahaan (PKK) • Pengendalian Mutu Produk
        </p>
        <p className="font-semibold text-slate-200">
          Copywrite by Khairul Maddy
        </p>
      </div>
    </footer>
  );
};
