import { useState, useCallback } from 'react';
import { formations, Formation } from '../types/formations';
import { Player } from '../types/formations';

const SETTINGS_STORAGE_KEY = 'fifa-team-generator-settings';

interface Settings {
  maxStarterNumber: number;
  maxSubstituteNumber: number;
  substituteCount: number;
}

const DEFAULT_SETTINGS: Settings = {
  maxStarterNumber: 20,
  maxSubstituteNumber: 60,
  substituteCount: 3,
};

// Fonction pour charger les paramètres depuis localStorage
const loadSettings = (): Settings => {
  try {
    const savedSettings = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      return {
        maxStarterNumber: parsed.maxStarterNumber || DEFAULT_SETTINGS.maxStarterNumber,
        maxSubstituteNumber: parsed.maxSubstituteNumber || DEFAULT_SETTINGS.maxSubstituteNumber,
        substituteCount: parsed.substituteCount || DEFAULT_SETTINGS.substituteCount,
      };
    }
  } catch (error) {
    console.warn('Failed to load settings from localStorage:', error);
  }
  return DEFAULT_SETTINGS;
};

// Fonction pour sauvegarder les paramètres dans localStorage
const saveSettings = (settings: Settings) => {
  try {
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  } catch (error) {
    console.warn('Failed to save settings to localStorage:', error);
  }
};
const generateRandomId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

export const useTeamGenerator = () => {
  // Charger les paramètres depuis localStorage
  const initialSettings = loadSettings();
  
  const [currentFormation, setCurrentFormation] = useState<Formation | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [substitutes, setSubstitutes] = useState<Player[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [maxStarterNumber, setMaxStarterNumber] = useState(initialSettings.maxStarterNumber);
  const [maxSubstituteNumber, setMaxSubstituteNumber] = useState(initialSettings.maxSubstituteNumber);
  const [substituteCount, setSubstituteCount] = useState(initialSettings.substituteCount);

  const generateRandomNumber = useCallback((min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }, []);

  const generatePlayersForFormation = useCallback((formation: Formation) => {
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
        position: 'SUB',
        number: generateRandomNumber(1, maxSubstituteNumber),
        x: 0,
        y: 0,
      });
    }

    setPlayers(newPlayers);
    setSubstitutes(newSubstitutes);
  }, [maxStarterNumber, maxSubstituteNumber, substituteCount, generateRandomNumber]);

  const generateTeam = useCallback(() => {
    setIsAnimating(true);
    
    setTimeout(() => {
      // Sélectionner une formation aléatoire
      const randomFormation = formations[Math.floor(Math.random() * formations.length)];
      setCurrentFormation(randomFormation);
      generatePlayersForFormation(randomFormation);
      setIsAnimating(false);
    }, 300);
  }, [generatePlayersForFormation]);

  const selectFormation = useCallback((formation: Formation) => {
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentFormation(formation);
      generatePlayersForFormation(formation);
      setIsAnimating(false);
    }, 300);
  }, [generatePlayersForFormation]);

  const updateSettings = useCallback((maxStarter: number, maxSubstitute: number, subCount: number) => {
    const newSettings: Settings = {
      maxStarterNumber: maxStarter,
      maxSubstituteNumber: maxSubstitute,
      substituteCount: subCount,
    };
    
    setMaxStarterNumber(maxStarter);
    setMaxSubstituteNumber(maxSubstitute);
    setSubstituteCount(subCount);
    
    // Sauvegarder dans localStorage
    saveSettings(newSettings);
  }, []);

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