// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

const Skills = ({ skillsData }) => {
  return (
    <motion.section
      id="skills"
      className="section container scroll-mt-20"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>{skillsData.title}</h2>

      {/* On peut séparer la section en 2 moitiés s'il y a beaucoup de compétences */}
      <div className="sectionContent">
        {/* 1ère moitié */}
        <div>
          <ul>
            {skillsData.items.slice(0, 2).map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        {/* 2ème moitié */}
        <div>
          <ul>
            {skillsData.items.slice(2).map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
