"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/components/projects";

const categories = ["all", "web", "backend", "finance", "devops"];

export default function ProjectsPage() {
    const [filter, setFilter] = useState("all");
    const filteredProjects = filter === "all"
        ? projectsData
        : projectsData.filter((p) => p.category === filter);

    return (
        <section className="projects-page page-transition">
            <div className="container">
                <motion.h1
                    className="page-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Projects
                </motion.h1>

                <motion.p
                    className="page-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    A collection of my recent work and projects
                </motion.p>

                <motion.div
                    className="project-filters"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`filter-btn ${filter === category ? "active" : ""}`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </motion.div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            className="project-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                        >
                            <div className="project-image-wrapper">
                                {project.imagePath ? (
                                    <Image
                                        src={project.imagePath}
                                        alt={project.title}
                                        fill
                                        className="project-image"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = "none";
                                            if (target.nextElementSibling) {
                                                (target.nextElementSibling as HTMLElement).style.display = "flex";
                                            }
                                        }}
                                    />
                                ) : null}
                                <div 
                                    className="project-icon" 
                                    style={{ display: project.imagePath ? "none" : "flex" }}
                                >
                                    {project.image}
                                </div>
                            </div>
                            <div className="project-status">{project.status}</div>
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.tech.split(", ").map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <Link href={`/projects/${project.slug}`} className="project-link">
                                View Project →
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
