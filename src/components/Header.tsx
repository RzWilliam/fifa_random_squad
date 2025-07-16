import React from 'react';
import { Trophy, Users } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-8">
      <div className="flex justify-center items-center mb-4">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full shadow-lg">
          <Trophy className="w-8 h-8 text-white" />
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        FIFA Ultimate Team
      </h1>
      
      <div className="flex justify-center items-center text-gray-300 mb-4">
        <Users className="w-5 h-5 mr-2" />
        <p className="text-lg">Générateur de compositions aléatoires</p>
      </div>
      
      <div className="max-w-2xl mx-auto text-gray-400 text-sm leading-relaxed">
        <p>
          Découvrez de nouvelles formations tactiques avec des compositions aléatoires 
          parmi les 29 formations disponibles dans FIFA. Chaque joueur reçoit un numéro 
          unique pour une expérience authentique.
        </p>
      </div>
    </header>
  );
};

export default Header;