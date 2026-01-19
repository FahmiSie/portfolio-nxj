"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Tutup menu otomatis saat pindah halaman
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        <img src="/image/logos/famco.png" alt="Famco Logo" className="logo-img" />
      </Link>

      {/* Tombol Hamburger - Muncul di Mobile */}
      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li className={pathname === "/projects" ? "active" : ""}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={pathname === "/blog" ? "active" : ""}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={pathname === "/about" ? "active" : ""}>
          <Link href="/about">About</Link>
        </li>
        <li className={pathname === "/skills" ? "active" : ""}>
          <Link href="/skills">Skills</Link>
        </li>
        <li className={pathname === "/resume" ? "active" : ""}>
          <Link href="/resume">Resume</Link>
        </li>
        <li className={pathname === "/testimonials" ? "active" : ""}>
          <Link href="/testimonials">Testimonials</Link>
        </li>
        <li className={`contact-btn ${pathname === "/contact" ? "active" : ""}`}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}