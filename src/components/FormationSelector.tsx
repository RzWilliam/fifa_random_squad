import React from "react";
import { formations, Formation } from "../types/formations";
import { Settings } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface FormationSelectorProps {
  currentFormation: Formation | null;
  onFormationSelect: (formation: Formation) => void;
  isAnimating: boolean;
}

const FormationSelector: React.FC<FormationSelectorProps> = ({
  currentFormation,
  onFormationSelect,
  isAnimating,
}) => {
  const { t } = useLanguage();

  const handleFormationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedFormation = formations.find(
      (f) => f.code === event.target.value
    );
    if (selectedFormation) {
      onFormationSelect(selectedFormation);
    }
  };

  return (
    <div className="flex justify-center mb-6">
      <div className="relative">
        <div className="flex items-center space-x-3 bg-gray-800 rounded-xl p-4 border border-gray-700 shadow-lg">
          <div className="flex items-center text-gray-300">
            <Settings className="w-5 h-5 mr-2 text-blue-400" />
            <label htmlFor="formation-select" className="font-semibold">
              {t("formation.choose")}
            </label>
          </div>

          <select
            id="formation-select"
            value={currentFormation?.code || ""}
            onChange={handleFormationChange}
            disabled={isAnimating}
            className={`bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       hover:bg-gray-600 transition-colors duration-200 min-w-[180px]
                       ${
                         isAnimating
                           ? "opacity-50 cursor-not-allowed"
                           : "cursor-pointer"
                       }`}
          >
            <option value="" disabled>
              {t("formation.select")}
            </option>
            {formations.map((formation) => (
              <option key={formation.code} value={formation.code}>
                {formation.name}
              </option>
            ))}
          </select>
        </div>

        {/* Effet de brillance */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-5 transform -skew-x-12 -translate-x-full hover:translate-x-full transition-all duration-700 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default FormationSelector;
