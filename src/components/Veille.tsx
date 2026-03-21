import React from 'react';
import { Clock, AlertTriangle, Lightbulb, BookOpen, ShieldAlert, Cpu, FileCheck, ExternalLink } from 'lucide-react';

const veilleEvents = [
  {
    date: "Avril 2025",
    title: "L'adoption croissante de l'IA par les développeurs juniors",
    type: "opportunite",
    source: "Google Cloud Blog",
    theme: "Productivité / Formation",
    description: "Analyse montrant que les jeunes développeurs transforment la phase d'apprentissage et boostent leur productivité grâce aux assistants IA.",
    link: "https://cloud.google.com/blog/products/ai-machine-learning/ai-and-the-future-of-software-development",
    icon: <Cpu size={18} />
  },
  {
    date: "Mars 2025",
    title: "Le défi de l'attribution et de la propriété du code généré",
    type: "risque",
    source: "ZDNet",
    theme: "Légal / Éthique",
    description: "Examen des zones grises juridiques entourant la propriété intellectuelle du code produit par des LLMs comme Copilot.",
    link: "https://www.zdnet.com/article/who-owns-the-code-if-an-ai-helps-write-it/",
    icon: <ShieldAlert size={18} />
  },
  {
    date: "Mars 2025",
    title: "L'IA pour la modernisation des anciens systèmes (Legacy)",
    type: "opportunite",
    source: "Le Monde Informatique",
    theme: "Maintien / Qualité",
    description: "Comment l'IA analyse et convertit automatiquement le code obsolète vers des plateformes modernes, un gain de temps énorme.",
    link: "https://www.lemondeinformatique.fr/actualites/lire-l-ia-generative-au-secours-de-la-modernisation-du-legacy-91255.html",
    icon: <FileCheck size={18} />
  },
  {
    date: "Février 2025",
    title: "L'introduction silencieuse de vulnérabilités par l'IA",
    type: "risque",
    source: "Snyk Security Report",
    theme: "Sécurité",
    description: "Rapport soulignant que le code généré par IA contient souvent des failles de sécurité subtiles que l'humain doit corriger.",
    link: "https://snyk.io/blog/ai-code-generation-security/",
    icon: <AlertTriangle size={18} />
  },
  {
    date: "Novembre 2024",
    title: "Comment l'IA accélère les tests et la documentation",
    type: "opportunite",
    source: "Developpez.com",
    theme: "Productivité / Qualité",
    description: "L'IA excelle à écrire des cas de test et à générer des descriptions techniques basées sur le code existant.",
    link: "https://www.developpez.com/actu/356542/L-IA-generative-va-t-elle-vraiment-tuer-le-metier-de-developpeur/",
    icon: <Lightbulb size={18} />
  },
  {
    date: "Octobre 2024",
    title: "Évolution du rôle : De codeur à auditeur IA",
    type: "mixte",
    source: "TechCrunch",
    theme: "Compétences / Stratégie",
    description: "Analyse sur le changement de paradigme : le rôle du développeur passe de l'écriture à la vérification et sécurisation.",
    link: "https://techcrunch.com/2024/03/22/the-future-of-the-software-developer-in-the-age-of-ai/",
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
            <p className="text-blue-400 font-medium text-sm md:text-base">
              Problématique : Quels sont les risques et les opportunités de l'IA générative pour le métier de développeur ?
            </p>
          </div>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 pl-8 space-y-10">
          {veilleEvents.map((event, index) => (
            <a 
              key={index} 
              href={event.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative block group"
            >
              {/* Point sur la ligne */}
              <div className={`absolute -left-[41px] top-6 p-2 rounded-full border-2 bg-[#030712] transition-transform duration-300 group-hover:scale-125 ${
                event.type === 'opportunite' ? 'border-green-500 text-green-500' : 
                event.type === 'risque' ? 'border-red-500 text-red-500' : 'border-blue-500 text-blue-500'
              }`}>
                {event.icon}
              </div>

              <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl transition-all duration-300 group-hover:bg-slate-800/60 group-hover:border-blue-500/50 group-hover:translate-x-2">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
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
                  <ExternalLink size={14} className="text-slate-600 group-hover:text-blue-500 transition-colors" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{event.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{event.description}</p>
                
                <div className="flex flex-wrap gap-4 text-[11px] text-slate-500 font-medium">
                  <span className="bg-slate-800/50 px-2 py-1 rounded border border-slate-700">Source: {event.source}</span>
                  <span className="bg-slate-800/50 px-2 py-1 rounded border border-slate-700">Thème: {event.theme}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Synthèse Finale */}
        <div className="mt-20 p-8 bg-gradient-to-br from-slate-900 to-[#030712] border border-slate-800 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <BookOpen size={120} className="text-blue-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center relative">
            <BookOpen className="mr-3 text-blue-500" /> Synthèse & Conclusion
          </h3>
          <div className="space-y-4 text-slate-400 leading-relaxed text-sm md:text-base relative">
            <p>L'intégration de l'IA générative dans le développement est une révolution double.</p>
            <p>Elle représente une <strong className="text-green-500">opportunité majeure</strong> en automatisant les tâches à faible valeur ajoutée, permettant au développeur de se concentrer sur l'innovation.</p>
            <p>Cependant, elle engendre des <strong className="text-red-500">risques critiques</strong> : sécurité, légalité et éthique.</p>
            <p className="pt-6 mt-6 border-t border-slate-800 text-white font-medium italic">
              "Le développeur de demain n'est pas remplacé par l'IA, il est celui qui la gère et l'audite."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Veille;