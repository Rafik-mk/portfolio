// src/data/Data.js

export const dataFr = {
  header: {
    name: "MOKRANI Rafik",
    title: "Ingénieur Systèmes Embarqués",
    greeting: "Bonjour !",
    info: "Actuellement apprenti architecte électronique chez Stellantis, je termine ma formation à l'ESIEA. Passionné par l'électronique et le développement embarqué, je recherche un CDI à partir de septembre 2025."
  },
  skills: {
    title: "Compétences",
    items: [
      "C, Rust, Python, VHDL, Assembleur, CCS RTOS, Cypher, Git/Github, Jira, IDEs",
      "Linux embarqué, Cybersécurité, IoT basse consommation",
      "Bus de terrain (CAN, I2C, UART), Protocole IP, SOME/IP",
      "Travail d'équipe, Autonomie",
    ],
  },
  formation: {
    title: "Formations",
    list: [
      {
        year: "09/2023 - 09/2025",
        institution: "ESIEA, Ivry-sur-Seine, Île-de-France",
        diploma: "Diplôme Ingénieur Systèmes Embarqués et Autonomes",
        details: "En apprentissage chez Stellantis.\n\nCourses:\n- Edge IA (Machine Learning sur systèmes embarqués)\n- Secure programming en Rust\n- GPU (CUDA)\n- IoT basse consommation (ULP)\n- Embedded Linux\n- Virtualisation\n- HDL (VHDL, FPGA)\n",
        logo: "images/esiea_logo.png"
      },
      {
        year: "09/2022 - 2023",
        institution: "Université Picardie Jules Verne, Amiens, France",
        diploma: "Master Électronique, Énergie Électrique et Automatique",
        details: "Robotique, vision artificielle, DSP, OOP C++/UML, field buses (CAN, I2C, UART), RTOS.",
        logo: "images/upjv_logo.png"
      },
      {
        year: "2021 - 2022",
        institution: "Université Picardie Jules Verne, Amiens, France",
        diploma: "Spécialisation en systèmes embarqués",
        details: "Projet de fin d’études: MPPT battery charger sur DSPIC.\nÉtudes: microcontrôleurs, temps réel, PCB, électronique de puissance.",
        logo: "images/upjv_logo2.png"
      },
      {
        year: "2018 - 2021",
        institution: "IGEE (ex-INELEC), Algérie",
        diploma: "Licence en génie électrique et électronique",
        details: "Cursus en anglais. Projet final: distributeur automatique de nourriture (Arduino). Machines électriques, C, assembleur Z80, FPGA (DE2).",
        logo: "images/igee_logo.png"
      },
    ],
  },
  experience: {
    title: "Expériences Professionnelles",
    items: [
      {
        period: "09/2023 - Présent",
        role: "Apprenti architecte électronique",
        company: "Stellantis",
        description:
          "• Intégration des besoins fonctionnels sur les réseaux embarqués (CAN, LIN, Ethernet) et allocation des signaux et fonctions.\n" +
          "• Étude et intégration de nouvelles fonctionnalités dans les architectures.\n" +
          "• Collaboration avec différentes équipes (fonctionnelles, messagerie, développement).\n" +
          "• Développement d’une fonction facilitant la gestion centralisée SOME/IP dans STLA Brain.",
        logo: "images/stellantis_logo.png"
      },
      {
        period: "10/2022 - 08/2023",
        role: "Apprenti ingénieur systèmes embarqués E-Bike",
        company: "MFC Groupe Intersport",
        description:
          "• Tests unitaires, intégration et validation hardware/software.\n" +
          "• Intégration CAN.\n" +
          "• Interaction avec fournisseurs étrangers.",
        logo: "images/intersport_logo.png"
      },
      {
        period: "2019 - 2021",
        role: "Membre organisateur d'évènement",
        company: "INELECTRONICS Student Club, Université de Boumerdes",
        description:
          "Organisation de workshops, formations et journées techniques pour les étudiants.",
        logo: "images/inelectronics_logo.png"
      },
    ],
  },
  languages: {
    title: "Langues",
    items: [
      "Anglais : TOEIC 920",
      "Français : Courant",
      "Arabe : Langue maternelle",
    ],
  },
  contact: {
    title: "Contact",
    phoneLabel: "Téléphone",
    phoneNumber: "+33 6 67 20 46 68",
    emailLabel: "Email",
    emailValue: "mokranirafik0@gmail.com",
    message: "N'hésitez pas à me contacter pour toute information ou opportunité !"
  },
  buttonLabel: "Switch to English",
};

export const dataEn = {
  header: {
    name: "MOKRANI Rafik",
    title: "Embedded Systems Engineer",
    greeting: "Hello !",
    info: "Currently an Electronic Architect apprentice at Stellantis, finishing my studies at ESIEA. Passionate about electronics and embedded development, I'm looking for a full-time position from September 2025."
  },
  skills: {
    title: "Skills",
    items: [
      "C, Rust, Python, VHDL, Assembly, CCS RTOS, Cypher, Git/Github, Jira, IDEs",
      "Embedded Linux, System Security, Low-power IoT",
      "Field buses (CAN, I2C, UART), IP protocols, SOME/IP",
      "Teamwork, Autonomy",
    ],
  },
  formation: {
    title: "Education",
    list: [
      {
        year: "09/2023 - 09/2025",
        institution: "ESIEA, Ivry-sur-Seine, France",
        diploma: "Engineer Degree in Embedded and Autonomous Systems",
        details: "Apprenticeship at Stellantis.\n\nCourses:\n- Edge AI\n- Secure programming in Rust\n- GPU with CUDA\n- Low-power IoT\n- Embedded Linux\n- Virtualization\n- HDL (VHDL, FPGA)\n",
        logo: "../images/esiea_logo.png"
      },
      {
        year: "09/2022 - 2023",
        institution: "Université Picardie Jules Verne, Amiens, France",
        diploma: "Master in Electronics, Electrical Energy, Automation",
        details: "Robotics, computer vision, DSP, OOP C++/UML, CAN, I2C, UART, RTOS.",
        logo: "../images/upjv_logo.png"
      },
      {
        year: "2021 - 2022",
        institution: "Université Picardie Jules Verne, Amiens, France",
        diploma: "Specialization in Embedded Systems",
        details: "Final project: MPPT battery charger on DSPIC.\nMicrocontrollers, real-time OS, PCB, power electronics.",
        logo: "../images/upjv_logo.png"
      },
      {
        year: "2018 - 2021",
        institution: "IGEE (ex-INELEC), Algeria",
        diploma: "Bachelor in Electrical & Electronics Engineering",
        details: "English-based. Final project: automatic pet feeder (Arduino). Electrical machines, C, Z80 assembly, FPGA (DE2).",
        logo: "../images/igee_logo.png"
      },
    ],
  },
  experience: {
    title: "Professional Experience",
    items: [
      {
        period: "09/2023 - Present",
        role: "Electronic Architect Apprentice",
        company: "Stellantis",
        description:
          "• Integrating functional requirements (CAN, LIN, Ethernet) and signal allocation.\n" +
          "• Developing new functionalities in electronic architectures.\n" +
          "• Collaborating with different teams (functional, messaging, dev).\n" +
          "• Centralized SOME/IP feature for STLA Brain.",
        logo: "../images/stellantis_logo.png"
      },
      {
        period: "10/2022 - 08/2023",
        role: "Embedded Systems Engineer Apprentice (E-Bike)",
        company: "MFC Groupe Intersport",
        description:
          "• Unit tests, hardware/software validation.\n" +
          "• CAN integration.\n" +
          "• Collaboration with foreign suppliers.",
        logo: "../images/intersport_logo.png"
      },
      {
        period: "2019 - 2021",
        role: "Organizing Member",
        company: "INELECTRONICS Student Club, University of Boumerdes",
        description:
          "Workshops, trainings, technical events for students.",
        logo: "../images/inelectronics_logo.png"
      },
    ],
  },
  languages: {
    title: "Languages",
    items: [
      "English: TOEIC 920",
      "French: Fluent",
      "Arabic: Native",
    ],
  },
  contact: {
    title: "Contact",
    phoneLabel: "Phone",
    phoneNumber: "+33 6 67 20 46 68",
    emailLabel: "Email",
    emailValue: "mokranirafik0@gmail.com",
    message: "Feel free to reach out for any info or opportunity!"
  },
  buttonLabel: "Switcher en Français",
};
