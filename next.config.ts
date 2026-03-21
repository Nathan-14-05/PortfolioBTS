/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Indique à Next de générer des fichiers HTML statiques
  images: {
    unoptimized: true, // Obligatoire car GitHub Pages ne peut pas redimensionner les images à la volée
  },
  // Si ton dépôt s'appelle 'nathan-portfolio', décommente la ligne suivante :
   basePath: '/PortfolioBTS', 
   assetPrefix: '/PortfolioBTS',
};

export default nextConfig;