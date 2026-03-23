import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { CATEGORY_ICONS } from '../constants.tsx';
import { Project } from '../types.ts';

interface ProjectCardProps {
  project: Project;
}

/**
 * Renders a card displaying project information including title, description, and tags.
 */
export function ProjectCard({ project }: ProjectCardProps): React.ReactElement {
  const categories = Array.isArray(project.category) ? project.category : [project.category];

  return (
    <div className="group relative bg-brand-dark rounded-xl overflow-hidden border border-brand-slate/50 hover:border-brand-orange/50 transition-all duration-300 transform hover:-translate-y-2">
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-brand-orange mb-3">
          {categories.map((cat, i) => (
            <span key={cat} className="inline-flex items-center gap-2">
              {i > 0 && <span className="text-brand-orange/35 select-none" aria-hidden>·</span>}
              {CATEGORY_ICONS[cat]}
              <span className="text-xs font-bold uppercase tracking-widest">{cat}</span>
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-brand-orange transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-brand-slate text-[10px] rounded border border-brand-slate text-gray-300">
              #{tag}
            </span>
          ))}
        </div>
        
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-orange text-sm font-semibold hover:underline"
          >
            {project.link.includes('github') ? <Github size={16} /> : <ExternalLink size={16} />}
            {project.linkLabel ?? 'View Project'}
          </a>
        )}
      </div>
    </div>
  );
}
