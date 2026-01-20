"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    { 
      icon: "📧", 
      iconPath: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg", 
      label: "Email", 
      value: "famtech.co@gmail.com", 
      link: "mailto:famtech.co@gmail.com" 
    },
    { 
      icon: "💼", 
      iconPath: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg", 
      label: "LinkedIn", 
      value: "linkedin.com/in/fahmiaqilamaulana", 
      link: "https://www.linkedin.com/in/fahmiaqilamaulana" 
    },
    { 
      icon: "💻", 
      iconPath: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg", 
      label: "GitHub", 
      value: "github.com/fahmisie",
      link: "https://github.com/fahmisie" 
    },
    { 
      icon: "📱", 
      iconPath: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg", 
      label: "Phone", 
      value: "+62 82139163361", 
      link: "https://wa.me/6282139163361" 
    }
  ];

  return (
    <section className="contact-page page-transition">
      <div className="container">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h1>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Let's Work Together</h2>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Feel free to reach out!
            </p>

            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  className="contact-method"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <span className="method-icon">
                    {method.iconPath ? (
                      <img
                        src={method.iconPath}
                        alt={method.label}
                        width={32}
                        height={32}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent && !parent.querySelector(".icon-fallback")) {
                            const fallback = document.createElement("span");
                            fallback.className = "icon-fallback";
                            fallback.textContent = method.icon;
                            parent.appendChild(fallback);
                          }
                        }}
                        style={{ display: "inline-block", filter: 'invert(1)', width: '32px', height: '32px', objectFit: 'contain' }}
                      />
                    ) : (
                      <span>{method.icon}</span>
                    )}
                  </span>
                  <div>
                    <p className="method-label">{method.label}</p>
                    <p className="method-value">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Phobos Ultrapromex"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="phobos@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
