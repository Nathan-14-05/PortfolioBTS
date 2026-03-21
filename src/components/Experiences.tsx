import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, FileText, Download } from 'lucide-react';

const experiences = [
  {
    title: "Stage Développeur Web",
    company: "Milo Agency",
    location: "Paris, France",
    period: "Mai 2025 - Juillet 2025",
    description: "Développement Low-Code, maquettage de sites web et optimisation SEO. Amélioration de la visibilité numérique de l'entreprise.",
    skills: ["WordPress", "Webflow", "Figma", "SEO"],
    type: "Tech",
    side: "left"
  },
  {
    title: "Webmaster",
    company: "Alternance",
    location: "Paris, France",
    period: "Décembre 2024 - Mars 2025",
    description: "Conception d'applications, gestion du patrimoine informatique et renforcement de la cybersécurité des services.",
    skills: ["Python", "Java", "PHP", "WordPress", "Trello"],
    type: "Tech",
    side: "right"
  },
  {
    title: "Projet Base de données SQL",
    company: "BUT Informatique",
    location: "Lille, France",
    period: "Septembre 2024 - Janvier 2025",
    description: "Conception complète d'une base de données SQL pour la gestion d'un événement (invités, stocks, logistique).",
    skills: ["MySQL", "SQL", "Modélisation"],
    type: "Tech",
    side: "left"
  },
  {
    title: "Job étudiant",
    company: "Starbucks",
    location: "Paris, France",
    period: "Aout 2025 - Décembre 2025",
    description: "Gestion des encaissements, travail d'équipe sous haute pression. Développement d'un excellent sens de la relation client.",
    skills: ["Relation Client", "Gestion du stress", "Travail d'équipe", "Rigueur"],
    type: "Soft Skills",
    side: "right"
  }
];

const Experiences = () => {
  return (
    <section id="experiences" className="py-24 bg-[#030712] overflow-hidden px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mon <span className="text-blue-500">Parcours</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            De la technique pure aux compétences humaines, voici comment j'ai forgé mon profil.
          </p>
        </div>

        <div className="relative">
          {/* Ligne centrale adaptée au Dark Mode */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500/50 via-slate-800 to-transparent hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center justify-between w-full ${
                exp.side === 'left' ? 'md:flex-row-reverse' : ''
              }`}>
                <div className="hidden md:block w-5/12"></div>

                {/* Point d'ancrage lumineux */}
                <div className="z-20 hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <Briefcase size={14} className="text-blue-400" />
                </div>

                {/* Carte d'expérience style "Glassmorphism" */}
                <div className="w-full md:w-5/12 bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-mono rounded-full border border-blue-500/20">
                      <Calendar size={12} className="mr-2" />
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                  <div className="flex items-center gap-2 text-blue-400 font-medium mb-4">
                    <span>{exp.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-500 text-sm flex items-center">
                      <MapPin size={14} className="mr-1" /> {exp.location}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="pt-4 border-t border-slate-800">
                    <div className="flex items-center gap-2 mb-3">
                        <Sparkles size={14} className="text-yellow-500" />
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                            {exp.type === "Tech" ? "Technologies" : "Compétences Acquises"}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md border border-slate-700 group-hover:border-blue-500/30 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- NOUVEAU : BLOC BOUTON CV --- */}
        <div className="mt-20 flex flex-col items-center">
          <div className="p-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-full max-w-lg mb-12"></div>
          
          <div className="text-center space-y-6">
            <p className="text-slate-400 text-sm font-medium">
              Envie d'en savoir plus sur mes compétences détaillées ?
            </p>
            
            <a 
              href="projects/cv_portfolio.pdf" // Assure-toi que ton fichier est dans le dossier 'public'
              download
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-slate-900 border border-slate-700 rounded-xl hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] overflow-hidden"
            >
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
              
              <FileText className="mr-3 text-blue-500 group-hover:scale-110 transition-transform duration-300" size={20} />
              <span className="relative">Télécharger mon CV complet</span>
              <Download className="ml-3 text-slate-500 group-hover:translate-y-1 transition-transform duration-300" size={18} />
            </a>
            
            <p className="text-[10px] text-slate-600 uppercase tracking-[0.2em]">
              Format PDF • 1.2 MB
            </p>
          </div>
        </div>
        {/* --- FIN DU BLOC BOUTON CV --- */}

      </div>
    </section>
  );
};

export default Experiences;