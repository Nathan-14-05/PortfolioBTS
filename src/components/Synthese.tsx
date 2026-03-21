import React from 'react';
import { FileSpreadsheet, Download, ExternalLink, Info } from 'lucide-react';

const Synthese = () => {
  const pdfUrl = "/Tableau-de-Synthese-Nathan-MBoueya.pdf"; // Nom exact du fichier dans /public

  return (
    <section id="synthese" className="py-24 bg-[#030712] px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* En-tête de la section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Tableau de <span className="text-blue-500">Synthèse</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Récapitulatif officiel des compétences acquises et des réalisations professionnelles au cours de mon BTS SIO.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={pdfUrl} 
              download 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20"
            >
              <Download size={18} /> Télécharger le PDF
            </a>
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold transition-all border border-slate-700"
            >
              <ExternalLink size={18} /> Ouvrir en plein écran
            </a>
          </div>
        </div>

        {/* Visionneuse PDF Intégrée */}
        <div className="relative bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="text-slate-700 flex flex-col items-center">
              <FileSpreadsheet size={64} className="mb-4 animate-pulse" />
              <p>Chargement du document...</p>
            </div>
          </div>
          
          {/* L'iframe affiche le PDF directement */}
          <iframe 
            src={`${pdfUrl}#view=FitH`} 
            className="w-full h-[800px] border-none"
            title="Tableau de Synthèse E5"
          >
            <p className="text-white p-10 text-center">
              Votre navigateur ne peut pas afficher le PDF. 
              <a href={pdfUrl} className="text-blue-400 underline">Cliquez ici pour le télécharger.</a>
            </p>
          </iframe>
        </div>

        {/* Note informative pour le jury */}
        <div className="mt-8 flex items-start gap-4 p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
          <Info className="text-blue-500 shrink-0" size={24} />
          <div className="text-sm text-slate-400 leading-relaxed">
            <p className="font-bold text-blue-400 mb-1">Note aux examinateurs :</p>
            Ce tableau de synthèse répertorie l'ensemble de mes projets (Puissance 4, Blog Node.js, Application Nutritionnelle Laravel...) ainsi que mes périodes de stage en milieu professionnel. Il atteste de la validation des blocs de compétences du référentiel SIO[cite: 1, 4].
          </div>
        </div>

      </div>
    </section>
  );
};

export default Synthese;