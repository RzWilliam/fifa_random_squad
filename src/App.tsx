import React, { useEffect } from "react";
import Header from "./components/Header";
import FootballField from "./components/FootballField";
import GenerateButton from "./components/GenerateButton";
import FormationSelector from "./components/FormationSelector";
import StatsPanel from "./components/StatsPanel";
import SettingsModal from "./components/SettingsModal";
import { useTeamGenerator } from "./hooks/useTeamGenerator";
import { useLanguage } from "./contexts/LanguageContext";

function App() {
  const { t } = useLanguage();
  const {
    currentFormation,
    players,
    substitutes,
    isAnimating,
    maxStarterNumber,
    maxSubstituteNumber,
    generateTeam,
    selectFormation,
    updateSettings,
  } = useTeamGenerator();

  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);

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
        <Header onSettingsClick={() => setIsSettingsOpen(true)} />

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

        <SettingsModal
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
          maxStarterNumber={maxStarterNumber}
          maxSubstituteNumber={maxSubstituteNumber}
          onSettingsChange={updateSettings}
        />

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-500">
          <p className="text-sm">{t("footer.text")}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
