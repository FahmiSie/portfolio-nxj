"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(){
    const pathname = usePathname();
    
    return (
        <nav className="navbar"
        style={{ cursor: 'pointer'}}>
            <Link href="/" className="logo">
                <img src="/image/logos/famco.png" alt="Famco Logo" className="logo-img"/>
            </Link>

            <ul className="nav-links"
            style={{ cursor: 'pointer'}}>
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
    )
}