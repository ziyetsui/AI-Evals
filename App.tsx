
import React, { useState, useMemo } from 'react';
import { ResourceCard } from './components/ResourceCard';
import { EvalAdvisor } from './components/EvalAdvisor';
import { RESOURCES } from './constants.tsx';
import { Category } from './types';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  
  const filteredResources = useMemo(() => {
    if (selectedCategory === 'All') return RESOURCES;
    return RESOURCES.filter(r => r.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                AI Evals Mastery Hub
              </span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#path" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">Learning Path</a>
              <a href="#resources" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">Resources</a>
              <a href="#advisor" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">Eval Advisor</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full border border-indigo-100 uppercase tracking-tighter">
                Curated for Engineers
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-indigo-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Master the Art of <span className="text-indigo-300">AI Evaluation</span>
            </h1>
            <p className="text-lg md:text-xl text-indigo-100 mb-10 leading-relaxed max-w-2xl mx-auto">
              Evaluation is the most critical bottleneck in AI development. Learn how to build reliable systems using Evaluation-Driven Development (EDD).
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#resources" className="bg-white text-indigo-900 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-50 transition-all flex items-center">
                Start Learning
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="https://github.com/openai/evals" target="_blank" className="text-indigo-100 hover:text-white flex items-center px-8 py-3 font-semibold">
                View Benchmarks
              </a>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="resources" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Curated Knowledge Base</h2>
              <p className="text-slate-500">Filtered high-signal sources to take you from 0 to 1 in Evals.</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === 'All' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                All
              </button>
              {Object.values(Category).map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === cat ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </section>

        {/* Bottom Section: Learning Path + Advisor */}
        <section id="path" className="bg-slate-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Learning Path */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-6">The Recommended Path</h2>
                  <div className="space-y-6">
                    {[
                      { step: '01', title: 'Mindset Shift: EDD', desc: "Read Hamel Husain's blog. Stop guessing, start measuring. Treat your LLM like software that needs testing." },
                      { step: '02', title: 'Data Collection', desc: "Learn to curate a 'Gold Standard' dataset. Start with 20-50 high-quality input/output pairs for your specific use case." },
                      { step: '03', title: 'Heuristic Evals', desc: "Implement simple code-based tests: Is the JSON valid? Does it contain prohibited words? What is the word count?" },
                      { step: '04', title: 'Model-Based Evals', desc: "Use GPT-4o or Gemini-1.5-Pro as a judge. Feed it your gold standard and have it score the candidate outputs based on a rubric." },
                      { step: '05', title: 'Operationalize', desc: "Integrate Promptfoo or DeepEval into your CI/CD pipeline. No deploy happens unless the eval scores remain high." },
                    ].map((item, idx) => (
                      <div key={idx} className="flex space-x-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 group hover:border-indigo-300 transition-colors">
                        <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center font-bold text-lg">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 text-lg mb-1 group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Chat Advisor */}
              <div id="advisor" className="lg:col-span-5 sticky top-24">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-slate-800 mb-2">Eval Advisor</h2>
                  <p className="text-slate-500">Powered by Gemini. Ask specific questions about your evaluation challenges.</p>
                </div>
                <EvalAdvisor />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm mb-4">
            Curated with ❤️ for the AI Engineering Community
          </p>
          <div className="flex justify-center space-x-6 text-slate-300">
            <span className="hover:text-indigo-500 cursor-help transition-colors">Documentation</span>
            <span>•</span>
            <span className="hover:text-indigo-500 cursor-help transition-colors">Community</span>
            <span>•</span>
            <span className="hover:text-indigo-500 cursor-help transition-colors">Privacy</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
