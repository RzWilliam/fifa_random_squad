import React, { useState, useEffect } from "react";
import { X, Settings, Users, UserCheck } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  maxStarterNumber: number;
  maxSubstituteNumber: number;
  substituteCount: number;
  onSettingsChange: (
    maxStarter: number,
    maxSubstitute: number,
    subCount: number
  ) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  maxStarterNumber,
  maxSubstituteNumber,
  substituteCount,
  onSettingsChange,
}) => {
  const { t } = useLanguage();
  const [tempMaxStarter, setTempMaxStarter] = useState(maxStarterNumber);
  const [tempMaxSubstitute, setTempMaxSubstitute] =
    useState(maxSubstituteNumber);
  const [tempSubstituteCount, setTempSubstituteCount] =
    useState(substituteCount);

  useEffect(() => {
    setTempMaxStarter(maxStarterNumber);
    setTempMaxSubstitute(maxSubstituteNumber);
    setTempSubstituteCount(substituteCount);
  }, [maxStarterNumber, maxSubstituteNumber, substituteCount]);

  const handleSave = () => {
    onSettingsChange(tempMaxStarter, tempMaxSubstitute, tempSubstituteCount);
    onClose();
  };

  const handleReset = () => {
    setTempMaxStarter(20);
    setTempMaxSubstitute(60);
    setTempSubstituteCount(3);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white">
              {t("settings.title")}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200 p-1 hover:bg-gray-700 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="text-gray-300 text-xs sm:text-sm">
            {t("settings.description")}
          </div>

          {/* Titulaires */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Users className="w-4 h-4 text-white" />
              </div>
              <label className="text-white font-semibold text-sm sm:text-base">
                {t("settings.starters")}
              </label>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-xs sm:text-sm">
                  {t("settings.maxNumber")}
                </span>
                <span className="text-blue-400 font-mono text-sm sm:text-base">
                  {tempMaxStarter}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="99"
                value={tempMaxStarter}
                onChange={(e) => setTempMaxStarter(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs sm:text-xs text-gray-500">
                <span>1</span>
                <span>99</span>
              </div>
            </div>
          </div>

          {/* Nombre de remplaçants */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-600 p-2 rounded-lg">
                <UserCheck className="w-4 h-4 text-white" />
              </div>
              <label className="text-white font-semibold text-sm sm:text-base">
                {t("settings.substituteCount")}
              </label>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-xs sm:text-sm">
                  {t("settings.numberOfSubstitutes")}
                </span>
                <span className="text-yellow-400 font-mono text-sm sm:text-base">
                  {tempSubstituteCount}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="7"
                value={tempSubstituteCount}
                onChange={(e) =>
                  setTempSubstituteCount(parseInt(e.target.value))
                }
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs sm:text-xs text-gray-500">
                <span>1</span>
                <span>7</span>
              </div>
            </div>
          </div>

          {/* Remplaçants */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-600 p-2 rounded-lg">
                <UserCheck className="w-4 h-4 text-white" />
              </div>
              <label className="text-white font-semibold text-sm sm:text-base">
                {t("settings.substitutes")}
              </label>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-xs sm:text-sm">
                  {t("settings.maxNumber")}
                </span>
                <span className="text-yellow-400 font-mono text-sm sm:text-base">
                  {tempMaxSubstitute}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="99"
                value={tempMaxSubstitute}
                onChange={(e) => setTempMaxSubstitute(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs sm:text-xs text-gray-500">
                <span>1</span>
                <span>99</span>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-gray-900 rounded-lg p-3 sm:p-4">
            <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
              {t("settings.preview")}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs sm:text-xs font-bold">
                    {Math.floor(Math.random() * tempMaxStarter) + 1}
                  </span>
                </div>
                <span className="text-gray-300">
                  {t("settings.starter")} (1-{tempMaxStarter})
                </span>
              </div>
              <div className="space-y-2">
                <div className="text-gray-400 text-xs">
                  {tempSubstituteCount}{" "}
                  {t("settings.substitutes").toLowerCase()}
                </div>
                <div className="flex items-center space-x-2 flex-wrap gap-1">
                  {Array.from({ length: tempSubstituteCount }, (_, i) => (
                    <div key={i} className="flex items-center space-x-1">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-black text-xs sm:text-xs font-bold">
                          {Math.floor(Math.random() * tempMaxSubstitute) + 1}
                        </span>
                      </div>
                      {i < tempSubstituteCount - 1 && (
                        <span className="text-gray-500">•</span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-gray-400 text-xs">
                  {t("settings.substitute")} (1-{tempMaxSubstitute})
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-6 border-t border-gray-700 space-y-3 sm:space-y-0">
          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-gray-700 rounded-lg text-sm sm:text-base"
          >
            {t("settings.reset")}
          </button>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-gray-700 rounded-lg text-sm sm:text-base"
            >
              {t("settings.cancel")}
            </button>
            <button
              onClick={handleSave}
              className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 text-sm sm:text-base"
            >
              {t("settings.save")}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid #1f2937;
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid #1f2937;
        }
      `}</style>
    </div>
  );
};

export default SettingsModal;
