"use client";
import { useEffect, useState } from "react";

export default function Cursor(){
        const [position, setPosition] = useState({ x: 0, y: 0 });
        const [isHovering, setIsHovering] = useState(false);

        useEffect(() => {
            const move = (e: MouseEvent) => {
                setPosition({ x: e.clientX, y: e.clientY });
            };

            const handleMouseEnter = () => setIsHovering(true);
            const handleMouseLeave = () => setIsHovering(false);

            const interactiveElements = document.querySelectorAll('a, button, [style*="cursor: pointer"]');
            
            window.addEventListener("mousemove", move);
            
            interactiveElements.forEach(el => {
                el.addEventListener("mouseenter", handleMouseEnter);
                el.addEventListener("mouseleave", handleMouseLeave);
            });

            return () => {
                window.removeEventListener("mousemove", move);
                interactiveElements.forEach(el => {
                    el.removeEventListener("mouseenter", handleMouseEnter);
                    el.removeEventListener("mouseleave", handleMouseLeave);
                });
            };
        }, []);

    return (
        <>
            <div
                className="custom-cursor"
                style={{ 
                    left: position.x, 
                    top: position.y,
                }}
            ></div>
            {isHovering && (
                <div
                    className="custom-cursor hover"
                    style={{ 
                        left: position.x, 
                        top: position.y,
                    }}
                ></div>
            )}
        </>
    )
}
