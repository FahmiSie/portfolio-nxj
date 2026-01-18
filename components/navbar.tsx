"use client";

export default function Navbar(){
    return (
        <nav className="navbar"
        style={{ cursor: 'pointer'}}>
            <h1 className="logo">Famco.</h1>

            <ul className="nav-links"
            style={{ cursor: 'pointer'}}>
                <li>Project</li>
                <li>About</li>
                <li>Resume</li>
                <li className="contact-btn">Contact</li>    
            </ul>
        </nav>
    )
}