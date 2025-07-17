import React from "react";
import { Shuffle, Zap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface GenerateButtonProps {
  onGenerate: () => void;
  isAnimating: boolean;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({
  onGenerate,
  isAnimating,
}) => {
  const { t } = useLanguage();

  return (
    <div className="flex justify-center mb-8">
      <button
        onClick={onGenerate}
        disabled={isAnimating}
        className={`group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                   text-white font-bold rounded-xl shadow-lg transform transition-all duration-200 
                   hover:scale-105 hover:shadow-xl disabled:opacity-75 disabled:transform-none
                   ${isAnimating ? "animate-pulse" : ""}`}
      >
        <div className="flex items-center space-x-3">
          <div
            className={`transition-transform duration-300 ${
              isAnimating ? "rotate-180" : "group-hover:rotate-12"
            }`}
          >
            {isAnimating ? (
              <Zap className="w-6 h-6" />
            ) : (
              <Shuffle className="w-6 h-6" />
            )}
          </div>
          <span className="text-lg">
            {isAnimating ? t("generate.generating") : t("generate.button")}
          </span>
        </div>
      </button>
    </div>
  );
};

export default GenerateButton;
