// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";

const Experience = ({ experienceData }) => {
  return (
    <motion.section
      className="section container"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>{experienceData.title}</h2>
      {experienceData.items.map((exp, index) => (
        <div
          key={index}
          style={{
            marginBottom: "1.5rem",
            borderBottom: "1px solid #ddd",
            paddingBottom: "0.5rem"
          }}
        >
          <p style={{ fontWeight: "bold" }}>
            {exp.period} : {exp.role} - {exp.company}
          </p>
          <p style={{ marginTop: "0.5rem", color: "#555" }}>
            {exp.description}
          </p>
        </div>
      ))}
    </motion.section>
  );
};

export default Experience;
