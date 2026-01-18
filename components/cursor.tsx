"use client";
import { useEffect, useState } from "react";

export default function Cursor(){
        const [position, setPosition] = useState({ x: 0, y:0})

        useEffect(() => {
            const move = (e: MouseEvent ) => {
                setPosition({ x: e.clientX, y: e.clientY});
            }
            window.addEventListener("mousemove", move);
        }, []);
    return (
        <div
        className="custom-cursor"
        style={{ left: position.x, top: position.y }}
        ></div>
    )
}
