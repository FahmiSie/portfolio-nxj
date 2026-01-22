/**
 * PROJECTS DATA
 * 
 * Untuk menggunakan gambar lokal:
 * 1. Letakkan file gambar di folder public/image/projects/
 * 2. Gunakan path yang dimulai dengan "/" (tanpa "/public")
 *    Contoh: "/image/projects/nama-file.png"
 * 
 * Untuk menggunakan gambar dari URL eksternal:
 * - Gunakan URL lengkap dengan https://
 * - Pastikan domain sudah ditambahkan di next.config.ts (remotePatterns)
 * 
 * Jika gambar tidak ditemukan, akan otomatis menampilkan emoji icon sebagai fallback
 */

export const projectsData = [
    {
        "title": "Cashier System",
        "slug": "cashier-system",
        "description": "A comprehensive cashier system built with JavaFX and MySQL database integration. Features inventory management, sales tracking, and reporting capabilities.",
        "category": "web",
        "tech": "Java, JavaFX, MySQL",
        "image": "💻",
        "imagePath": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
        "status": "Completed"
    },
    {
        "title": "Portfolio Website",
        "slug": "portfolio-website",
        "description": "Modern portfolio website built with Next.js, featuring 3D animations, custom cursor effects, and responsive design.",
        "category": "web",
        "tech": "Next.js, TypeScript, Tailwind CSS, Framer Motion",
        "image": "🌐",
        // Contoh penggunaan gambar lokal:
        // Opsi 1: "/image/projects/portfolio-website.png" (folder khusus project)
        // Opsi 2: "/image/profile/portfolio.png" (jika file ada di folder profile)
        // Pastikan file benar-benar ada di folder public/image/projects/ atau public/image/profile/
        "imagePath": "/image/profile/portfolio.png", // Ganti dengan path gambar lokal Anda
        "status": "Completed"
    },
    {
        "title": "Finance Dashboard",
        "slug": "finance-dashboard",
        "description": "A financial analytics dashboard with real-time data visualization, ROI calculations, and investment tracking features.",
        "category": "finance",
        "tech": "React, Chart.js, Node.js, MySQL",
        "image": "📊",
        "imagePath": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        "status": "In Progress"
    },
    {
        "title": "E-Commerce API",
        "slug": "ecommerce-api",
        "description": "RESTful API for e-commerce platform built with NestJS, featuring authentication, payment processing, and order management.",
        "category": "backend",
        "tech": "NestJS, TypeScript, MySQL, JWT",
        "image": "🛒",
        "imagePath": "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80",
        "status": "Completed"
    },
    {
        "title": "Cloud Deployment Tool",
        "slug": "cloud-deployment",
        "description": "Automated deployment tool for AWS infrastructure, simplifying CI/CD pipelines and cloud resource management.",
        "category": "devops",
        "tech": "AWS, Docker, GitHub Actions, Python",
        "image": "☁️",
        "imagePath": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
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