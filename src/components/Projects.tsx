"use client";

import React, { useState } from 'react';
import { 
  Globe, Smartphone, Database, Folder, 
  Github, ExternalLink, ChevronDown, ChevronUp, Lock, User, GraduationCap 
} from 'lucide-react';

const projectsData = [
  {
    title: "Application Blog Communautaire – Node.js",
    category: "web",
    type: "Projet scolaire",
    status: "Open Source",
    statusIcon: <Lock size={12} />,
    description: "Conception et développement d’un blog full-stack dans le cadre du BTS SIO SLAM. Le projet repose sur une architecture MVC complète avec rendu côté serveur (SSR), permettant une gestion efficace des utilisateurs et des contenus.",
    tags: ["Node.js", "Express", "SQLite", "Handlebars"],
    image: "projects/image-blog-node.png",
    links: { github: "https://github.com/Nathan-14-05/Blog_Communautaire", demo: "#" }
  },
  {
    title: "Portfolio 3D Interactif",
    category: "portfolio",
    type: "Projet perso",
    status: "Open Source",
    statusIcon: <User size={12} />,
    description: "Portfolio personnel développé avec React et Three.js, proposant une expérience immersive en 3D sur desktop et une version optimisée pour mobile.",
    tags: ["React", "Three.js", "TailwindCSS"],
    image: "/api/placeholder/400/220",
    links: { github: "#", demo: "#" }
  },
  {
    title: "Tanso - Création Musicale",
    category: "web",
    type: "Projet de cours",
    status: "Projet scolaire",
    statusIcon: <GraduationCap size={12} />,
    description: "Projet scolaire consistant à concevoir une base de données à partir d’un besoin client réel : l’organisation d’un mariage. L’objectif était de modéliser, implémenter et exploiter une base regroupant différents prestataires et leurs services.",
    tags: ["SQL", "Modélisation UML", "Base de données relationnelle"],
    image: "projects/bdd_portfolio",
    links: { github: "#", demo: "#" }
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projets" className="py-24 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* En-tête avec Titre Adaptatif */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-blue-600 dark:text-blue-500 mb-6 uppercase tracking-tighter">
            Mes Projets
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {['all', 'web', 'mobile', 'sql', 'portfolio'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all border ${
                  filter === cat 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20' 
                    : 'bg-white dark:bg-slate-900 text-gray-400 dark:text-slate-500 border-gray-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-500/50'
                }`}
              >
                {cat === 'all' ? 'Tous les projets' : cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des Projets */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-slate-900/40 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm flex flex-col h-full hover:shadow-xl hover:border-blue-500/30 transition-all duration-500 backdrop-blur-sm"
            >
              
              {/* Image & Badge */}
              <div className="p-4 pb-0">
                <div className="relative h-48 rounded-2xl overflow-hidden bg-gray-50 dark:bg-slate-800">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-bold rounded-full flex items-center gap-1 uppercase">
                       <Globe size={10} /> {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contenu de la carte */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                
                {/* Description */}
                <div className="text-gray-500 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                  <p className={expandedId === index ? "" : "line-clamp-2"}>
                    {project.description}
                  </p>
                  <button 
                    onClick={() => setExpandedId(expandedId === index ? null : index)}
                    className="text-blue-500 dark:text-blue-400 font-bold text-xs flex items-center mt-2 hover:underline"
                  >
                    {expandedId === index ? (
                      <>Voir moins <ChevronUp size={14} className="ml-1" /></>
                    ) : (
                      <>Voir plus <ChevronDown size={14} className="ml-1" /></>
                    )}
                  </button>
                </div>

                {/* Technologies - Look plus moderne en Dark */}
                <div className="mb-6">
                  <p className="text-[10px] font-bold text-gray-400 dark:text-slate-600 uppercase mb-2">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-md border border-blue-100 dark:border-blue-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pied de carte */}
                <div className="mt-auto space-y-4">
                  <div className="flex gap-3">
                    {project.links.github && (
                      <a href={project.links.github} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gray-900 dark:bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-gray-800 dark:hover:bg-slate-700 transition-colors border border-transparent dark:border-slate-700">
                        <Github size={14} /> GitHub
                      </a>
                    )}
                    {project.links.demo && (
                      <a href={project.links.demo} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                        <ExternalLink size={14} /> Démo
                      </a>
                    )}
                  </div>

                  {/* Badge Statut & Type adaptatifs */}
                  <div className="flex flex-col items-center gap-2 pt-2">
                    <div className="w-full bg-gray-50 dark:bg-slate-800/50 py-2 rounded-xl flex items-center justify-center gap-2 text-[10px] font-bold text-gray-500 dark:text-slate-400 border border-transparent dark:border-slate-800">
                      {project.statusIcon} {project.status}
                    </div>
                    <span className="text-[10px] text-blue-500 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-500/20">
                      ● {project.type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;