import NavBar from "./NavBar";
import GlassFrame from "./GlassFrame";
import "../styles/contact.scss";

function Contact() {
    return (        
        <div className="contacts">
            <GlassFrame>
                <NavBar />
                <div className="contact-content">
                    <div className="header"><h2>My contact</h2></div>
                    <div className="contact-list">
                        <div className="contact kontak-satu">
                            <div className="kontak type">Email</div>
                            <div className="kontak value">yeitzmee@gmail.com</div>
                        </div>
                        <div className="contact kontak-dua">
                            <div className="kontak type">WhatsApp</div>
                            <div className="kontak value"><a href="https://wa.link/n24nnv">+62 896 3638 7440</a></div>
                        </div>
                    </div>
                </div>
            </GlassFrame>
        </div>
    )
}

export default Contact