// src/components/NavBar.jsx
import React from "react";

const NavBar = ({ toggleLanguage, currentLabel }) => {
  return (
    <nav className="navbar">
      <h1>Rafik Mokrani</h1>

      <ul className="navLinks">
        <li>
          <a href="#main">Accueil</a>
        </li>
        <li>
          <a href="#formations">Formations</a>
        </li>
        <li>
          <a href="#experiences">Expériences</a>
        </li>
        <li>
          <a href="#projets">Projets</a>
        </li>
      </ul>

      <button className="langButton" onClick={toggleLanguage}>
        {currentLabel}
      </button>
    </nav>
  );
};

export default NavBar;
