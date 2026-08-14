import * as XLSX from 'xlsx';
import { StudentAttempt } from '../types';
import { formatSeconds } from './quizUtils';

export function exportAttemptsToExcel(attempts: StudentAttempt[], filename = 'Rekap_Ujian_PKK_Pengendalian_Mutu.xlsx') {
  const data = attempts.map((item, index) => ({
    'No': index + 1,
    'Nama Siswa': item.studentName,
    'Kelas': item.className || '-',
    'Kesempatan Ke-': item.attemptNumber,
    'Nilai Akhir': item.score,
    'Jumlah Benar': item.totalCorrect,
    'Jumlah Salah': item.totalWrong,
    'Total Soal': item.totalQuestions,
    'Durasi Pengerjaan': formatSeconds(item.durationSeconds),
    'Tanggal & Waktu': new Date(item.timestamp).toLocaleString('id-ID', {
      dateStyle: 'medium',
      timeStyle: 'short'
    })
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);

  // Set column widths
  worksheet['!cols'] = [
    { wch: 5 },  // No
    { wch: 25 }, // Nama Siswa
    { wch: 15 }, // Kelas
    { wch: 15 }, // Kesempatan Ke-
    { wch: 12 }, // Nilai Akhir
    { wch: 14 }, // Jumlah Benar
    { wch: 14 }, // Jumlah Salah
    { wch: 12 }, // Total Soal
    { wch: 18 }, // Durasi
    { wch: 22 }  // Tanggal & Waktu
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Rekap Hasil Ujian');

  XLSX.writeFile(workbook, filename);
}
