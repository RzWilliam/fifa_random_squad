import { useState, useCallback } from "react";
import { formations, Formation } from "../types/formations";
import { Player } from "../types/formations";

const generateRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

const substitutePositions = ["DEF", "MIL", "ATT"];

export const useTeamGenerator = () => {
  const [currentFormation, setCurrentFormation] = useState<Formation | null>(
    null
  );
  const [players, setPlayers] = useState<Player[]>([]);
  const [substitutes, setSubstitutes] = useState<Player[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const generatePlayersForFormation = useCallback((formation: Formation) => {
    // Générer les joueurs titulaires
    const newPlayers: Player[] = formation.players.map((playerTemplate) => ({
      id: generateRandomId(),
      position: playerTemplate.position,
      number: generateRandomNumber(1, 20),
      x: playerTemplate.x,
      y: playerTemplate.y,
    }));

    // Générer les remplaçants
    const newSubstitutes: Player[] = substitutePositions.map((position) => ({
      id: generateRandomId(),
      position,
      number: generateRandomNumber(1, 60),
      x: 0,
      y: 0,
    }));

    setPlayers(newPlayers);
    setSubstitutes(newSubstitutes);
  }, []);

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

  return {
    currentFormation,
    players,
    substitutes,
    isAnimating,
    generateTeam,
    selectFormation,
  };
};
