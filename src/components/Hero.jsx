import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaFileAlt,
} from "react-icons/fa";
// Import profile image
import profileImage from "../assets/images/WhatsApp Image 2023-02-14 at 18.53.00.jpg";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-content">
          <div className="profile-container">
            <div className="profile-img-wrapper">
              <div className="profile-img-bg"></div>
              <img
                src={profileImage}
                alt="Abdelrahman Shaban"
                className="profile-img"
              />
            </div>
          </div>

          <div className="hero-text">
            <h1>Abdelrahman Mohmmmed Shaban</h1>
            <h2>Front-End Developer</h2>
            <p>
              I am a front-end web developer and a Computer Science student at
              Suez Canal University. I currently work at Discovery Academy as a
              Programming Instructor (part-time). Have developed multiple
              front-end projects using HTML, CSS, Bootstrap, JavaScript, React,
              and Python (Tkinter). Additionally, I have experience in data
              structures (C++) and object-oriented programming (Java). Also work
              as a freelance front-end developer.
            </p>

            <div className="social-links">
              <a
                href="https://github.com/AbdelrahmanShabanh"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/abdelrahman-shaban-80669726b"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:bodysh2019@gmail.com" className="social-link">
                <FaEnvelope size={24} />
              </a>
              <a href="tel:01008872621" className="social-link">
                <FaPhone size={24} />
              </a>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#experience" className="btn btn-outline">
                My Experience
              </a>
              <a
                href="https://drive.google.com/file/d/16l-6k6ekTSPk_AUH_ZCarUOBNKsanmmi/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline resume-btn"
              >
                <FaFileAlt style={{ marginRight: "8px" }} /> Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
