import React from "react";
import { Trophy, Settings } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

interface HeaderProps {
  onSettingsClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSettingsClick }) => {
  const { t } = useLanguage();

  return (
    <header className="text-center mb-8">
      {/* Bouton Settings en haut à droite */}
      <div className="flex justify-end items-center space-x-3 mb-4">
        <LanguageSelector />
        <button
          onClick={onSettingsClick}
          className="group bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white p-3 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-200 hover:scale-105 shadow-lg"
          title={t("settings.title")}
        >
          <Settings className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90" />
        </button>
      </div>

      <div className="flex justify-center items-center mb-4">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full shadow-lg">
          <Trophy className="w-8 h-8 text-white" />
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        {t("header.title")}
      </h1>

      {/* <div className="flex justify-center items-center text-gray-300 mb-4">
        <p className="text-lg">{t("header.subtitle")}</p>
      </div> */}

      <div className="max-w-2xl mx-auto text-gray-400 text-sm leading-relaxed mt-4">
        <p>{t("header.description")}</p>
      </div>
    </header>
  );
};

export default Header;
