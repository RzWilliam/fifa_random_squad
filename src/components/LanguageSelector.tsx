import React from 'react';
import { FlagIcon } from 'react-flag-kit';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const getCurrentCountryCode = () => {
    return language === 'en' ? 'GB' : 'FR';
  };

  const getCurrentLabel = () => {
    return language === 'en' ? 'EN' : 'FR';
  };

  return (
    <button
      onClick={toggleLanguage}
      className="group bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white p-3 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-200 hover:scale-105 shadow-lg"
      title={`Switch to ${language === 'fr' ? 'English' : 'Français'}`}
    >
      <div className="flex items-center space-x-2">
        {/* <Globe className="w-5 h-5 transition-transform duration-200 group-hover:rotate-12" /> */}
        <FlagIcon 
          code={getCurrentCountryCode()} 
          size={20}
          className="rounded-sm shadow-sm"
        />
        <span className="text-sm font-medium">{getCurrentLabel()}</span>
      </div>
    </button>
  );
};

export default LanguageSelector;