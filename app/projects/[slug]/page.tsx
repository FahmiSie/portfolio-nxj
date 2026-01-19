"use client";

import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/components/projects";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const projectDetails: Record<string, any> = {
    "cashier-system": {
      overview: "A comprehensive cashier system built with JavaFX and MySQL database integration. This desktop application provides a complete solution for retail businesses to manage their daily operations efficiently.",
      features: [
        "Inventory management with real-time stock tracking",
        "Sales processing and receipt generation",
        "Customer database management",
        "Sales reports and analytics",
        "User authentication and role-based access",
        "Barcode scanning support"
      ],
      technologies: ["Java", "JavaFX", "MySQL", "JDBC", "Scene Builder"],
      challenges: "Building a robust database schema that handles concurrent transactions and ensuring data integrity across multiple operations.",
      solutions: "Implemented proper transaction management and database locking mechanisms to prevent data conflicts.",
      results: "Successfully deployed and used by local retail stores, reducing manual work by 70% and improving inventory accuracy."
    },
    "portfolio-website": {
      overview: "A modern, interactive portfolio website showcasing my work as a fullstack developer. Built with Next.js and featuring cutting-edge animations and 3D effects.",
      features: [
        "3D lanyard component with mouse interaction",
        "Custom cursor effects",
        "Smooth page transitions",
        "Responsive design for all devices",
        "Dark theme with professional aesthetics",
        "Interactive project showcases"
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "CSS 3D Transforms"],
      challenges: "Creating smooth 3D animations while maintaining performance and ensuring cross-browser compatibility.",
      solutions: "Optimized animations using CSS transforms and Framer Motion's hardware acceleration, with fallbacks for older browsers.",
      results: "Created a unique portfolio that stands out, with smooth 60fps animations and positive feedback from visitors."
    },
    "finance-dashboard": {
      overview: "A comprehensive financial analytics dashboard that helps users track investments, calculate ROI, and make data-driven financial decisions.",
      features: [
        "Real-time financial data visualization",
        "ROI calculator and investment tracker",
        "Portfolio performance metrics",
        "Interactive charts and graphs",
        "Export reports to PDF/Excel",
        "Multi-currency support"
      ],
      technologies: ["React", "Chart.js", "Node.js", "MySQL", "Express.js"],
      challenges: "Handling real-time data updates and ensuring accurate financial calculations with proper rounding and decimal precision.",
      solutions: "Implemented WebSocket connections for real-time updates and used Decimal.js library for precise financial calculations.",
      results: "Currently in development. Beta version shows promising results with accurate calculations and smooth performance."
    },
    "ecommerce-api": {
      overview: "A robust RESTful API for an e-commerce platform, providing all necessary endpoints for product management, user authentication, and order processing.",
      features: [
        "JWT-based authentication system",
        "Product CRUD operations",
        "Shopping cart management",
        "Order processing and tracking",
        "Payment integration (Stripe/PayPal)",
        "Email notifications",
        "Admin dashboard API"
      ],
      technologies: ["NestJS", "TypeScript", "MySQL", "JWT", "Stripe API", "Nodemailer"],
      challenges: "Designing a scalable API architecture that can handle high traffic and implementing secure payment processing.",
      solutions: "Used NestJS for modular architecture, implemented rate limiting, and followed OWASP security best practices for payment handling.",
      results: "Successfully deployed API serving thousands of requests daily with 99.9% uptime and secure transaction processing."
    },
    "cloud-deployment": {
      overview: "An automated deployment tool that simplifies CI/CD pipelines and cloud resource management for AWS infrastructure.",
      features: [
        "Automated CI/CD pipeline setup",
        "AWS resource provisioning",
        "Environment management (dev/staging/prod)",
        "Deployment rollback capabilities",
        "Cost monitoring and optimization",
        "Slack/Email notifications"
      ],
      technologies: ["AWS", "Docker", "GitHub Actions", "Python", "Terraform", "Boto3"],
      challenges: "Managing complex cloud infrastructure and ensuring zero-downtime deployments while maintaining cost efficiency.",
      solutions: "Implemented blue-green deployment strategy and used Infrastructure as Code (Terraform) for consistent environments.",
      results: "Currently in development. Early testing shows 50% reduction in deployment time and improved infrastructure reliability."
    }
  };

  const details = projectDetails[params.slug] || {
    overview: project.description,
    features: ["Feature 1", "Feature 2", "Feature 3"],
    technologies: project.tech.split(", "),
    challenges: "Technical challenges encountered during development.",
    solutions: "Solutions implemented to overcome challenges.",
    results: "Results and achievements from the project."
  };

  return (
    <section className="project-detail-page page-transition">
      <div className="container">
        <Link href="/projects" className="back-link">
          ← Back to Projects
        </Link>

        <motion.div
          className="project-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="project-icon-large">{project.image}</div>
          <div className="project-status-badge">{project.status}</div>
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-description">{details.overview}</p>
          <div className="project-tech-badges">
            {details.technologies.map((tech: string, index: number) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        </motion.div>

        {project.imagePath && (
          <motion.div
            className="project-image-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src={project.imagePath}
              alt={project.title}
              width={1200}
              height={675}
              className="project-detail-image"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </motion.div>
        )}

        <div className="project-content">
          <motion.section
            className="project-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Features</h2>
            <ul className="feature-list">
              {details.features.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            className="project-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2>Challenges & Solutions</h2>
            <div className="challenge-solution">
              <div>
                <h3>Challenges</h3>
                <p>{details.challenges}</p>
              </div>
              <div>
                <h3>Solutions</h3>
                <p>{details.solutions}</p>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="project-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Results</h2>
            <p className="results-text">{details.results}</p>
          </motion.section>
        </div>

        <motion.div
          className="project-actions"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/projects" className="project-action-btn secondary">
            View All Projects
          </Link>
          <Link href="/contact" className="project-action-btn primary">
            Discuss This Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
