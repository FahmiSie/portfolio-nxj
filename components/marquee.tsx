"use client";

export default function Marquee(){
    const skills = [
        "Fullstack Developer & Finance Enthusiast",
        "Next.js",
        "React",
        "TypeScript",
        "NestJS",
        "Node.js",
        "MySQL",
        "AWS",
        "JavaScript",
        "ROI Analysis",
        "Data-Driven Decisions",
        "Tailwind CSS",
        "Framer Motion"
    ];

    return (
        <div className="marquee">
            <div className="marquee-track">
                {[...skills, ...skills].map((skill, index) => (
                    <span key={index} className="marquee-span">{skill}</span>
                ))}
            </div>
        </div>
    )
}