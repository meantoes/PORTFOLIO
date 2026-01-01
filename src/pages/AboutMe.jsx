import NavBar from "./NavBar";
import "../styles/aboutMe.scss";
import { Link } from "react-router-dom";

import pr1 from "../assets/logo/iden.png"
import pr2 from "../assets/logo/im.jpg"
import pr3 from "../assets/logo/ukmf.jpg"
import pr4 from "../assets/logo/fg.jpg"
import pr5 from "../assets/logo/io.jpg"
import pr6 from "../assets/logo/iden-50.png"
import pr7 from "../assets/logo/kj.png"
import pr8 from "../assets/logo/phi.png"

import GlassFrame from "./GlassFrame";

function Experience({experience}) {
    return (
        <div className="exp">
            <div className="info">
                <div className="left"><img src={experience.logo} alt={experience.company} /></div>
                <div className="right">
                    <div className="up">
                        <div className="company-name">{experience.company}</div>
                        <div className="year">{experience.year}</div>
                    </div>
                    <div className="bottom">
                        <div className="bottom">{experience.role}</div>
                        <div className="year-mobile">{experience.year}</div>
                    </div>
                </div>
            </div>
            <div className="exp-desc">{ experience.desc }</div>
        </div>
    )
}

function AboutMe() {
    return (
        <div className="about-me">
            <GlassFrame>
                <NavBar />
                {/* <div className="bio">
                    <div className="bio-profile">
                        <img src={pr1} alt="Najwa Hanana" />
                    </div>

                    <div className="bio-desc">
                        <h2 className="header">About Me</h2>
                        <p className="more-bio">
                            Hi, my name is Najwa Hanana, and I am from South Tangerang City. I am currently pursuing a bachelor’s degree in Information Systems at Hasanuddin University (Unhas). Since high school, I have been curious about creating and building things, which has grown into a strong interest in programming and design.
                            <br /><br />Through my involvement in various organizations, I have gained valuable experience in graphic design, photography, and journalism. I enjoy learning new things, adapting to different environments, and continuously improving my skills.
                            <br /><br />I see myself as a fast learner who is always eager to take on challenges and grow both personally and professionally.
                        </p>                        
                    </div>
                </div>      */}

                <div className="experiences">
                    <div className="header">
                        <h2>My experiences</h2>
                        <h2>6</h2>
                    </div>
                    <div className="exp-info">
                        <Experience experience={{ logo: pr2, company: "Indonesia Mengajar", year: "2025", role: "Graphic Designer", desc: "During my internship at Indonesia Mengajar, I was placed in the Pengajar Muda division, handling design tasks assigned by the campaign specialist. This experience not only gave me practical workplace exposure but also highlighted the importance of collaboration in meeting shared goals on time." }} />
                        <Experience experience={{ logo: pr1, company: "PK Identitas Unhas", year: "2023-2025", role: "Photographer Coordinator", desc: "I joined Identitas Unhas as an intern. Besides reporting, I worked as a graphic designer for article covers and infographics. I now serve as photography coordinator and editor for the Potret and Identitas English sections. During my time at Identitas, I learned to be disciplined, punctual, and responsible for the weekly tasks assigned to me." }} />
                        <Experience experience={{ logo: pr8, company: "Palu Hukum Indonesia", year: "2025", role: "Fullstack Developer", desc: "At Palu Hukum Indonesia (PHI), I worked as a solo full-stack developer, handling the entire development process—from UI/UX design to frontend implementation using React.js, backend development with PHP Laravel, and database management using MySQL. Throughout the project, I maintained regular communication with the head of PHI to provide progress updates and discuss improvements as needed." }} />
                        <Experience experience={{ logo: pr3, company: "UKM Fotografi Unhas", year: "2024-2025", role: "Coordinator of Information and Communication", desc: "As coordinator of the Unhas Photography Student Club, I delegated tasks and guided members while also taking on the role of designer. I designed the club’s Instagram feed, created templates to improve workflow, and collaborated on developing a website to showcase members’ works. Through this role, I gained deeper experience in leadership." }} />
                        <Experience experience={{ logo: pr7, company: "Kelana Jiwa", year: "2025", role: "Head of Graphic Designer", desc: "I took on the leadership role once again. In this position, I was responsible for assigning tasks to team members while taking the time to understand their availability and individual design styles. I also provided constructive feedback on their designs and ensured that the team completed all tasks on time." }} />
                        <Experience experience={{ logo: pr4, company: "Forbes Games", year: "2023", role: "Coordinator of Publication and Documentation", desc: "This was my first experience as a coordinator, where I learned many things such as teamwork, assigning tasks based on each member’s abilities, and communicating with other divisions to complete projects. I was also responsible for designing the Instagram feed for Forbes Games 2023." }} />
                        <Experience experience={{ logo: pr5, company: "International Office of Unhas", year: "2024", role: "Intern", desc: "Selected as one of 180 applicants, I volunteered as a student representative where I served as MC, assisted international students, welcomed guests at the airport, and coordinated the Pakistan booth. Through this role, I gained insight into university-level international affairs and expanded my professional network." }} />
                        <Experience experience={{ logo: pr6, company: "PK Identitas Unhas' 50th Anniversary", year: "2024", role: "Treasurer", desc: "In this role, I challenged myself to try something I usually avoid—accounting. As treasurer, I recorded cash inflows and outflows, managed and compiled the finances for the 50th Dies Natalis of PK Identitas Unhas, and had the opportunity to sharpen my Excel skills." }} />
                        
                    </div>
                </div>
                

                <div className="tools-container">
                    <div className="tools">
                        <div className="header">
                            <h2>Tools I use</h2>
                            <h2>12</h2>
                        </div>
                        <div className="tools-grid">
                            <div className="tool">Notion</div>
                            <div className="tool">Figma</div>
                            <div className="tool">VS Code</div>
                            <div className="tool">Google Workspace</div>
                            <div className="tool">Canva</div>
                            <div className="tool">GitHub</div>
                            <div className="tool">Discord</div>
                            <div className="tool">Adobe Creative</div>
                            <div className="tool">Tableau</div>
                            <div className="tool">Slack</div>
                            <div className="tool">CorelDraw</div>
                            <div className="tool">Microsoft Office</div>
                        </div>
                    </div>

                    <div className="tools">
                        <div className="header">
                            <h2>Technical Skills</h2>
                            <h2>10</h2>
                        </div>
                        <div className="tools-grid skills">

                            <div className="start">
                                <div className="tool skill">Python</div>
                                <div className="tool skill">Java</div>
                                <div className="tool skill">JavaScript</div>
                                <div className="tool skill">React</div>
                                <div className="tool skill-mobile">PHP</div>

                            </div>

                            <div className="middle">
                                <div className="tool skill">Sass</div>
                                <div className="tool skill">Tailwind</div>
                                <div className="tool skill">Bootstrap</div>
                                <div className="tool skill">MySql</div>
                                <div className="tool skill-mobile">Laravel</div>
                            </div>

                            <div className="end">
                                <div className="tool skill">PHP</div>
                                <div className="tool skill">Laravel</div>
                            </div>                        
                        </div>
                    </div>
                </div>

                <Link className="aboutme-btn" to="/contact"><button className="btn">Contact me</button></Link>
            </GlassFrame>
        </div>
    )
}

export default AboutMe