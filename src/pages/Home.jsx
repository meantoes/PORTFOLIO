import "../styles/home.scss";
import GlassFrame from "./GlassFrame";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <GlassFrame>
        <div className="intro">
          <h1>Hi, I am <span className="nama">Najwa Hanana</span></h1>
          <p>I’m a Computer Science student, a graphic designer, UI/UX designer, and a full-stack web developer</p>
        </div>

        <div className="homeBtn"><Link className="homeBtn" to="/projects">see my projects</Link></div>
      </GlassFrame>
    </div>
  );
}

export default Home