import React from 'react';
import { Formation } from '../types/formations';
import { Player } from '../types/formations';
import { Target, Users, Award } from 'lucide-react';

interface StatsPanelProps {
  formation: Formation | null;
  players: Player[];
  substitutes: Player[];
}

const StatsPanel: React.FC<StatsPanelProps> = ({ formation, players, substitutes }) => {
  if (!formation) return null;

  const averageNumber = players.length > 0 
    ? Math.round(players.reduce((sum, player) => sum + player.number, 0) / players.length)
    : 0;

  const highestNumber = players.length > 0 
    ? Math.max(...players.map(p => p.number))
    : 0;

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 mb-8">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Target className="w-6 h-6 mr-2 text-blue-400" />
        Statistiques de l'équipe
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-700 rounded-lg p-4 text-center">
          <div className="flex justify-center mb-2">
            <Users className="w-8 h-8 text-green-400" />
          </div>
          <p className="text-2xl font-bold text-white">{players.length}</p>
          <p className="text-gray-400 text-sm">Joueurs titulaires</p>
        </div>
        
        <div className="bg-gray-700 rounded-lg p-4 text-center">
          <div className="flex justify-center mb-2">
            <Award className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-2xl font-bold text-white">{averageNumber}</p>
          <p className="text-gray-400 text-sm">Numéro moyen</p>
        </div>
        
        <div className="bg-gray-700 rounded-lg p-4 text-center">
          <div className="flex justify-center mb-2">
            <Target className="w-8 h-8 text-red-400" />
          </div>
          <p className="text-2xl font-bold text-white">{highestNumber}</p>
          <p className="text-gray-400 text-sm">Plus haut numéro</p>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-gray-900 rounded-lg">
        <p className="text-gray-300 text-sm">
          <span className="font-semibold text-blue-400">Formation actuelle:</span> {formation.name} ({formation.code})
        </p>
      </div>
    </div>
  );
};

export default StatsPanel;