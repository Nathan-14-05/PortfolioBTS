import React from 'react';
import { Clock, AlertTriangle, Lightbulb, BookOpen, ShieldAlert, Cpu, FileCheck } from 'lucide-react';

const veilleEvents = [
  {
    date: "Avril 2025",
    title: "L'adoption croissante de l'IA par les développeurs juniors",
    type: "opportunite",
    source: "Etude Google Cloud / Forbes",
    theme: "Productivité / Formation",
    description: "Analyse montrant que les jeunes développeurs sont ceux qui adoptent le plus l'IA, transformant la phase d'apprentissage et la productivité.",
    icon: <Cpu size={18} />
  },
  {
    date: "Mars 2025",
    title: "Le défi de l'attribution et de la propriété du code généré",
    type: "risque",
    source: "ZDNet",
    theme: "Légal / Éthique",
    description: "Examen des zones grises juridiques entourant la propriété intellectuelle du code produit par des LLMs comme Copilot.",
    icon: <ShieldAlert size={18} />
  },
  {
    date: "Mars 2025",
    title: "L'IA pour la modernisation des anciens systèmes (Legacy)",
    type: "opportunite",
    source: "Le Monde Informatique",
    theme: "Maintien / Qualité",
    description: "Analyse et conversion automatique de langages obsolètes vers des plateformes modernes, un gain de temps énorme.",
    icon: <FileCheck size={18} />
  },
  {
    date: "Février 2025",
    title: "L'introduction silencieuse de vulnérabilités dans le code",
    type: "risque",
    source: "Rapport Snyk",
    theme: "Sécurité",
    description: "Le code généré par IA contient souvent des failles subtiles (ex: injection SQL) nécessitant une correction manuelle.",
    icon: <AlertTriangle size={18} />
  },
  {
    date: "Novembre 2024",
    title: "Comment l'IA accélère les tests et la documentation",
    type: "opportunite",
    source: "Developpez.com",
    theme: "Productivité / Qualité",
    description: "L'IA excelle à écrire des cas de test et à générer des descriptions techniques basées sur le code.",
    icon: <Lightbulb size={18} />
  },
  {
    date: "Octobre 2024",
    title: "Évolution du rôle : De codeur à auditeur IA",
    type: "mixte",
    source: "TechCrunch",
    theme: "Compétences / Stratégie",
    description: "Le rôle principal du développeur passe de l'écriture à l'audit, à la vérification et à la sécurisation du code généré.",
    icon: <BookOpen size={18} />
  }
];

const Veille = () => {
  return (
    <section id="veille" className="py-24 bg-[#030712] px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Veille <span className="text-blue-500">Informationnelle</span>
          </h2>
          <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl inline-block mb-6">
            <p className="text-blue-400 font-medium">Problématique : Quels sont les risques et les opportunités de l'IA générative pour le métier de développeur ?</p>
          </div>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 pl-8 space-y-12">
          {veilleEvents.map((event, index) => (
            <div key={index} className="relative">
              {/* Point sur la ligne */}
              <div className={`absolute -left-[41px] p-2 rounded-full border-2 bg-[#030712] ${
                event.type === 'opportunite' ? 'border-green-500 text-green-500' : 
                event.type === 'risque' ? 'border-red-500 text-red-500' : 'border-blue-500 text-blue-500'
              }`}>
                {event.icon}
              </div>

              <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:bg-slate-900/60 transition-all">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-slate-500 flex items-center">
                    <Clock size={12} className="mr-1" /> {event.date}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase ${
                    event.type === 'opportunite' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 
                    event.type === 'risque' ? 'bg-red-500/10 text-red-500 border-red-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                  }`}>
                    {event.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{event.description}</p>
                
                <div className="flex flex-wrap gap-4 text-[11px] text-slate-500 font-medium">
                  <span className="bg-slate-800 px-2 py-1 rounded">Source: {event.source}</span>
                  <span className="bg-slate-800 px-2 py-1 rounded">Thème: {event.theme}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Synthèse Finale */}
        <div className="mt-20 p-8 bg-gradient-to-br from-slate-900 to-[#030712] border border-slate-800 rounded-3xl">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <BookOpen className="mr-3 text-blue-500" /> Synthèse & Conclusion
          </h3>
          <div className="space-y-4 text-slate-400 leading-relaxed text-sm md:text-base">
            <p>L'intégration de l'IA générative dans le développement est une révolution double.</p>
            <p>Elle représente une <strong className="text-green-500">opportunité majeure</strong> en automatisant les tâches à faible valeur ajoutée, permettant au développeur de se concentrer sur l'innovation.</p>
            <p>Cependant, elle engendre des <strong className="text-red-500">risques critiques</strong> : sécurité, légalité et éthique.</p>
            <p className="pt-4 border-t border-slate-800 text-white font-medium italic">
              "Le développeur de demain n'est pas remplacé par l'IA, il est celui qui la gère et l'audite."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Veille;