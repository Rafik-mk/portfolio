// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

const Skills = ({ skillsData }) => {
  return (
    <motion.div
      className="p-6 shadow-lg rounded-2xl bg-gray-800 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-white">
        {skillsData.title}
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        {skillsData.items.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Skills;