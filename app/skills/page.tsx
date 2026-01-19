"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 90, color: "#E34F26" },
      { name: "CSS3", level: 85, color: "#1572B6" },
      { name: "JavaScript", level: 88, color: "#F7DF1E" },
      { name: "React", level: 85, color: "#61DAFB" },
      { name: "Next.js", level: 82, color: "#000000" },
      { name: "TypeScript", level: 80, color: "#3178C6" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85, color: "#339933" },
      { name: "NestJS", level: 80, color: "#E0234E" },
      { name: "MySQL", level: 83, color: "#4479A1" },
      { name: "REST API", level: 88, color: "#FF6B6B" }
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "AWS", level: 75, color: "#FF9900" },
      { name: "Git", level: 85, color: "#F05032" },
      { name: "Docker", level: 70, color: "#2496ED" },
      { name: "Finance Analysis", level: 80, color: "#4CAF50" }
    ]
  }
];

export default function SkillsPage() {
  return (
    <section className="skills-page page-transition">
      <div className="container">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h1>

        <motion.p
          className="page-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technologies and tools I work with
        </motion.p>

        <div className="skills-container">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + catIndex * 0.2 }}
            >
              <h2 className="category-title">{category.category}</h2>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + catIndex * 0.2 + skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="skill-header">
                      <h3>{skill.name}</h3>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + catIndex * 0.2 + skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
