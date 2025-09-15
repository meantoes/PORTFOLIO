import "../styles/nav-bar.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function NavBar() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <div className="navBar">
            <button className="iconBtn back" onClick={() => navigate(-1)}></button>
            <button className="iconBtn menu" onClick={() => setMenuOpen(true)}></button>
        </div>
        
        <AnimatePresence>
            {menuOpen && (
                <motion.div
                    className="menu-overlay"
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <motion.div
                    className="menu-frame"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, scale: 0.9, y: -20, x: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20, x: 20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                    <nav className="menu-links">
                        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                        <Link to="/aboutMe" onClick={() => setMenuOpen(false)}>About Me</Link>
                        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                    </nav>
                    </motion.div>
                </motion.div>
            )}
      </AnimatePresence>
        </>
    )
}