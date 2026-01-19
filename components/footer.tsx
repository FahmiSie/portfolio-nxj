"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Skills", href: "/skills" },
    { name: "Resume", href: "/resume" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" }
  ];

  const socialLinks = [
    { name: "GitHub", href: "#", icon: "" },
    { name: "LinkedIn", href: "#", icon: "" },
    { name: "Email", href: "mailto:fahmi@example.com", icon: "" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="footer-logo">Famco.</h3>
          <p className="footer-description">
            Fullstack Developer & Finance Enthusiast. 
            Building modern web applications and exploring the intersection of technology and finance.
          </p>
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="social-link"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="footer-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="footer-title">Get In Touch</h4>
          <div className="footer-contact">
            <p>📧 fahmi@example.com</p>
            <p>📱 +62 XXX XXX XXXX</p>
            <p>📍 Malang, Indonesia</p>
          </div>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Fahmi Maulana. All rights reserved.</p>
        <p className="footer-made">Made with ❤️ using Next.js</p>
      </div>
    </footer>
  );
}
