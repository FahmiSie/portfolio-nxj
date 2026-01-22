"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ResumePage() {
  const education = [
    {
      period: "2024 - Present",
      institution: "SMK Telkom Malang",
      program: "Rekayasa Perangkat Lunak (RPL)",
      description: "Focusing on software development, database management, and web technologies."
    }
  ];

  const experiences = [
    {
      period: "2025 - Present",
      title: "Fullstack Developer",
      company: "Freelance / Projects",
      description: "Building full-stack web applications using modern technologies like Next.js, NestJS, and MySQL. Working on various client projects and personal initiatives.",
      technologies: ["Next.js", "NestJS", "MySQL", "AWS", "TypeScript"]
    },
    {
      period: "2023 - Present",
      title: "Tech & Finance Enthusiast",
      company: "Invesmnet",
      description: "Deep dive into financial technologies, investment analysis, and integrating finance concepts with tech solutions.",
      technologies: ["Finance Analysis", "ROI Calculation", "Data-Driven Decisions"]
    }
  ];

  const certifications = [
    "Fullstack Web Development Certificate",
    "Cloud Computing Basics (AWS)",
    "Best Tennis Player Besuki Comp (2023)",
    "2st Winner Dodikjur Tennis Open Comp (2023)"
  ];

  return (
    <section className="resume-page page-transition">
      <div className="container">
        <motion.div
          className="resume-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">Resume</h1>
          <motion.a
            href="/resume.pdf"
            download
            className="download-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📄 Download PDF
          </motion.a>
        </motion.div>

        <div className="resume-content">
          <motion.section
            className="resume-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Education</h2>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="resume-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="item-period">{edu.period}</div>
                <div className="item-content">
                  <h3>{edu.institution}</h3>
                  <p className="item-subtitle">{edu.program}</p>
                  <p className="item-description">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.section>

          <motion.section
            className="resume-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-title">Experience</h2>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="resume-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="item-period">{exp.period}</div>
                <div className="item-content">
                  <h3>{exp.title}</h3>
                  <p className="item-subtitle">{exp.company}</p>
                  <p className="item-description">{exp.description}</p>
                  <div className="item-tech">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.section>

          <motion.section
            className="resume-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="section-title">Certifications</h2>
            <ul className="certifications-list">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  ✓ {cert}
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </div>
      </div>
    </section>
  );
}
