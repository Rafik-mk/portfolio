// src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import mainPhoto from "../images/main_photo.png";

const ContactInfo = ({ contactData }) => {
  return (
    <motion.section
      className="section container scroll-mt-20"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>{contactData.title}</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          alignItems: "center",
          marginTop: "1rem"
        }}
      >
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "1.5rem", fontWeight:"bold", marginBottom: "1rem" }}>
            {contactData.message}
          </p>
          <p style={{ marginBottom: "0.5rem" }}>
            <strong>{contactData.phoneLabel} :</strong> {contactData.phoneNumber}
          </p>
          <p style={{ marginBottom: "0.5rem" }}>
            <strong>{contactData.emailLabel} :</strong> {contactData.emailValue}
          </p>
        </div>
        <div style={{ flex: "0 0 300px" }}>
          <img
            src={mainPhoto}
            alt="Moi"
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "8px"
            }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default ContactInfo;
