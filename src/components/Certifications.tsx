import React from 'react';
import { ShieldCheck, Lock, Code, ExternalLink, Download, Clock, Award } from 'lucide-react';
import { link } from 'fs';

const certifications = [
  {
    title: "SecNumacadémie (ANSSI)",
    issuer: "ANSSI",
    description: "Formation en cybersécurité couvrant les fondamentaux de la sécurité numérique.",
    details: "Acquisition des fondamentaux en sécurité numérique, essentiels pour toute activité de développement.",
    status: "valid",
    link: "https://www.secnumacademie.gouv.fr/",
    pdf: "certs/attestation-anssi.pdf", // À placer dans public/certs/
    icon: <ShieldCheck className="text-green-400" size={24} />
  },
  {
    title: "MOOC CNIL : Le RGPD",
    issuer: "CNIL",
    description: "Maîtrise du Règlement Général sur la Protection des Données.",
    details: "Compréhension des obligations légales, des droits des personnes et des principes de protection des données.",
    status: "valid",
    link: "https://www.cnil.fr/fr/mooc-atelier-rgpd",
    pdf: "certs/attestation-rgpd.pdf",
    icon: <Lock className="text-blue-400" size={24} />
  },
  {
    title: "Certificat Cisco Python",
    issuer: "Cisco NetAcad",
    description: "Programmation Python : POO, fichiers et réseau.",
    details: "Formation avancée couvrant l'orientation objet et les applications réseau.",
    status: "pending",
    link: "https://www.netacad.com/courses/python-essentials-1?courseLang=en-US&instance_id=f2d38a22-007f-427e-a35a-bb4ef9274184",
    icon: <Code className="text-yellow-500" size={24} />
  },
  {
    title: "Certificat Cisco JavaScript",
    issuer: "Cisco NetAcad",
    description: "Développement Web moderne (ES6+, Node.js).",
    details: "Syntaxe moderne, fonctions asynchrones et manipulation du DOM.",
    status: "pending",
    link: "https://www.netacad.com/learning-collections/javascript?courseLang=en-US",
    icon: <Award className="text-yellow-500" size={24} />
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-[#030712] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Mes <span className="text-blue-500">Certifications</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Attestations de compétences et formations validées en cybersécurité et développement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-slate-800/50 rounded-lg group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                {cert.status === 'valid' ? (
                  <span className="text-[10px] bg-green-500/10 text-green-400 px-2 py-1 rounded-full border border-green-500/20 font-bold uppercase">Validée</span>
                ) : (
                  <span className="text-[10px] bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded-full border border-yellow-500/20 font-bold uppercase flex items-center">
                    <Clock size={10} className="mr-1" /> En cours
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
              <p className="text-blue-400 text-sm mb-3">{cert.issuer}</p>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {cert.details}
              </p>

              {cert.status === 'valid' && (
                <div className="flex gap-4 pt-4 border-t border-slate-800">
                  <a href={cert.pdf} download className="text-xs flex items-center text-slate-300 hover:text-white transition-colors">
                    <Download size={14} className="mr-1" /> PDF
                  </a>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-xs flex items-center text-slate-300 hover:text-white transition-colors">
                    <ExternalLink size={14} className="mr-1" /> Site Officiel
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;