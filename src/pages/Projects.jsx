import "../styles/projects.scss";
import GlassFrame from "./GlassFrame";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import pr1 from "../assets/images/1.jpg";
import pr2 from "../assets/images/2.jpg";
import pr3 from "../assets/images/3.jpg";
import pr4 from "../assets/images/4.jpg";
import pr5 from "../assets/images/5.jpg";
import pr6 from "../assets/images/6.jpg";
import pr7 from "../assets/images/ui kpdmi.jpg";

function ListofProject({ project, onClick, onHover }) {
    return (
    <div
        className="list-projects"
        onClick={() => onClick(project)}
        onMouseEnter={() => onHover(project.image)}
        onMouseLeave={() => onHover(null)}
    >
        <div className="role">{project.role}</div>
        <div className="company-name">
            <Link className="reviewBtn" to="#">
                {project.companyName}
            </Link>
        </div>        
    </div>
    );
}

function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
    <div className="overlay" onClick={onClose}>
        <div className="modal-frame" onClick={(e) => e.stopPropagation()}>
            {/* <div className="modal-text">
                <h2>{project.companyName}</h2>
                <p>{project.role}</p>
            </div> */}
            {project.image && <img src={project.image} alt={project.companyName} />}
        </div>
    </div>
  );
}

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [hoveredImage, setHoveredImage] = useState(null);

    const projects = [
        {
        companyName: "Indonesia Mengajar",
        role: "Graphic Designer",
        image: pr1,
        },
        {
        companyName: "PK Identitas Unhas",
        role: "Journalist and Graphic Designer",
        image: pr2,
        },
        {
        companyName: "UKM Fotografi Unhas",
        role: "Graphic Designer",
        image: pr3,
        },
        {
        companyName: "Forbes Games 2023",
        role: "Graphic Designer",
        image: pr4,
        },
        {
        companyName: "KPDM",
        role: "UI Design",
        image: pr5,
        },
        {
        companyName: "UKM Fotografi Unhas",
        role: "Web Developer",
        image: pr6,
        },
        {
        companyName: "Solo",
        role: "Graphic Designer",
        image: pr7,
        },
    ];
    
    return (
        <div className="projectsPage">
            <GlassFrame>
                <NavBar />

                <div className="contents">
                    <div className="content-left">
                        <div className="content-up">
                            <div className="header-project">
                                <h2>Projects</h2>
                                <h2>7</h2>
                            </div>

                            <div className="list-project">
                                {projects.map((p, idx) => (
                                    <ListofProject
                                    key={idx}
                                    project={p}
                                    onClick={(proj) => setSelectedProject(proj)}
                                    onHover={(img) => setHoveredImage(img)}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="content-bottom">
                            <div className="projectBtn"><Link className="homeBtn" to="/aboutMe">about me</Link></div>
                        </div>
                    </div>

                    <div className="content-right">
                        <AnimatePresence mode="wait">
                            {hoveredImage ? (
                            <motion.img
                                key={hoveredImage} // re-trigger animation when the image changes
                                className="hover-preview preview-img"
                                src={hoveredImage}
                                alt="preview"
                                initial={{ opacity: 1, filter: "grayscale(100%)", scale: 1.05 }}
                                animate={{ opacity: 1, filter: "grayscale(0%)", scale: 1 }}
                                exit={{ opacity: 1, filter: "grayscale(100%)", scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                style={{ borderRadius: "20px"}}                    
                            />
                            ) : (
                            <motion.p
                                key="hint"
                                className="preview-hint"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                Hover a project to preview
                            </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </GlassFrame>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="modal-frame"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedProject.image && (
                            <motion.img
                                key={selectedProject.image}
                                src={selectedProject.image}
                                alt={selectedProject.companyName}
                                initial={{ opacity: 0, y: 70 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 70 }}
                                transition={{ duration: 0.4 }}
                            />
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Projects