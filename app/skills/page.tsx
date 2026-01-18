const skills = [
  "HTML", "CSS", "JavaScript",
  "React", "Next.js", "Framer Motion"
];

export default function SkillsPage() {
  return (
    <section className="skills-page">
      <h1>Skills</h1>
      <ul>
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
