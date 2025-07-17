import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Header
    "header.title": "FUT Générateur d'équipe",
    "header.subtitle": "Générateur de compositions aléatoires",
    "header.description":
      "Découvrez de nouvelles formations tactiques avec des compositions aléatoires parmi les 29 formations disponibles dans FC. Chaque joueur reçoit un numéro unique pour une expérience authentique.",

    // Generate Button
    "generate.button": "Générer une nouvelle équipe",
    "generate.generating": "Génération...",

    // Formation Selector
    "formation.choose": "Choisir une formation :",
    "formation.select": "Sélectionner...",

    // Stats Panel
    "stats.title": "Statistiques de l'équipe",
    "stats.starters": "Joueurs titulaires",
    "stats.averageNumber": "Numéro moyen",
    "stats.highestNumber": "Plus haut numéro",
    "stats.currentFormation": "Formation actuelle:",

    // Football Field
    "field.substitutes": "Remplaçants",

    // Settings Modal
    "settings.title": "Paramètres",
    "settings.description":
      "Personnalisez les numéros maximum pour les joueurs titulaires et remplaçants.",
    "settings.starters": "Joueurs titulaires",
    "settings.substitutes": "Remplaçants",
    'settings.substituteCount': 'Nombre de remplaçants',
    'settings.numberOfSubstitutes': 'Nombre de remplaçants',
    "settings.maxNumber": "Numéro maximum",
    "settings.preview": "Aperçu",
    "settings.starter": "Titulaire",
    "settings.substitute": "Remplaçant",
    "settings.reset": "Réinitialiser",
    "settings.cancel": "Annuler",
    "settings.save": "Sauvegarder",

    // Footer
    "footer.text":
      "Générateur FC Ultimate Team - Toutes les formations officielles incluses",

    // Positions
    "position.G": "G",
    "position.DC": "DC",
    "position.DD": "DD",
    "position.DG": "DG",
    "position.MDC": "MDC",
    "position.MC": "MC",
    "position.MOC": "MOC",
    "position.MD": "MD",
    "position.MG": "MG",
    "position.AD": "AD",
    "position.AG": "AG",
    "position.BU": "BU",
    "position.DEF": "DEF",
    "position.MIL": "MIL",
    "position.ATT": "ATT",
    'position.SUB': 'REMP',
  },
  en: {
    // Header
    "header.title": "FUT Team Generator",
    "header.subtitle": "Random Formation Generator",
    "header.description":
      "Discover new tactical formations with random compositions from the 29 formations available in FC. Each player receives a unique number for an authentic experience.",

    // Generate Button
    "generate.button": "Generate New Team",
    "generate.generating": "Generating...",

    // Formation Selector
    "formation.choose": "Choose a formation:",
    "formation.select": "Select...",

    // Stats Panel
    "stats.title": "Team Statistics",
    "stats.starters": "Starting Players",
    "stats.averageNumber": "Average Number",
    "stats.highestNumber": "Highest Number",
    "stats.currentFormation": "Current Formation:",

    // Football Field
    "field.substitutes": "Substitutes",

    // Settings Modal
    "settings.title": "Settings",
    "settings.description":
      "Customize the maximum numbers for starting players and substitutes.",
    "settings.starters": "Starting Players",
    "settings.substitutes": "Substitutes",
    'settings.substituteCount': 'Number of substitutes',
    'settings.numberOfSubstitutes': 'Number of substitutes',
    "settings.maxNumber": "Maximum number",
    "settings.preview": "Preview",
    "settings.starter": "Starter",
    "settings.substitute": "Substitute",
    "settings.reset": "Reset",
    "settings.cancel": "Cancel",
    "settings.save": "Save",

    // Footer
    "footer.text":
      "FC Ultimate Team Generator - All official formations included",

    // Positions
    "position.G": "GK",
    "position.DC": "CB",
    "position.DD": "RB",
    "position.DG": "LB",
    "position.MDC": "CDM",
    "position.MC": "CM",
    "position.MOC": "CAM",
    "position.MD": "RM",
    "position.MG": "LM",
    "position.AD": "RW",
    "position.AG": "LW",
    "position.BU": "ST",
    "position.DEF": "DEF",
    "position.MIL": "MID",
    "position.ATT": "ATT",
    'position.SUB': 'SUB',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
