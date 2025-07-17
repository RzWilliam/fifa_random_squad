import React from "react";
import { Player } from "../types/formations";
import { useLanguage } from "../contexts/LanguageContext";

interface FootballFieldProps {
  players: Player[];
  substitutes: Player[];
  formation: string;
  isAnimating: boolean;
}

const FootballField: React.FC<FootballFieldProps> = ({
  players,
  substitutes,
  formation,
  isAnimating,
}) => {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-b from-green-600 to-green-700 rounded-lg shadow-2xl overflow-hidden">
      {/* Header avec formation */}
      <div className="bg-gray-900 text-white p-4 text-center">
        <h2 className="text-2xl font-bold mb-1">Formation {formation}</h2>
        <p className="text-green-400 text-sm">{t("header.title")}</p>
      </div>

      {/* Terrain de football */}
      <div className="relative w-full aspect-[3/4] bg-gradient-to-b from-green-500 to-green-600 overflow-hidden">
        {/* Lignes du terrain */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 400">
          {/* Contour du terrain */}
          <rect
            x="10"
            y="10"
            width="280"
            height="380"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />

          {/* Ligne médiane */}
          <line
            x1="10"
            y1="200"
            x2="290"
            y2="200"
            stroke="white"
            strokeWidth="2"
          />

          {/* Cercle central */}
          <circle
            cx="150"
            cy="200"
            r="30"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="150" cy="200" r="2" fill="white" />

          {/* Surface de réparation haute */}
          <rect
            x="70"
            y="10"
            width="160"
            height="50"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <rect
            x="110"
            y="10"
            width="80"
            height="20"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <circle
            cx="150"
            cy="72"
            r="8"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />

          {/* Surface de réparation basse */}
          <rect
            x="70"
            y="340"
            width="160"
            height="50"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <rect
            x="110"
            y="370"
            width="80"
            height="20"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <circle
            cx="150"
            cy="328"
            r="8"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />

          {/* Corners */}
          <path
            d="M 10 10 Q 20 10 20 20"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M 290 10 Q 280 10 280 20"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M 10 390 Q 20 390 20 380"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M 290 390 Q 280 390 280 380"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>

        {/* Joueurs titulaires */}
        {players.map((player, index) => (
          <div
            key={player.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out ${
              isAnimating ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
            style={{
              left: `${player.x}%`,
              top: `${player.y}%`,
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <div className="flex flex-col items-center">
              {/* Maillot du joueur */}
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-600 rounded-full border-2 sm:border-3 border-white shadow-lg hover:scale-110 transition-transform duration-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-xs md:text-sm">
                    {player.number}
                  </span>
                </div>
                {/* Effet de brillance */}
                <div className="absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-2 h-2 sm:w-3 sm:h-3 bg-white opacity-30 rounded-full"></div>
              </div>
              {/* Position du joueur */}
              <div className="mt-1 bg-black bg-opacity-75 text-white text-xs sm:text-xs md:text-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-semibold">
                {t(`position.${player.position}`)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Remplaçants */}
      <div className="bg-gray-800 p-4">
        <h3 className="text-white text-lg font-semibold mb-3 text-center">
          {t("field.substitutes")}
        </h3>
        <div className="flex justify-center space-x-6">
          {substitutes.map((substitute, index) => (
            <div
              key={substitute.id}
              className={`flex flex-col items-center transition-all duration-500 ease-out ${
                isAnimating ? "scale-0 opacity-0" : "scale-100 opacity-100"
              }`}
              style={{ transitionDelay: `${(players.length + index) * 100}ms` }}
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-yellow-500 rounded-full border-2 border-white shadow-lg hover:scale-110 transition-transform duration-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-black font-bold text-xs sm:text-xs md:text-sm">
                    {substitute.number}
                  </span>
                </div>
                <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white opacity-30 rounded-full"></div>
              </div>
              <div className="mt-1 bg-yellow-600 text-white text-xs sm:text-xs md:text-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-semibold">
                {t(`position.${substitute.position}`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FootballField;
