// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";

const Experience = ({ experienceData }) => {
  return (
    <motion.div
      className="p-6 shadow-lg rounded-2xl bg-gray-800 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-white">
        {experienceData.title}
      </h2>
      <div className="space-y-4">
        {experienceData.items.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg shadow text-white"
          >
            <p className="font-semibold">
              {exp.period} : {exp.role} - {exp.company}
            </p>
            <p className="text-gray-300 mt-1">{exp.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
