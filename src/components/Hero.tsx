import React from 'react';
import { MapPin, Download, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 px-6 flex flex-col items-center text-center transition-colors duration-300">
      {/* Badge Disponibilité - Couleurs adaptées */}
      <div className="bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 px-4 py-1 rounded-full text-sm font-medium mb-6 animate-pulse border border-green-200 dark:border-green-500/20">
        Disponible pour de nouvelles opportunités
      </div>

      {/* Titre Principal - Ajout de dark:text-white */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
        Bonjour, je suis <span className="text-blue-600 dark:text-blue-500">Nathan M'Boueya</span>
      </h1>
      
      {/* Description - Ajout de dark:text-slate-400 */}
      <p className="text-xl md:text-2xl text-gray-600 dark:text-slate-400 mb-6 max-w-2xl">
        Étudiant en deuxième année de BTS SIO (SLAM), passionné par le développement de solutions innovantes et les nouvelles technologies.
      </p>

      {/* Localisation - Ajout de dark:text-slate-500 */}
      <div className="flex items-center text-gray-500 dark:text-slate-500 mb-10">
        <MapPin size={18} className="mr-2 text-blue-600 dark:text-blue-500" />
        <span>Asnières-Sur-Seine, France</span>
      </div>

      {/* Boutons d'action */}
      <div className="flex flex-wrap justify-center gap-4">
        <a 
          href="/cv-nathan.pdf" 
          target="_blank"
          className="flex items-center bg-gray-900 dark:bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-blue-700 transition-all shadow-lg dark:shadow-blue-500/20"
        >
          <Download size={18} className="mr-2" />
          Télécharger mon CV
        </a>
        <a 
          href="mailto:nathanboueya14@gmail.com"
          className="flex items-center border border-gray-300 dark:border-slate-700 text-gray-700 dark:text-slate-300 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-all"
        >
          <Mail size={18} className="mr-2" />
          Me contacter
        </a>
      </div>
    </section>
  );
};

export default Hero;