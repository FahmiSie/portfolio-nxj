"use client";

import { useState } from "react";
import { projectsData, ProjectsList } from "@/components/projects";

export default function ProjectsSection(){

    const [filter, setfilter ] = useState("all");
    const filteredProjects = filter === "all"
    ? projectsData :projectsData.filter((p => p.category === filter));

    return (
        <section className="pojects-section">
            <div className="filters">
            <button onClick={() => setfilter("all")}>All</button>
            </div>
        </section>
    )
}