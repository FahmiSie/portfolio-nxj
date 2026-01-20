"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

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
    { 
      name: "GitHub", 
      href: "https://github.com/fahmisie", 
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" 
    },
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/fahmiaqilamaulana", 
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" 
    },
    { 
      name: "Email", 
      href: "mailto:famtech.co@gmail.com", 
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg"
    }
  ];

  return (
    <footer className="footer border-t border-white/10 mt-20"> 
      <div className="footer-container">
        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="footer-logo text-2xl font-bold text-orange-500">Famco.</h3>
          <p className="footer-description text-gray-400 mt-4">
            Fullstack Developer & Finance Enthusiast. 
            Building modern web applications and exploring the intersection of technology and finance.
          </p>
          
          <div className="footer-social flex gap-4 mt-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image 
                  src={social.icon} 
                  alt={social.name} 
                  width={20} 
                  height={20}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
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
          <h4 className="footer-title font-semibold text-white">Quick Links</h4>
          <ul className="footer-links mt-4 space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="footer-link text-gray-400 hover:text-orange-500 transition-colors">
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
          <h4 className="footer-title font-semibold text-white">Get In Touch</h4>
          <div className="footer-contact mt-4 space-y-3 text-gray-400">
            <p className="flex items-center gap-2 hover:text-orange-500 transition-colors">
              <span>📧</span> famtech.co@gmail.com
            </p>
            <p className="flex items-center gap-2 hover:text-orange-500 transition-colors">
              <span>📱</span> +62 82139163361
            </p>
            <p className="flex items-center gap-2 hover:text-orange-500 transition-colors">
              <span>📍</span> Malang, Indonesia
            </p>
          </div>
        </motion.div>
      </div>

      <div className="footer-bottom border-t border-white/5 py-8 mt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {currentYear} Fahmi Maulana. All rights reserved.</p>
        <p className="footer-made mt-2 md:mt-0">
          Made with ❤️ using <span className="text-blue-400">Next.js</span>
        </p>
      </div>
    </footer>
  );
}