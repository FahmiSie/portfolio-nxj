"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { projectsData } from "@/components/projects";
import LogoStrip from "../logo-strip";

export default function HomeSections() {
  const featuredProjects = projectsData.slice(0, 3);
  const [hasClickedConnect, setHasClickedConnect] = useState(false);

  return (
    <>
      <LogoStrip />

      {/* Featured Projects Section */}
      <section className="home-section featured-projects">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Check out some of my recent work
          </motion.p>

          <div className="featured-grid">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                className="featured-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="featured-icon">{project.image}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link href={`/projects/${project.slug}`} className="featured-link">
                  View Project →
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="view-all-btn-wrapper"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/projects" className="view-all-btn">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-section cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="cta-kicker"></p>
            <h2>Let's Work Together</h2>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
              vision.
            </p>

            <Link href="/contact" className="cta-connect-link">
              <motion.button
  type="button"
  className={`cta-pill ${hasClickedConnect ? "cta-pill-clicked" : ""}`}
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  onClick={() => setHasClickedConnect(true)}
>
  <div className="cta-pill-inner">
    <span className="cta-pill-label">Let&apos;s Connect</span>
    <span className="cta-pill-sub">
      {hasClickedConnect ? "Can’t wait to hear from you." : "Get in touch and let’s build something."}
    </span>
  </div>
</motion.button>
            </Link>

            <p className="cta-warning">
              Feel free to contact me for any inquiries or collaboration opportunities.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
