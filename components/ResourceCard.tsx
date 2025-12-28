
import React from 'react';
import { Resource, Difficulty } from '../types';

interface ResourceCardProps {
  resource: Resource;
}

const DifficultyBadge: React.FC<{ level: Difficulty }> = ({ level }) => {
  const colors = {
    [Difficulty.Beginner]: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    [Difficulty.Intermediate]: 'bg-amber-100 text-amber-700 border-amber-200',
    [Difficulty.Advanced]: 'bg-rose-100 text-rose-700 border-rose-200',
  };

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${colors[level]}`}>
      {level}
    </span>
  );
};

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <div className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
          {resource.category}
        </span>
        <DifficultyBadge level={resource.difficulty} />
      </div>
      
      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
        {resource.title}
      </h3>
      
      <p className="text-slate-600 text-sm flex-grow mb-6 leading-relaxed">
        {resource.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {resource.tags.map(tag => (
          <span key={tag} className="px-2 py-1 bg-slate-50 text-slate-500 rounded text-[10px] font-medium">
            #{tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <span className="text-xs text-slate-500 italic">By {resource.author}</span>
        <a 
          href={resource.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700"
        >
          View Resource
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};
