import "../styles/home.scss";
import GlassFrame from "./GlassFrame";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <GlassFrame>
        <div className="intro">
          <h1>Hi, I am <span className="nama">Najwa Hanana</span></h1>
          <p>a CS student who enjoys designing <span className="point">Instagram feeds, building interfaces,</span> and creating things that feel <span className="point">simple and fun to use</span></p>
        </div>
{/* wth */}
        <div className="btn"><Link className="btn" to="/projects">{"see my projects >"}</Link></div>
      </GlassFrame>
    </div>
  );
}

export default Home