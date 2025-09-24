import "../styles/projects.scss";
import GlassFrame from "./GlassFrame";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import pr1 from "../assets/images/ui kpdmi.webp";
import pr2 from "../assets/images/pm.webp";
import pr3 from "../assets/images/identitas.webp";
import pr4 from "../assets/images/ukmf.webp";
import pr5 from "../assets/images/fg.webp";
import pr6 from "../assets/images/ui kpdmi.webp";

function ListofProject({ project, onClick, onHover }) {
    return (
    <div
        className="list-projects"
        onClick={() => onClick(project)}
        onMouseEnter={() => onHover(project.image)}
        onMouseLeave={() => onHover(null)}
    >
        <div className="role p-role">{project.role}</div>
        <div className="company-name">
            <Link className="reviewBtn" to="#">
                {project.companyName}
            </Link>
        </div>        
    </div>
    );
}

// ONCLOSE TO CLOSE THE MODAL
function ProjectModal({ project, onClose, onNext }) {
    if (!project) return null;

    return (
    <div className="overlay" onClick={onClose}>
        <div className="modal-frame" onClick={(e) => e.stopPropagation()}>
            <div className="modal-text">
                <h2>{project.companyName}</h2>
                <p className="exp-desc">{project.expDesc}</p>
            </div>
            {project.image && <img src={project.image} alt={project.companyName} />}
            <div className="buttons-modal">
                <button className="btn" onClick={onClose}>{"< back to Projects"}</button>
                <div className="projectBtn-modal"><button className="btn" onClick={onNext}>{"next project >"}</button></div>
            </div>
        </div>
    </div>
  );
}

function Projects() {
    const projects = [
        {
        companyName: "Solo project",
        role: "UI Designer",
        image: pr1,
        expDesc: "The leader of the photography club and I developed the visual identity for UKM Fotografi Unhas’ Instagram feed. We agreed on a unified color scheme, and I created templates for each content type to streamline the workflow.",
        },
        {
        companyName: "Indonesia Mengajar",
        role: "Graphic Designer",
        image: pr2,
        expDesc: "This feed was designed using Canva, which is Indonesia Mengajar’s primary design platform. I followed the design style of previous templates and gradually adapted it to reflect my own style over time."
        },
        {
        companyName: "PK Identitas Unhas",
        role: "Journalist and Graphic Designer",
        image: pr3,
        expDesc: "At Identitas, design depends on each designer’s creativity. I used Figma as my primary tool, exploring various elements to complement the layout, and utilizing plugins for illustrations."
        },
        {
        companyName: "UKM Fotografi Unhas",
        role: "Graphic Designer",
        image: pr4,
        expDesc: "The leader of the photography club and I developed the visual identity for UKM Fotografi Unhas’ Instagram feed. We agreed on a unified color scheme, and I created templates for each content type to streamline the workflow."
        },
        {
        companyName: "Forbes Games 2023",
        role: "Graphic Designer",
        image: pr5,
        expDesc: "Forbes Games 2023 was my first organizational experience, where I also challenged myself to take on a leadership role. I was responsible for designing the Instagram feed, and although the results were not perfect, I am grateful for the opportunity and the valuable experience it gave me."
        },
        {
        companyName: "KPDM",
        role: "UI Design",
        image: pr6,
        },
        {
        companyName: "UKM Fotografi Unhas",
        role: "Web Developer",
        image: pr6,
        },
    ];

    const [selectedIndex, setSelectedIndex] = useState(null);
    const selectedProject = selectedIndex !== null ? projects[selectedIndex] : null;
    const [hoveredImage, setHoveredImage] = useState(null);

    const nextProject = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((prev) => (prev + 1) % projects.length);
        }
    };
    
    return (
        <div className="projectsPage">
            <GlassFrame>
                <NavBar />

                <div className="contents">
                    <div className="content-left">
                        <div className="content-up">
                            <div className="header-project header">
                                <h2>Projects</h2>
                                <h2>7</h2>
                            </div>

                            <div className="list-project">
                                {projects.map((p, idx) => (
                                    <ListofProject
                                    key={idx}
                                    project={p}
                                    onClick={() => setSelectedIndex(idx)}
                                    onHover={(img) => setHoveredImage(img)}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="content-bottom">
                            <div className="projectBtn"><Link className="btn" to="/aboutMe">{"about me >"}</Link></div>
                        </div>
                    </div>

                    <div className="content-right">
                        <AnimatePresence mode="wait">
                            {hoveredImage ? (
                            <motion.img
                                key={hoveredImage}
                                className="preview-img"
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

                    <div className="content-bottom">
                        <div className="projectBtn-mobile"><Link className="btn" to="/aboutMe">{"about me >"}</Link></div>
                    </div>
                </div>
            </GlassFrame>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    >
                    <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedIndex(null)}
                    onNext={nextProject}
                    />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Projects