
import React from "react";

const NavBar = ({ toggleLanguage, currentLabel }) => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="text-lg font-bold">
        Rafik Mokrani
      </div>

      {/* to add */}
      <ul className="flex space-x-6">
        {/* to add later */}
        <li>
          <a href="#accueil" className="hover:text-indigo-400">
            Accueil
          </a>
        </li>
        <li>
          <a href="#formations" className="hover:text-indigo-400">
            Formations
          </a>
        </li>
        <li>
          <a href="#experiences" className="hover:text-indigo-400">
            Expériences
          </a>
        </li>
        <li>
          <a href="#projets" className="hover:text-indigo-400">
            Projets
          </a>
        </li>
      </ul>

      {/* Bouton de switch de langue */}
      <button
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded shadow"
        onClick={toggleLanguage}
      >
        {currentLabel}
      </button>
    </nav>
  );
};

export default NavBar;
