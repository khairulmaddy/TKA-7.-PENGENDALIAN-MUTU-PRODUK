import React, { useState } from 'react';
import { StudentAttempt } from '../types';
import { formatSeconds, clearStoredAttempts } from '../utils/quizUtils';
import { exportAttemptsToExcel } from '../utils/excelExporter';
import {
  Users,
  Award,
  FileSpreadsheet,
  Trash2,
  Search,
  Filter,
  BarChart2,
  LogOut,
  RefreshCw,
  ShieldCheck
} from 'lucide-react';

interface AdminDashboardProps {
  attempts: StudentAttempt[];
  onRefreshData: () => void;
  onLogout: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  attempts,
  onRefreshData,
  onLogout,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('ALL');

  // Filtered dataset
  const filteredAttempts = attempts.filter((item) => {
    const matchesSearch =
      item.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.className.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesClass =
      selectedClass === 'ALL' || item.className.trim() === selectedClass.trim();

    return matchesSearch && matchesClass;
  });

  // Unique classes list
  const uniqueClasses = Array.from(
    new Set(attempts.map((a) => a.className).filter(Boolean))
  );

  // Statistics
  const totalSubmissions = attempts.length;
  const uniqueStudents = new Set(attempts.map((a) => a.studentName.trim().toLowerCase())).size;
  const avgScore = totalSubmissions > 0
    ? Math.round(attempts.reduce((sum, a) => sum + a.score, 0) / totalSubmissions)
    : 0;
  const maxScore = totalSubmissions > 0
    ? Math.max(...attempts.map((a) => a.score))
    : 0;

  const handleExportExcel = () => {
    exportAttemptsToExcel(filteredAttempts);
  };

  const handleClearData = () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus SELURUH rekapitulasi data ujian siswa? Action ini tidak dapat dibatalkan.')) {
      clearStoredAttempts();
      onRefreshData();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      {/* Header bar */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl flex flex-wrap items-center justify-between gap-4 border border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-indigo-600 rounded-2xl">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Panel Laporan & Rekapitulasi Nilai Admin
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Akses Khusus Pengawas/Pengajar • Produk Kreatif dan Kewirausahaan (PKK)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleExportExcel}
            disabled={attempts.length === 0}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg transition-all cursor-pointer ${
              attempts.length === 0
                ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20 active:scale-95'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>Download Excel (.xlsx)</span>
          </button>

          <button
            onClick={onLogout}
            className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-rose-600/80 hover:bg-rose-500 text-white transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <LogOut className="w-4 h-4" />
            <span>Keluar Admin</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900">{uniqueStudents}</div>
            <div className="text-xs font-semibold text-slate-500">Total Siswa Unik</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
            <BarChart2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900">{totalSubmissions}</div>
            <div className="text-xs font-semibold text-slate-500">Total Percobaan Ujian</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900">{avgScore}</div>
            <div className="text-xs font-semibold text-slate-500">Rata-Rata Nilai</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900">{maxScore}</div>
            <div className="text-xs font-semibold text-slate-500">Nilai Tertinggi</div>
          </div>
        </div>
      </div>

      {/* Filter and Table Card */}
      <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 space-y-4">
        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto flex-1">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Cari nama siswa..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 font-medium focus:border-indigo-600 outline-none"
              />
            </div>

            {uniqueClasses.length > 0 && (
              <div className="flex items-center gap-1.5 shrink-0">
                <Filter className="w-4 h-4 text-slate-400" />
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold text-slate-800 bg-white outline-none"
                >
                  <option value="ALL">Semua Kelas</option>
                  {uniqueClasses.map((cls) => (
                    <option key={cls} value={cls}>
                      {cls}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
            <button
              onClick={onRefreshData}
              className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
              title="Refresh data"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            <button
              onClick={handleClearData}
              disabled={attempts.length === 0}
              className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all ${
                attempts.length === 0
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-rose-200 text-rose-600 hover:bg-rose-50 cursor-pointer'
              }`}
            >
              <Trash2 className="w-4 h-4" />
              <span>Hapus Data</span>
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[11px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4 text-center">No</th>
                <th className="py-3.5 px-4">Nama Siswa</th>
                <th className="py-3.5 px-4">Kelas</th>
                <th className="py-3.5 px-4 text-center">Kesempatan</th>
                <th className="py-3.5 px-4 text-center">Nilai</th>
                <th className="py-3.5 px-4 text-center">Benar/Salah</th>
                <th className="py-3.5 px-4 text-center">Durasi</th>
                <th className="py-3.5 px-4">Tanggal & Waktu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800 font-medium">
              {filteredAttempts.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-400 font-semibold">
                    Belum ada data rekapitulasi ujian siswa.
                  </td>
                </tr>
              ) : (
                filteredAttempts.map((item, idx) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 text-center font-bold text-slate-500">
                      {idx + 1}
                    </td>
                    <td className="py-3 px-4 font-bold text-slate-900">
                      {item.studentName}
                    </td>
                    <td className="py-3 px-4 text-slate-600">
                      {item.className || '-'}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-extrabold ${
                        item.attemptNumber === 1
                          ? 'bg-blue-100 text-blue-800'
                          : item.attemptNumber === 2
                          ? 'bg-indigo-100 text-indigo-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        Ke-{item.attemptNumber}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center font-extrabold font-mono text-base">
                      <span className={item.score >= 75 ? 'text-emerald-600' : 'text-rose-600'}>
                        {item.score}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center text-xs font-semibold">
                      <span className="text-emerald-600 font-bold">{item.totalCorrect} B</span>
                      <span className="text-slate-300 mx-1">/</span>
                      <span className="text-rose-600 font-bold">{item.totalWrong} S</span>
                    </td>
                    <td className="py-3 px-4 text-center font-mono text-xs text-slate-600">
                      {formatSeconds(item.durationSeconds)}
                    </td>
                    <td className="py-3 px-4 text-xs text-slate-500 whitespace-nowrap">
                      {new Date(item.timestamp).toLocaleString('id-ID', {
                        dateStyle: 'medium',
                        timeStyle: 'short',
                      })}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
