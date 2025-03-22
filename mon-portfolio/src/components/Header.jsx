// src/components/Header.jsx
import React from "react";
import { motion } from "framer-motion";
import mainPhoto from "../images/main_photo.png";

const Header = ({ headerData }) => {
  return (
    <motion.header
      className="header container scroll-mt-20"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
    >

      <div className="headerText">
        <h1 className="headerName">{headerData.name}</h1>
        <h2 className="headerTitle">{headerData.title}</h2>
        <p className="headerGreeting">{headerData.greeting}</p>
        <p className="headerSub">{headerData.info}</p>
      </div>

      <div className="headerPhoto">
        <img
          src={mainPhoto}
          alt="moi"
        />
      </div>

    </motion.header>
  );
};

export default Header;


