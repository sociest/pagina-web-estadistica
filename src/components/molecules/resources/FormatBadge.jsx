import React from 'react';
import { BarChart3, Database, FileBadge, FileSpreadsheet, FileText } from 'lucide-react';

export default function FormatBadge({ format }) {
  let styles = 'bg-slate-100 text-slate-600 border-slate-200';
  let icon = <FileText size={14} />;

  if (format === 'SPSS') {
    styles = 'bg-blue-50 text-blue-700 border-blue-200';
    icon = <Database size={14} />;
  }
  if (format === 'Stata' || format === 'DTA') {
    styles = 'bg-indigo-50 text-indigo-700 border-indigo-200';
    icon = <BarChart3 size={14} />;
  }
  if (format === 'CSV' || format === 'Excel') {
    styles = 'bg-green-50 text-green-700 border-green-200';
    icon = <FileSpreadsheet size={14} />;
  }
  if (format === 'PDF') {
    styles = 'bg-red-50 text-red-700 border-red-200';
    icon = <FileBadge size={14} />;
  }

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest border shadow-sm ${styles}`}>
      {icon} {format}
    </span>
  );
}
