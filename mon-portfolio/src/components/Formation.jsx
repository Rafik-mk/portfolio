// src/components/Formation.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Formation = ({ formationData, openFormation, handleToggleFormation }) => {
  return (
    <motion.section
      
      className="section container scroll-mt-[200px]"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>{formationData.title}</h2>

      {formationData.list.map((item, index) => {
        const isOpen = openFormation[index];
        return (
          <AnimatePresence key={index}>
            <motion.div
              style={{
                marginBottom: "1rem",
                borderBottom: "1px solid #ddd",
                paddingBottom: "0.5rem",
                cursor: "pointer"
              }}
              onClick={() => handleToggleFormation(index)}
              layout
              initial={{ height: 70 }}
              animate={{ height: isOpen ? "auto" : 70 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <div>
                <motion.h3 style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                  {item.year}
                </motion.h3>
                <motion.p style={{ color: "#666", fontSize: "0.9rem" }}>
                  {item.institution}
                </motion.p>
              </div>

              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ marginTop: "0.5rem", color: "#555" }}
                >
                  <p style={{ fontWeight: "bold", marginBottom: "0.3rem" }}>
                    {item.diploma}
                  </p>
                  <p>{item.details}</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        );
      })}
    </motion.section>
  );
};

export default Formation;
