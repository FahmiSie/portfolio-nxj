"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Senior Developer",
    company: "Tech Corp",
    content: "Fahmi is an exceptional fullstack developer. His attention to detail and passion for both technology and finance make him a unique asset to any team.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "Innovate Labs",
    content: "Working with Fahmi was a pleasure. He delivered high-quality code on time and always went the extra mile to ensure project success.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "CTO",
    company: "StartupXYZ",
    content: "Fahmi's combination of technical skills and financial knowledge brings a unique perspective to problem-solving. Highly recommended!",
    rating: 5
  },
  {
    id: 4,
    name: "Emily Williams",
    role: "Product Lead",
    company: "Digital Solutions",
    content: "Exceptional developer with great communication skills. Fahmi understands both the technical and business sides of projects.",
    rating: 5
  },
  {
    id: 5,
    name: "David Martinez",
    role: "Finance Director",
    company: "Finance Tech",
    content: "Fahmi's dual expertise in tech and finance is rare and valuable. He bridges the gap between these two worlds beautifully.",
    rating: 5
  },
  {
    id: 6,
    name: "Lisa Anderson",
    role: "Team Lead",
    company: "Dev Studio",
    content: "Professional, skilled, and always willing to learn. Fahmi brings innovative solutions to every project he works on.",
    rating: 5
  }
];

export default function TestimonialsPage() {
  return (
    <section className="testimonials-page page-transition">
      <div className="container">
        <motion.h1
          className="testimonials-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What they say about me?
        </motion.h1>

        <div className="testimonials-scroll-container">
          <div className="testimonials-track">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="testimonial-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.role} @ {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="scroll-hint"
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span>← Scroll to see more →</span>
        </motion.div>
      </div>
    </section>
  );
}
