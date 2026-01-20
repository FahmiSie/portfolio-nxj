"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const blogPosts: Record<string, any> = {
  "getting-started-with-nextjs": {
    title: "Getting Started with Next.js 14",
    date: "March 15, 2024",
    category: "Web Development",
    readTime: "5 min read",
    content: `
      Next.js 14 has brought some exciting new features to the React ecosystem. In this post, I'll walk you through the fundamentals and share my experience building modern web applications with this powerful framework.

      ## Introduction to Next.js 14

      Next.js 14 introduces several game-changing features including Server Components by default, improved data fetching patterns, and enhanced performance optimizations. The framework has become even more developer-friendly while maintaining its powerful capabilities.

      ## Key Features

      ### React Server Components
      One of the most significant additions is the default use of React Server Components. This allows you to build faster applications by moving computation to the server, reducing client-side JavaScript bundle size.

      ### App Router Improvements
      The App Router has been refined with better routing patterns, making it easier to organize your application structure. Nested layouts and route groups provide more flexibility in organizing your codebase.

      ### Performance Enhancements
      Next.js 14 includes automatic optimizations for images, fonts, and scripts. The new caching strategies ensure optimal performance out of the box.

      ## Getting Started

      To start a new Next.js 14 project, simply run:

      \`\`\`bash
      npx create-next-app@latest my-app
      \`\`\`

      Follow the prompts to configure your project with TypeScript, Tailwind CSS, and other features you need.

      ## Conclusion

      Next.js 14 continues to be an excellent choice for building production-ready React applications. The improvements in this version make it even more powerful and easier to use. I highly recommend giving it a try for your next project!
    `
  },
  "finance-and-tech": {
    title: "Bridging Finance and Technology",
    date: "March 10, 2024",
    category: "Finance",
    readTime: "8 min read",
    content: `
      The intersection of finance and technology has created revolutionary changes in how we manage money, make investments, and understand financial markets. As a developer with a passion for both fields, I find this convergence fascinating.

      ## The FinTech Revolution

      Financial technology, or FinTech, has transformed traditional banking and investment practices. From mobile banking apps to algorithmic trading systems, technology has made financial services more accessible and efficient.

      ## Key Trends

      ### Digital Payments
      The rise of digital payment platforms has changed how we transact. Services like digital wallets and cryptocurrency have challenged traditional payment methods.

      ### Investment Platforms
      Robo-advisors and investment apps have democratized investing, making it accessible to people who previously lacked access to financial advisors.

      ### Blockchain and Cryptocurrency
      Blockchain technology has introduced new possibilities for secure, transparent transactions and decentralized finance (DeFi) applications.

      ## The Role of Developers

      As developers, we have the opportunity to build tools that make finance more accessible and understandable. Whether it's building portfolio tracking apps, creating investment calculators, or developing trading algorithms, the possibilities are endless.

      ## Learning Resources

      If you're interested in combining finance and tech, I recommend:
      - Learning about financial markets and investment principles
      - Understanding APIs from financial data providers
      - Building projects that solve real financial problems
      - Reading about algorithmic trading and quantitative finance

      ## Conclusion

      The fusion of finance and technology opens up exciting career paths and project opportunities. By combining coding skills with financial knowledge, developers can create impactful solutions that help people make better financial decisions.
    `
  },
  "fullstack-development-tips": {
    title: "Fullstack Development Best Practices",
    date: "March 5, 2024",
    category: "Development",
    readTime: "6 min read",
    content: `
      Building fullstack applications requires a solid understanding of both frontend and backend development. Here are some best practices I've learned from my experience building production applications.

      ## Architecture Patterns

      ### RESTful API Design
      Designing clean, intuitive APIs is crucial for fullstack development. Follow REST principles, use proper HTTP methods, and implement consistent error handling.

      ### Separation of Concerns
      Keep your codebase organized by separating business logic, data access, and presentation layers. This makes your code more maintainable and testable.

      ## Frontend Best Practices

      ### Component-Based Architecture
      Build reusable components that follow the Single Responsibility Principle. This makes your code more modular and easier to maintain.

      ### State Management
      Choose appropriate state management solutions based on your application's complexity. For simple apps, React's built-in state might be enough, while larger apps might benefit from Redux or Zustand.

      ### Performance Optimization
      Implement code splitting, lazy loading, and image optimization to improve your application's performance. Use tools like Lighthouse to identify optimization opportunities.

      ## Backend Best Practices

      ### Security First
      Always implement proper authentication, authorization, and input validation. Use HTTPS, sanitize user inputs, and protect against common vulnerabilities like SQL injection and XSS attacks.

      ### Database Design
      Design your database schema carefully, use proper indexing, and implement database migrations for version control.

      ### Error Handling
      Implement comprehensive error handling and logging. Use proper HTTP status codes and provide meaningful error messages to clients.

      ## Testing Strategies

      Write tests for critical functionality:
      - Unit tests for individual functions and components
      - Integration tests for API endpoints
      - End-to-end tests for critical user flows

      ## Conclusion

      Following these best practices will help you build more robust, maintainable, and scalable fullstack applications. Remember that best practices evolve, so stay curious and keep learning!
    `
  },
  "aws-cloud-fundamentals": {
    title: "AWS Cloud Fundamentals for Beginners",
    date: "February 28, 2024",
    category: "Cloud",
    readTime: "10 min read",
    content: `
      Amazon Web Services (AWS) is the leading cloud computing platform, offering over 200 services. If you're just starting with cloud computing, this guide will help you understand the fundamentals.

      ## What is Cloud Computing?

      Cloud computing is the delivery of computing services over the internet, including servers, storage, databases, networking, and software. Instead of owning and maintaining physical servers, you can use cloud services on a pay-as-you-go basis.

      ## Core AWS Services

      ### EC2 (Elastic Compute Cloud)
      EC2 provides resizable compute capacity in the cloud. You can launch virtual servers, configure security and networking, and manage storage.

      ### S3 (Simple Storage Service)
      S3 is object storage service that offers scalability, data availability, security, and performance. It's perfect for storing static websites, backups, and data archives.

      ### RDS (Relational Database Service)
      RDS makes it easy to set up, operate, and scale relational databases in the cloud. It supports MySQL, PostgreSQL, MariaDB, and other database engines.

      ### Lambda (Serverless Computing)
      Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume.

      ## Getting Started

      ### Step 1: Create an AWS Account
      Sign up for AWS Free Tier, which offers free usage of many services for 12 months.

      ### Step 2: Understand IAM
      Identity and Access Management (IAM) is crucial for security. Learn how to create users, groups, and roles with appropriate permissions.

      ### Step 3: Start with Simple Projects
      Begin with hosting a static website on S3, then try deploying a simple application on EC2.

      ## Cost Management

      Cloud costs can add up quickly. Always:
      - Use the AWS Pricing Calculator to estimate costs
      - Set up billing alerts
      - Review and optimize resource usage regularly
      - Use reserved instances for long-running workloads

      ## Security Best Practices

      - Enable MFA on your root account
      - Use IAM roles instead of access keys when possible
      - Enable CloudTrail for audit logging
      - Use security groups and network ACLs to control access
      - Encrypt sensitive data at rest and in transit

      ## Learning Path

      1. Complete AWS Cloud Practitioner certification
      2. Build hands-on projects
      3. Learn Infrastructure as Code (Terraform/CloudFormation)
      4. Explore serverless architectures
      5. Understand container services (ECS, EKS)

      ## Conclusion

      AWS offers powerful tools that can transform how you build and deploy applications. Start with the fundamentals, build small projects, and gradually expand your knowledge. The cloud computing journey is exciting and rewarding!
    `
  }
};

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <section className="blog-detail-page page-transition">
        <div className="container">
          <h1>Blog Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="back-link">← Back to Blog</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-detail-page page-transition">
      <div className="container">
        <Link href="/blog" className="back-link">
          ← Back to Blog
        </Link>

        <motion.article
          className="blog-post"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="blog-post-header">
            <span className="blog-category">{post.category}</span>
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-post-meta">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div 
            className="blog-post-content"
            dangerouslySetInnerHTML={{ 
              __html: post.content
                .replace(/```bash\n([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
                .replace(/```([^`]+)```/g, '<pre><code>$1</code></pre>')
                .replace(/`([^`]+)`/g, '<code>$1</code>')
                .replace(/## (.*?)(\n|$)/g, '<h2>$1</h2>')
                .replace(/### (.*?)(\n|$)/g, '<h3>$1</h3>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n\n/g, '</p><p>')
                .replace(/^(.*)$/, '<p>$1</p>')
                .replace(/<p><h2>/g, '<h2>')
                .replace(/<\/h2><\/p>/g, '</h2>')
                .replace(/<p><h3>/g, '<h3>')
                .replace(/<\/h3><\/p>/g, '</h3>')
                .replace(/<p><pre>/g, '<pre>')
                .replace(/<\/pre><\/p>/g, '</pre>')
                .replace(/<p><ul>/g, '<ul>')
                .replace(/<\/ul><\/p>/g, '</ul>')
                .replace(/<p><li>/g, '<li>')
                .replace(/<\/li><\/p>/g, '</li>')
            }}
          />

          <div className="blog-post-footer">
            <Link href="/blog" className="blog-action-btn secondary">
              ← More Articles
            </Link>
            <Link href="/contact" className="blog-action-btn primary">
              Share Feedback
            </Link>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
