// PortfolioCVDark.jsx
import React, { useState } from "react";
import { dataFr, dataEn } from "./data/Data";

// Import des composants
import Header from "./components/Header";
import Skills from "./components/Skills";
import Formation from "./components/Formation";
import Experience from "./components/Experience";
import Languages from "./components/Languages";

const PortfolioCVDark = () => {
  // État pour la langue
  const [language, setLanguage] = useState("fr");

  // État pour l'ouverture des formations
  const [openFormation, setOpenFormation] = useState(Array(3).fill(false));

  // Sélection du contenu selon la langue
  const content = language === "fr" ? dataFr : dataEn;

  // Bascule de la langue
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  // Gestion des ouvertures / fermetures de blocs formation
  const handleToggleFormation = (index) => {
    setOpenFormation((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-6 px-4">
      {/* Bouton pour changer la langue */}
      <div className="text-center mb-6">
        <button
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded shadow"
          onClick={toggleLanguage}
        >
          {content.buttonLabel}
        </button>
      </div>

      {/* Contenu principal */}
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <Header headerData={content.header} />

        {/* Skills */}
        <Skills skillsData={content.skills} />

        {/* Formation */}
        <Formation
          formationData={content.formation}
          openFormation={openFormation}
          handleToggleFormation={handleToggleFormation}
        />

        {/* Experience */}
        <Experience experienceData={content.experience} />

        {/* Languages */}
        <Languages languagesData={content.languages} />
      </div>
    </div>
  );
};

export default PortfolioCVDark;
