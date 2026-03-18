"use client";
import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const formations = [
  {
    title: "Baccalauréat Général",
    level: "BAC",
    school: "Lycée Français Saint-Exupéry",
    location: "Brazzaville, Congo",
    period: "2022 - 2023",
    description: "Spécialités Mathématiques et Sciences économiques et sociales (SES).",
  },
  {
    title: "BUT Informatique",
    level: "Bac+1",
    school: "Université Polytechnique Haut-de-France (UPHF)",
    location: "Lille, France",
    period: "2023 - 2024",
    description: "Formation couvrant programmation, algorithmique, bases de données, les systèmes et réseaux, ainsi que le développement d’applications et le travail en mode projet.",
  },
  {
    title: "BTS SIO option SLAM",
    level: "Bac+1",
    school: "Aurlom BTS +",
    location: "Paris, France",
    period: "2024 - 2025",
    description: "Solutions Logicielles et Applications Métier. Apprentissage du développement web, mobile, et gestion de projets informatiques.",
  },
  {
    title: "BTS SIO option SLAM",
    level: "Bac+2",
    school: "ENC Bessières",
    location: "Paris, France",
    period: "2025 - 2026",
    description: "Solutions Logicielles et Applications Métier. Apprentissage du développement web, mobile, et gestion de projets informatiques.",
  },
];

const Formations = () => {
  return (
    <section id="formations" className="py-24 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-blue-600 dark:text-blue-500 mb-6 tracking-tighter">Ma Formation</h2>
          <p className="text-gray-500 dark:text-slate-400 text-lg max-w-2xl mx-auto italic">
            Mon parcours académique du lycée jusqu'au BTS SIO.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-center mb-12 text-gray-800 dark:text-slate-200 uppercase tracking-widest">
          Parcours Éducatif
        </h3>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-blue-400 before:to-transparent">
          {formations.map((form, index) => (
            <div key={index} className="relative bg-white dark:bg-slate-900/50 rounded-3xl p-8 border border-gray-100 dark:border-slate-800 shadow-sm hover:border-blue-500/30 transition-all group backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  {/* Icône avec fond adaptatif */}
                  <div className="bg-blue-50 dark:bg-blue-500/10 p-3 rounded-2xl shadow-sm text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform border border-blue-100 dark:border-blue-500/20">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {form.title}
                      </h4>
                      <span className="px-3 py-0.5 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full border border-blue-100 dark:border-blue-500/20">
                        {form.level}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-slate-400 font-medium flex items-center text-sm">
                      <Award size={14} className="mr-1 text-gray-400 dark:text-slate-500" /> {form.school} 
                      <span className="mx-2 text-gray-300 dark:text-slate-700">•</span>
                      <MapPin size={14} className="mr-1 text-gray-400 dark:text-slate-500" /> {form.location}
                    </p>
                  </div>
                </div>
                
                {/* Badge Calendrier adaptatif */}
                <div className="flex items-center text-sm font-bold text-blue-500 dark:text-blue-400 bg-white dark:bg-slate-800 px-4 py-2 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm">
                  <Calendar size={14} className="mr-2" />
                  {form.period}
                </div>
              </div>

              {/* Description avec bordure adaptative */}
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-slate-800">
                <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed">
                  {form.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formations;