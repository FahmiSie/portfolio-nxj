"use client";

import { motion } from "framer-motion";
import Lanyard3D from "@/components/lanyard-3d";

export default function AboutPage() {
  const experiences = [
    { year: "2026 - Right Now", title: "Fullstack Developer", desc: "Building modern web applications" },
    { year: "2024 - Right Now", title: "Student at", desc: "SMK Telkom Malang - RPL Expertise" },
    { year: "2021 - Right Now", title: "Finance Analys", desc: "Exploring finance-tech, Investment Analysis" }
  ];

  return (
    <section className="about-page page-transition">
      <div className="container">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>

        <div className="about-content">
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Lanyard3D />
          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-text">
              <h2>Fullstack Developer & Finance Enthusiast</h2>
              <p>
                I'm Fahmi Maulana, a passionate fullstack developer who loves building web applications 
                and has a deep interest in finance. My unique combination of technical skills and financial 
                knowledge allows me to create solutions that bridge the gap between technology and business.
              </p>
              <p>
                Currently studying at SMK Telkom Malang with a focus on Software Engineering (RPL), 
                I'm constantly learning and exploring new technologies to stay ahead in the ever-evolving 
                tech landscape.
              </p>
            </div>

            <div className="experience-timeline">
              <h3>Journey</h3>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="timeline-year">{exp.year}</div>
                  <div className="timeline-content">
                    <h4>{exp.title}</h4>
                    <p>{exp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
