// src/components/Header.jsx
import React from "react";
import { motion } from "framer-motion";
import mainPhoto from "../images/main_photo.png";

const Header = ({ headerData }) => {
  return (
    <motion.div
      className="p-6 shadow-lg rounded-2xl bg-gray-800 border border-gray-700 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      
      <img
        src={mainPhoto}
        alt="main"
        className="w-32 h-32 object-cover rounded-full mb-4"
      />

      <h1 className="text-3xl font-bold text-center text-white mb-2">
        {headerData.name}
      </h1>
      <p className="text-center text-gray-300">{headerData.title}</p>
      <p className="text-center text-gray-400">{headerData.locationAge}</p>
      <p className="text-center text-gray-400">{headerData.contact}</p>
    </motion.div>
  );
};

export default Header;
