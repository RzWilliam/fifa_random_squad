import React, { useEffect } from "react";
import Header from "./components/Header";
import FootballField from "./components/FootballField";
import GenerateButton from "./components/GenerateButton";
import FormationSelector from "./components/FormationSelector";
import StatsPanel from "./components/StatsPanel";
import { useTeamGenerator } from "./hooks/useTeamGenerator";

function App() {
  const {
    currentFormation,
    players,
    substitutes,
    isAnimating,
    generateTeam,
    selectFormation,
  } = useTeamGenerator();

  // Générer une équipe par défaut au chargement
  useEffect(() => {
    generateTeam();
  }, [generateTeam]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Effet de grille en arrière-plan */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <Header />

        <GenerateButton onGenerate={generateTeam} isAnimating={isAnimating} />

        {currentFormation && (
          <FormationSelector
            currentFormation={currentFormation}
            onFormationSelect={selectFormation}
            isAnimating={isAnimating}
          />
        )}

        {currentFormation && (
          <>
            <StatsPanel
              formation={currentFormation}
              players={players}
              substitutes={substitutes}
            />

            <FootballField
              players={players}
              substitutes={substitutes}
              formation={currentFormation.name}
              isAnimating={isAnimating}
            />
          </>
        )}

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-500">
          <p className="text-sm">
            Générateur FIFA Ultimate Team - Toutes les formations officielles
            incluses
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
