import React from 'react';
import { Award, Bookmark, Building2, Globe, MapPin, Newspaper } from 'lucide-react';

export default function PublicationBadge({ text, type }) {
  let styles = 'bg-slate-100 text-slate-600 border-slate-200';
  let Icon = Bookmark;

  if (type === 'Internacional') {
    styles = 'bg-indigo-50 text-indigo-700 border-indigo-200';
    Icon = Globe;
  }
  if (type === 'Nacional') {
    styles = 'bg-emerald-50 text-emerald-700 border-emerald-200';
    Icon = MapPin;
  }
  if (type === 'Institucional') {
    styles = 'bg-[#001d3d]/10 text-[#001d3d] border-[#001d3d]/20';
    Icon = Building2;
  }

  if (text === 'Revista Cientifica') {
    styles = 'bg-[#ea580c]/10 text-[#ea580c] border-[#ea580c]/20';
    Icon = Award;
  }
  if (text === 'Boletin Informativo') {
    styles = 'bg-blue-50 text-blue-700 border-blue-200';
    Icon = Newspaper;
  }

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest border shadow-sm ${styles}`}>
      <Icon size={14} /> {text}
    </span>
  );
}
