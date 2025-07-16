import React, { useState, useEffect } from "react";
import { X, Settings, Users, UserCheck } from "lucide-react";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  maxStarterNumber: number;
  maxSubstituteNumber: number;
  onSettingsChange: (maxStarter: number, maxSubstitute: number) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  maxStarterNumber,
  maxSubstituteNumber,
  onSettingsChange,
}) => {
  const [tempMaxStarter, setTempMaxStarter] = useState(maxStarterNumber);
  const [tempMaxSubstitute, setTempMaxSubstitute] =
    useState(maxSubstituteNumber);

  useEffect(() => {
    setTempMaxStarter(maxStarterNumber);
    setTempMaxSubstitute(maxSubstituteNumber);
  }, [maxStarterNumber, maxSubstituteNumber]);

  const handleSave = () => {
    onSettingsChange(tempMaxStarter, tempMaxSubstitute);
    onClose();
  };

  const handleReset = () => {
    setTempMaxStarter(20);
    setTempMaxSubstitute(60);
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
      <div className="relative bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-md mx-4 transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white">Paramètres</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200 p-1 hover:bg-gray-700 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="text-gray-300 text-sm">
            Personnalisez les numéros maximum pour les joueurs titulaires et
            remplaçants.
          </div>

          {/* Titulaires */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Users className="w-4 h-4 text-white" />
              </div>
              <label className="text-white font-semibold">
                Joueurs titulaires
              </label>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Numéro maximum</span>
                <span className="text-blue-400 font-mono">
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
              <div className="flex justify-between text-xs text-gray-500">
                <span>1</span>
                <span>99</span>
              </div>
            </div>
          </div>

          {/* Remplaçants */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-600 p-2 rounded-lg">
                <UserCheck className="w-4 h-4 text-white" />
              </div>
              <label className="text-white font-semibold">Remplaçants</label>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Numéro maximum</span>
                <span className="text-yellow-400 font-mono">
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
              <div className="flex justify-between text-xs text-gray-500">
                <span>1</span>
                <span>99</span>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-gray-900 rounded-lg p-4">
            <h4 className="text-white font-semibold mb-3">Aperçu</h4>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {Math.floor(Math.random() * tempMaxStarter) + 1}
                  </span>
                </div>
                <span className="text-gray-300">
                  Titulaire (1-{tempMaxStarter})
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-black text-xs font-bold">
                    {Math.floor(Math.random() * tempMaxSubstitute) + 1}
                  </span>
                </div>
                <span className="text-gray-300">
                  Remplaçant (1-{tempMaxSubstitute})
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-700">
          <button
            onClick={handleReset}
            className="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-gray-700 rounded-lg"
          >
            Réinitialiser
          </button>
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-gray-700 rounded-lg"
            >
              Annuler
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              Sauvegarder
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
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
