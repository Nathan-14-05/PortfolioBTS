"use client";
import React from 'react';
import { Palette, Server, Database, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  return (
    <section id="competences" className="py-24 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* En-tête principal */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tighter">
            Mes Compétences
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Technologies et compétences développées à travers mes expériences professionnelles et projets.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400 uppercase tracking-widest">
          Domaines d'Expertise
        </h3>

        {/* PREMIÈRE GRILLE : FRONTEND & BACKEND */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Bloc Frontend */}
          <div className="group bg-white dark:bg-slate-900/50 rounded-3xl p-8 border border-gray-100 dark:border-slate-800 shadow-sm hover:border-pink-500/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-pink-100 dark:bg-pink-500/10 p-3 rounded-2xl text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform">
                <Palette size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Développement Frontend</h4>
                <p className="text-sm text-gray-500 dark:text-slate-500">Interfaces modernes et responsives</p>
              </div>
            </div>
            <div className="space-y-4">
              <SkillItem title="HTML5 & CSS3" desc="Sémantique, Flexbox, Grid, responsive design" color="bg-blue-400" />
              <SkillItem title="JavaScript ES6+" desc="Manipulation du DOM, événements, API Fetch" color="bg-yellow-400" />
              <SkillItem title="Next.js" desc="Rendu côté serveur (SSR), routage, optimisation des performances" color="bg-blue-500" />
            </div>
          </div>

          {/* Bloc Backend */}
          <div className="group bg-white dark:bg-slate-900/50 rounded-3xl p-8 border border-gray-100 dark:border-slate-800 shadow-sm hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-purple-100 dark:bg-purple-500/10 p-3 rounded-2xl text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                <Server size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Développement Backend</h4>
                <p className="text-sm text-gray-500 dark:text-slate-500">APIs et architecture serveur</p>
              </div>
            </div>
            <div className="space-y-4">
              <SkillItem title="Python & Java" desc="POO, Algorithmique" color="bg-blue-600" />
              <SkillItem title="PHP" desc="Architecture MVC, interaction avec bases de données (SQL)" color="bg-indigo-400" />
              <SkillItem title="Node.js & Express" desc="Création d’API REST, exécution de JavaScript côté serveur, gestion des routes" color="bg-green-500" />
            </div>
          </div>
        </div>

        {/* DEUXIÈME GRILLE : BDD, CLOUD & OUTILS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Bloc Bases de Données */}
          <div className="group bg-white dark:bg-slate-900/50 rounded-3xl p-8 border border-gray-100 dark:border-slate-800 shadow-sm hover:border-indigo-500/30 transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-indigo-100 dark:bg-indigo-500/10 p-3 rounded-2xl text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                <Database size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Bases de Données</h4>
              </div>
            </div>
            <div className="space-y-4">
              <SkillItem title="MySQL" desc="Modélisation, requêtes SQL, jointures, Transact SQL" color="bg-blue-500" />
              <SkillItem title="SQLite" desc="Base de données légère, intégration dans des applications" color="bg-blue-700" />
            </div>
          </div>

          {/* Bloc Cloud & DevOps */}
          <div className="group bg-white dark:bg-slate-900/50 rounded-3xl p-8 border border-gray-100 dark:border-slate-800 shadow-sm hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-100 dark:bg-blue-500/10 p-3 rounded-2xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <Cloud size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Cloud & DevOps</h4>
              </div>
            </div>
            <div className="space-y-4">
              <SkillItem title="Docker" desc="Conteneurisation" color="bg-blue-400" />
              <SkillItem title="Git & GitHub" desc="Versionning, collaboration" color="bg-slate-700" />
            </div>
          </div>

          {/* Bloc Outils */}
          <div className="group bg-white dark:bg-slate-900/50 rounded-3xl p-8 border border-gray-100 dark:border-slate-800 shadow-sm hover:border-orange-500/30 transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-orange-100 dark:bg-orange-500/10 p-3 rounded-2xl text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
                <Wrench size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Outils</h4>
              </div>
            </div>
            <div className="space-y-4">
              <SkillItem title="Suite JetBrains" desc="IDE professionnels, Extensions, débogage" color="bg-blue-500" />
              <SkillItem title="VS Code" desc="Extensions, débogage" color="bg-blue-500" />
              <SkillItem title="Scrum / Agile" desc="Travail en mode projet" color="bg-green-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ title, desc, color }: { title: string, desc: string, color: string }) => (
  <div className="p-4 bg-gray-50 dark:bg-slate-800/40 rounded-2xl border border-transparent hover:border-gray-200 dark:hover:border-slate-700 transition-all group/item">
    <div className="flex items-start gap-3">
      <div className={`w-2 h-2 rounded-full ${color} mt-2 group-hover/item:scale-150 transition-transform`}></div>
      <div>
        <p className="font-bold text-gray-800 dark:text-slate-200 text-sm">{title}</p>
        <p className="text-[11px] text-gray-500 dark:text-slate-500">{desc}</p>
      </div>
    </div>
  </div>
);

export default Skills;