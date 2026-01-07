import React, { useState, useMemo } from 'react';
import { Category } from './types';
import { PROJECTS, CATEGORY_ICONS } from './constants';
import { ProjectCard } from './components/ProjectCard';
import { AIAssistant } from './components/AIAssistant';
import { Github, Globe, Menu, X, ArrowUpRight, Instagram, Linkedin, Mail, Send } from 'lucide-react';

const Logo = ({ className = "w-32" }: { className?: string }) => (
  <div className={`flex flex-col items-center group cursor-pointer ${className}`}>
    <div className="h-[2px] w-full bg-brand-orange mb-1 group-hover:scale-x-110 transition-transform duration-500"></div>
    <div className="text-2xl font-bold tracking-[0.2em] leading-none py-1 text-white brand-font uppercase">
      MΛXMVS
    </div>
    <div className="h-[2px] w-full bg-brand-orange mt-1 group-hover:scale-x-110 transition-transform duration-500"></div>
  </div>
);

const App: React.FC = () => {
  const [filter, setFilter] = useState<Category | 'All'>('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    return filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen selection:bg-brand-orange/30 blueprint-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-brand-orange/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Logo className="w-40" />
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 text-sm font-medium text-gray-400">
              {['All', ...Object.values(Category)].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat as any)}
                  className={`hover:text-brand-orange transition-colors uppercase tracking-widest text-[10px] ${
                    filter === cat ? 'text-brand-orange font-bold' : ''
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="h-6 w-px bg-brand-orange/20 mx-2"></div>
            
            <div className="flex items-center gap-4">
              <a href="https://github.com/Maximitus" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Github size={20} />
              </a>
              <a href="https://mass-engineering.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <button className="md:hidden text-brand-orange" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass border-b border-brand-orange/20 p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
             {['All', ...Object.values(Category)].map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setFilter(cat as any); setIsMenuOpen(false); }}
                  className={`text-left uppercase tracking-widest text-xs py-2 ${
                    filter === cat ? 'text-brand-orange' : 'text-gray-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
              <div className="flex gap-4 pt-4 border-t border-brand-orange/10">
                <a href="https://github.com/Maximitus" target="_blank" className="text-brand-orange"><Github /></a>
                <a href="https://mass-engineering.com/" target="_blank" className="text-brand-orange"><Globe /></a>
              </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              Operational Across 4 Domains
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-tight">
              PRECISION <br />
              <span className="text-brand-orange">DEFINED.</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
              Expert structural engineer specializing in luxury custom homes designed in ArchiCAD. Synthesizing structural integrity, computational logic, and artisanal craft to build high-performance systems and structures. 
              From luxury residential projects in ArchiCAD to handcrafted walnut.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://mass-engineering.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-brand-orange text-brand-slate font-bold uppercase tracking-tighter rounded-lg flex items-center gap-3 hover:bg-white transition-all duration-300 orange-glow"
              >
                Mass Engineering
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a 
                href="https://github.com/Maximitus" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-dark/50 border border-brand-orange/30 text-white font-bold uppercase tracking-tighter rounded-lg hover:border-brand-orange transition-all"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-transparent rounded-3xl blur-3xl -z-10"></div>
            <div className="bg-brand-dark border border-brand-orange/20 rounded-3xl overflow-hidden aspect-square flex items-center justify-center p-12">
               <Logo className="w-64 opacity-20 scale-[2.5] absolute rotate-[-15deg]" />
               <div className="relative z-10 grid grid-cols-2 gap-4 w-full">
                  {Object.entries(CATEGORY_ICONS).map(([cat, icon]) => (
                    <div key={cat} className="p-8 bg-brand-slate border border-brand-orange/10 rounded-2xl flex flex-col items-center text-center hover:border-brand-orange/50 transition-all duration-500 group">
                      <div className="text-brand-orange mb-4 scale-125 group-hover:scale-150 transition-transform duration-500">{icon}</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500">{cat}</div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Projects Grid */}
      <section className="py-20 px-6 bg-brand-dark/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">PORTFOLIO</h2>
              <div className="h-1 w-20 bg-brand-orange"></div>
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {['All', ...Object.values(Category)].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat as any)}
                  className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                    filter === cat 
                      ? 'bg-brand-orange text-brand-slate' 
                      : 'bg-brand-slate text-gray-400 hover:text-white border border-brand-orange/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div key={project.id} className="animate-in fade-in slide-in-from-bottom-10" style={{ animationDelay: `${idx * 100}ms` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black brand-font italic">LET'S BUILD SOMETHING <span className="text-brand-orange">STRUCTURAL.</span></h2>
          <p className="text-xl text-gray-400">Whether it's a luxury custom home in ArchiCAD, a structural analysis, a custom shop build, or a complex software integration, the MAXMVS methodology guarantees results.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:max@mass-engineering.com" className="px-10 py-5 bg-brand-orange text-brand-slate font-black uppercase tracking-widest rounded-full hover:bg-white transition-colors flex items-center gap-2 group">
              Start Project <Send className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-orange/5 blur-[120px] rounded-full"></div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-brand-dark border-t border-brand-orange/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <Logo className="w-40" />
            <p className="text-gray-400 max-w-sm">
              MAXMVS is a multi-disciplinary brand focused on high-integrity structural engineering, specializing in luxury custom homes designed in ArchiCAD, bespoke craft, and computational innovation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-brand-slate flex items-center justify-center hover:bg-brand-orange hover:text-brand-slate transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-lg bg-brand-slate flex items-center justify-center hover:bg-brand-orange hover:text-brand-slate transition-all"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-lg bg-brand-slate flex items-center justify-center hover:bg-brand-orange hover:text-brand-slate transition-all"><Mail size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-brand-orange">BUSINESS</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="https://mass-engineering.com/" className="hover:text-white transition-colors">Mass Engineering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consulting Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bespoke Furniture</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Training Programs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-orange">DEVELOPMENT</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="https://github.com/Maximitus" className="hover:text-white transition-colors">GitHub Profile</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Open Source Labs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Structural Scripts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">React Components</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
          <div>© {new Date().getFullYear()} MAXMVS HUB. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <a href="https://MAXMVS.com" className="hover:text-brand-orange transition-colors">MAXMVS.com</a>
            <span>STAY PRECISE.</span>
          </div>
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;