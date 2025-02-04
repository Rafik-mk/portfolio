// PortfolioCVDark.jsx
import React, { useState } from "react";
import { dataFr, dataEn } from "./data/Data";

// Import des composants
import NavBar from "./components/NavBar";
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Barre de navigation */}
      <NavBar
        toggleLanguage={toggleLanguage}
        currentLabel={content.buttonLabel} 
      />

      {/* Contenu principal */}
      <div className="max-w-4xl mx-auto space-y-6 py-6 px-4">
        {/* Accueil */}
        <section id="accueil">
          <Header headerData={content.header} />
        </section>

        {/* Skills */}
        <Skills skillsData={content.skills} />

        {/* Formation */}
        <section id="formations">
          <Formation
            formationData={content.formation}
            openFormation={openFormation}
            handleToggleFormation={handleToggleFormation}
          />
        </section>

        {/* Experience */}
        <section id="experiences">
          <Experience experienceData={content.experience} />
        </section>

        {/* Projets */}
        <section id="projets" className="p-6 shadow-lg rounded-2xl bg-gray-800 border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-white">Projets</h2>
          <p className="text-gray-300">
          </p>
        </section>

        {/* Languages */}
        <Languages languagesData={content.languages} />
      </div>
    </div>
  );
};

export default PortfolioCVDark;
