import React from 'react';
import { BookOpen, School, Tag, User, Users } from 'lucide-react';

const iconMap = {
  BookOpen,
  School,
  Tag,
  User,
  Users,
};

export default function TesisTabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="bg-white border-b border-slate-200 sticky top-20 md:top-24 z-50 shadow-md">
      <div className="max-w-[1400px] mx-auto px-6 overflow-x-auto hide-scrollbar flex justify-start lg:justify-center gap-2 py-3">
        {tabs.map((tab) => {
          const TabIcon = iconMap[tab.icon] ?? BookOpen;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center shrink-0 gap-2.5 px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#001d3d] text-white shadow-lg'
                  : 'text-slate-500 hover:bg-slate-100 hover:text-[#001d3d]'
              }`}
            >
              <TabIcon size={16} className={activeTab === tab.id ? 'text-[#ea580c]' : ''} /> {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
