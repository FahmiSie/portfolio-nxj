"use client";
import { motion } from "framer-motion";
export default function Hero(){
    return(
        <section className="hero">
            <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            >
            Hello Im
            </motion.p>

            <motion.h2
            className="hero-title"
            initial={{ opacity: 0, y: 50}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1}}
            >
            Fahmi <br/> Maulana
            </motion.h2>

            <motion.p
            className="hero-desc"
            initial={{ opacity: 0}}
            animate={{opacity: 0.7}}
            transition={{duration: 0.8, delay: 0.3}}
            >Im deeply passionate about Finance and Tech Industries
            </motion.p>

            <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ cursor: 'pointer'}}
            >↓
            </motion.div>
            
        </section>
    )
}