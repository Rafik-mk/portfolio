// src/components/Formation.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Formation = ({ formationData, openFormation, handleToggleFormation }) => {
  return (
    <motion.div
      className="p-6 shadow-lg rounded-2xl bg-gray-800 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-white">
        {formationData.title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {formationData.list.map((item, index) => {
          const isOpen = openFormation[index];
          return (
            <AnimatePresence key={index}>
              <motion.div
                className="cursor-pointer bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow p-4 flex flex-col justify-between"
                onClick={() => handleToggleFormation(index)}
                layout
                initial={{ height: 110 }}
                animate={{ height: isOpen ? "auto" : 110 }}
                transition={{ type: "spring", duration: 0.5 }}
              >
                <div>
                  {/* 
                  {item.institution.includes("ESIEA") && (
                    <img
                      src="/images/esiea_logo.png"
                      alt="Logo ESIEA"
                      className="w-16 h-auto mb-2"
                    />
                  )} 
                  */}
                  <motion.h3 className="font-bold text-lg" layout>
                    {item.year}
                  </motion.h3>
                  <motion.p className="text-sm text-gray-200" layout>
                    {item.institution}
                  </motion.p>
                </div>
                {isOpen && (
                  <motion.div
                    className="mt-2 text-sm text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="font-semibold">{item.diploma}</p>
                    <p>{item.details}</p>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Formation;
