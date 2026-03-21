"use client";

import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle'; // Importation du bouton switch

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('accueil');

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Projets', href: '#projets' },
    { name: 'Compétences', href: '#competences' },
    { name: 'Expériences', href: '#experiences' },
    { name: 'Formations', href: '#formations' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Veille', href: '#veille' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-[#030712]/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-lg font-bold text-xs shadow-sm">NM</span>
          <span className="font-bold text-xl tracking-tighter text-gray-900 dark:text-white uppercase hidden sm:block">
            Nathan M'Boueya
          </span>
        </div>

        {/* Liens de navigation - Ajout de dark:hover et dark:text */}
        <div className="hidden lg:flex gap-2 text-sm font-medium text-gray-600 dark:text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveSection(link.name.toLowerCase())}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === link.name.toLowerCase()
                  ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 font-bold' 
                  : 'hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-800'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions : Toggle Thème + CV */}
        <div className="flex items-center gap-4">
          <ThemeToggle /> {/* <--- On a ajouté le bouton ici */}
          
          <a 
            href="/cv_portfolio.pdf" 
            className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
          >
            <span className="hidden xs:inline">Télécharger le </span>CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;