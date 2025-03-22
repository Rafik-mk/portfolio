// src/components/Languages.jsx
import React from "react";
import { motion } from "framer-motion";

const Languages = ({ languagesData }) => {
  return (
    <motion.section
      id="languages"
      className="section container"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>{languagesData.title}</h2>
      <ul>
        {languagesData.items.map((langItem, index) => (
          <li key={index}>{langItem}</li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Languages;
