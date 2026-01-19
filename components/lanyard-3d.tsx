"use client";

import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export default function ProfileCard3D() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30, mass: 2 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <div className="lanyard3d-wrapper" style={{ perspective: "1200px" }}>
      {/* Tali Lanyard - Ikut bergoyang sedikit secara berlawanan */}
      <motion.div 
        className="lanyard3d-string"
        style={{ 
          rotateY: rotateY,
          transformOrigin: "top center" 
        }}
      />
      
      <motion.div
        className="lanyard3d-container"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          transformOrigin: "top center", 
        }}
      >
        <div className="lanyard3d-hole"></div>

        <div className="lanyard3d-tab">
          <span>PORTFOLIO</span>
        </div>

        <div className="lanyard3d-card">
          <div className="lanyard3d-avatar" style={{ transform: "translateZ(50px)" }}>
            <Image
              src="/image/profile/fam.png"
              alt="Fahmi Maulana"
              width={180}
              height={180}
              priority
            />
          </div>

          <div className="lanyard3d-role" style={{ transform: "translateZ(30px)" }}>Finance</div>
          <h3 className="lanyard3d-title" style={{ transform: "translateZ(40px)" }}>Fullstack<br/>DEV</h3>

          <div className="lanyard3d-footer">
            <span>© 2024 - 2026 • CREATED BY FAM</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function move(this: Window, ev: MouseEvent) {
    throw new Error("Function not implemented.");
}
