// Header.jsx
import React from "react";
import { motion } from "framer-motion";

const Header = ({ headerData }) => {
  return (
    <motion.div
      className="p-6 shadow-lg rounded-2xl bg-gray-800 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
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
