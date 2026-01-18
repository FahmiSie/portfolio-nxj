
export const projectsData =[
    {
    "title": "Cashier System",
    "slug": "cashier-system",
    "description": "A cashier system built with JavaFX and MySQL database integration.",
    "category": "web",
    "tech": "Java, JavaFX, MySQL",
}
]

export function ProjectsList({ data }: { data: typeof projectsData }) {
    return (
        <div className="grid gap-4">
            {data.map((project) => (
                <div key={project.slug} className="p-4 border rounded">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <small>{project.tech}</small>
                </div>
            ))}
        </div>
    );
}