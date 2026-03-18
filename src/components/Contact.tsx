"use client";
import React from 'react';
import { Mail, MapPin, Clock, Linkedin, Github, Send, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-blue-600 dark:text-blue-500 mb-6 tracking-tighter">Contactez-moi</h2>
          <p className="text-gray-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Une question, un projet ou simplement envie d'échanger ? Je serais ravi de discuter avec vous !
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Colonne GAUCHE : À propos */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">À propos de moi</h3>
            
            <div className="space-y-4">
              {/* Localisation */}
              <div className="flex items-center p-4 bg-white dark:bg-slate-900/50 rounded-2xl border border-gray-100 dark:border-slate-800 transition-all hover:shadow-md hover:border-blue-500/30">
                <div className="bg-green-100 dark:bg-green-500/10 p-3 rounded-xl text-green-600 dark:text-green-400 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Localisation</p>
                  <p className="text-gray-500 dark:text-slate-400 text-sm">Asnières-Sur-Seine, France</p>
                </div>
              </div>

              {/* Disponibilité */}
              <div className="flex items-center p-4 bg-white dark:bg-slate-900/50 rounded-2xl border border-gray-100 dark:border-slate-800 transition-all hover:shadow-md hover:border-blue-500/30">
                <div className="bg-purple-100 dark:bg-purple-500/10 p-3 rounded-xl text-purple-600 dark:text-purple-400 mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Disponibilité</p>
                  <p className="text-gray-500 dark:text-slate-400 text-sm">Ouvert aux opportunités, stages, alternance et collaborations</p>
                </div>
              </div>
            </div>

            {/* Réseaux Sociaux */}
            <div className="pt-4">
              <h4 className="text-sm font-bold text-gray-400 dark:text-slate-600 uppercase tracking-widest mb-6">Retrouvez-moi sur</h4>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://www.linkedin.com/in/nathan-m%E2%80%99boueya-925078316/" target="_blank" className="flex flex-col items-center p-6 bg-white dark:bg-slate-900/50 border border-gray-100 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-lg hover:border-blue-500/50 transition-all hover:-translate-y-1">
                  <Linkedin size={32} className="text-blue-600 mb-3" />
                  <span className="font-bold text-gray-800 dark:text-slate-200">Linkedin</span>
                  <span className="text-[10px] text-gray-400 dark:text-slate-500 text-center mt-1">Connectons-nous</span>
                </a>
                <a href="https://github.com/Nathan-14-05" target="_blank" className="flex flex-col items-center p-6 bg-white dark:bg-slate-900/50 border border-gray-100 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-lg hover:border-blue-500/50 transition-all hover:-translate-y-1">
                  <Github size={32} className="text-gray-900 dark:text-white mb-3" />
                  <span className="font-bold text-gray-800 dark:text-slate-200">Github</span>
                  <span className="text-[10px] text-gray-400 dark:text-slate-500 text-center mt-1">Mes projets</span>
                </a>
              </div>
            </div>
          </div>

          {/* Colonne DROITE : Formulaire/Email */}
          <div className="bg-gray-50 dark:bg-slate-900/30 rounded-3xl p-8 border border-gray-100 dark:border-slate-800 shadow-sm h-full flex flex-col backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">Me contacter</h3>
            
            {/* Email Box */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 mb-8 flex items-center justify-between group cursor-pointer hover:border-blue-200 dark:hover:border-blue-500/50 transition-colors">
              <div className="flex items-center">
                <div className="bg-blue-50 dark:bg-blue-500/10 p-3 rounded-xl text-blue-600 dark:text-blue-400 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Email professionnel</p>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">nathanboueya14@gmail.com</p>
                </div>
              </div>
              <ExternalLink size={18} className="text-gray-300 dark:text-slate-600 group-hover:text-blue-400 transition-colors" />
            </div>

            {/* Temps de réponse */}
            <div className="text-center mb-8">
               <p className="text-xs font-bold text-gray-400 dark:text-slate-600 uppercase mb-2">Temps de réponse habituel</p>
               <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold border border-green-100 dark:border-green-500/20">
                 <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                 Moins de 24h
               </span>
            </div>

            {/* Call to Action Final */}
            <div className="mt-auto bg-blue-50 dark:bg-blue-500/5 p-8 rounded-2xl border border-blue-100 dark:border-blue-500/20 text-center">
              <h4 className="font-bold text-gray-800 dark:text-slate-200 mb-2">Une question ?</h4>
              <p className="text-sm text-gray-500 dark:text-slate-400 mb-6">N'hésitez pas à m'écrire pour discuter de vos projets.</p>
              <a 
                href="mailto:nathanboueya14@gmail.com"
                className="inline-flex items-center justify-center w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
              >
                <Send size={18} className="mr-2" />
                Envoyer un email
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;