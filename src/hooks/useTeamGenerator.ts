import { useState, useCallback } from "react";
import { formations, Formation } from "../types/formations";
import { Player } from "../types/formations";

const generateRandomId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

export const useTeamGenerator = () => {
  const [currentFormation, setCurrentFormation] = useState<Formation | null>(
    null
  );
  const [players, setPlayers] = useState<Player[]>([]);
  const [substitutes, setSubstitutes] = useState<Player[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [maxStarterNumber, setMaxStarterNumber] = useState(20);
  const [maxSubstituteNumber, setMaxSubstituteNumber] = useState(60);
  const [substituteCount, setSubstituteCount] = useState(3);

  const generateRandomNumber = useCallback(
    (min: number, max: number): number => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    []
  );

  const generatePlayersForFormation = useCallback(
    (formation: Formation) => {
      // Générer les joueurs titulaires
      const newPlayers: Player[] = formation.players.map((playerTemplate) => ({
        id: generateRandomId(),
        position: playerTemplate.position,
        number: generateRandomNumber(1, maxStarterNumber),
        x: playerTemplate.x,
        y: playerTemplate.y,
      }));

      // Générer les remplaçants
      const newSubstitutes: Player[] = [];
      for (let i = 0; i < substituteCount; i++) {
        newSubstitutes.push({
          id: generateRandomId(),
          position: "SUB",
          number: generateRandomNumber(1, maxSubstituteNumber),
          x: 0,
          y: 0,
        });
      }

      setPlayers(newPlayers);
      setSubstitutes(newSubstitutes);
    },
    [
      maxStarterNumber,
      maxSubstituteNumber,
      substituteCount,
      generateRandomNumber,
    ]
  );

  const generateTeam = useCallback(() => {
    setIsAnimating(true);

    setTimeout(() => {
      // Sélectionner une formation aléatoire
      const randomFormation =
        formations[Math.floor(Math.random() * formations.length)];
      setCurrentFormation(randomFormation);
      generatePlayersForFormation(randomFormation);
      setIsAnimating(false);
    }, 300);
  }, [generatePlayersForFormation]);

  const selectFormation = useCallback(
    (formation: Formation) => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentFormation(formation);
        generatePlayersForFormation(formation);
        setIsAnimating(false);
      }, 300);
    },
    [generatePlayersForFormation]
  );

  const updateSettings = useCallback(
    (maxStarter: number, maxSubstitute: number, subCount: number) => {
      setMaxStarterNumber(maxStarter);
      setMaxSubstituteNumber(maxSubstitute);
      setSubstituteCount(subCount);
    },
    []
  );

  return {
    currentFormation,
    players,
    substitutes,
    isAnimating,
    maxStarterNumber,
    maxSubstituteNumber,
    substituteCount,
    generateTeam,
    selectFormation,
    updateSettings,
  };
};
