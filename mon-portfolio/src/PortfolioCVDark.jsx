// src/PortfolioCVLight.jsx
import React, { useState } from "react";
import { dataFr, dataEn } from "./data/Data";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Formation from "./components/Formation";
import Experience from "./components/Experience";
import Languages from "./components/Languages";
import Contact from "./components/contact_links";

const PortfolioCVLight = () => {
  const [language, setLanguage] = useState("en");
  // 4 formations => on passe un tableau de 4 booleans
  const [openFormation, setOpenFormation] = useState(Array(4).fill(false));

  const content = language === "fr" ? dataFr : dataEn;

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const handleToggleFormation = (index) => {
    setOpenFormation((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div>
      <NavBar toggleLanguage={toggleLanguage} currentLabel={content.buttonLabel} />

      {/* HEADER */}
      <div id="main" style={{ paddingTop: "40px", marginTop: "-40px" }}></div>
      <Header headerData={content.header} />

      
      <Contact contact_links={content.formation} />

      <div id="formations" style={{ paddingTop: "80px", marginTop: "-80px" }}></div>
      <Formation
        formationData={content.formation}
        openFormation={openFormation}
        handleToggleFormation={handleToggleFormation}
      />

      <div id="experiences" style={{ paddingTop: "80px", marginTop: "-80px" }}></div>
      <Experience experienceData={content.experience} />

      {/* SECTIONS */}
      <Skills skillsData={content.skills} />

      <div id="projets" style={{ paddingTop: "80px", marginTop: "-80px" }}></div>
      {/* Projets (si besoin) 
      <section id="projets" className="section container">
        <h2>Projets</h2>
        <p>
          
        </p>
      </section>*/}

      <Languages languagesData={content.languages} />
    </div>
  );
};

export default PortfolioCVLight;
