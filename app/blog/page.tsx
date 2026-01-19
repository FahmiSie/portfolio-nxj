"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const blogPosts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 14",
    excerpt: "Learn the fundamentals of Next.js 14 and how to build modern web applications with React Server Components.",
    date: "March 15, 2024",
    category: "Web Development",
    readTime: "5 min read"
  },
  {
    slug: "finance-and-tech",
    title: "Bridging Finance and Technology",
    excerpt: "Exploring how technology is revolutionizing the finance industry and how developers can contribute to this transformation.",
    date: "March 10, 2024",
    category: "Finance",
    readTime: "8 min read"
  },
  {
    slug: "fullstack-development-tips",
    title: "Fullstack Development Best Practices",
    excerpt: "Essential tips and tricks for building robust fullstack applications that scale efficiently.",
    date: "March 5, 2024",
    category: "Development",
    readTime: "6 min read"
  },
  {
    slug: "aws-cloud-fundamentals",
    title: "AWS Cloud Fundamentals for Beginners",
    excerpt: "A beginner-friendly guide to understanding AWS services and deploying your first application to the cloud.",
    date: "February 28, 2024",
    category: "Cloud",
    readTime: "10 min read"
  }
];

export default function BlogPage() {
  return (
    <section className="blog-page page-transition">
      <div className="container">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Blog
        </motion.h1>

        <motion.p
          className="page-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Insights on web development, finance, and my journey as a Fullstack Developer
        </motion.p>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              className="blog-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="blog-card-header">
                <span className="blog-category">{post.category}</span>
                <span className="blog-read-time">{post.readTime}</span>
              </div>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-card-footer">
                <span className="blog-date">{post.date}</span>
                <Link href={`/blog/${post.slug}`} className="blog-link">
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
