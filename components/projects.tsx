
export const projectsData = [
    {
        "title": "Cashier System",
        "slug": "cashier-system",
        "description": "A comprehensive cashier system built with JavaFX and MySQL database integration. Features inventory management, sales tracking, and reporting capabilities.",
        "category": "web",
        "tech": "Java, JavaFX, MySQL",
        "image": "💻",
        "imagePath": "/images/projects/cashier-system.jpg",
        "status": "Completed"
    },
    {
        "title": "Portfolio Website",
        "slug": "portfolio-website",
        "description": "Modern portfolio website built with Next.js, featuring 3D animations, custom cursor effects, and responsive design.",
        "category": "web",
        "tech": "Next.js, TypeScript, Tailwind CSS, Framer Motion",
        "image": "🌐",
        "imagePath": "/images/projects/portfolio-website.jpg",
        "status": "Completed"
    },
    {
        "title": "Finance Dashboard",
        "slug": "finance-dashboard",
        "description": "A financial analytics dashboard with real-time data visualization, ROI calculations, and investment tracking features.",
        "category": "finance",
        "tech": "React, Chart.js, Node.js, MySQL",
        "image": "📊",
        "imagePath": "/images/projects/finance-dashboard.jpg",
        "status": "In Progress"
    },
    {
        "title": "E-Commerce API",
        "slug": "ecommerce-api",
        "description": "RESTful API for e-commerce platform built with NestJS, featuring authentication, payment processing, and order management.",
        "category": "backend",
        "tech": "NestJS, TypeScript, MySQL, JWT",
        "image": "🛒",
        "imagePath": "/images/projects/ecommerce-api.jpg",
        "status": "Completed"
    },
    {
        "title": "Cloud Deployment Tool",
        "slug": "cloud-deployment",
        "description": "Automated deployment tool for AWS infrastructure, simplifying CI/CD pipelines and cloud resource management.",
        "category": "devops",
        "tech": "AWS, Docker, GitHub Actions, Python",
        "image": "☁️",
        "imagePath": "/images/projects/cloud-deployment.jpg",
        "status": "In Progress"
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