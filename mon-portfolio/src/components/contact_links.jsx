import React from "react";
import { motion } from "framer-motion";

const Contact = ({ linksdata }) => {
  return (
    <motion.section
      className="section container"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    />  
      <div className="social-icons">
        <a className="social-icon social-icon--github"
        href="https://github.com/Rafik-mk"
        target="_blank"
        rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <div className="tooltip">Github</div>
        </a>
        <a className="social-icon social-icon--gmail"
        href="#contact">
          <i className="fas fa-envelope"></i>
          <div className="tooltip">Gmail</div>
        </a>
        <a className="social-icon social-icon--linkedin"
        href="https://www.linkedin.com/in/mokrani-rafik-mohamed-672105206/">
          <i className="fab fa-linkedin"></i>
          <div className="tooltip">LinkedIn</div>
        </a>
        <a className="social-icon social-icon--phone"
        href="#contact">
          <i className="fas fa-phone"></i>
          <div className="tooltip">Phone</div>
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
