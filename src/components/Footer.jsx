import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaArrowUp,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaFileAlt,
} from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="text-center mb-12 fade-up">
          <h2 className="section-title">Get In Touch</h2>
          <p>
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div
              className="contact-card fade-up"
              style={{ transitionDelay: "0.1s" }}
            >
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <h3>Email</h3>
                <p>bodysh2019@gmail.com</p>
              </div>
            </div>

            <div
              className="contact-card fade-up"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div>
                <h3>Phone</h3>
                <p>01008872621</p>
              </div>
            </div>

            <div
              className="contact-card fade-up"
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3>Location</h3>
                <p>Portsaid, Egypt</p>
              </div>
            </div>

            <div
              className="social-links-container fade-up"
              style={{ transitionDelay: "0.4s" }}
            >
              <h3>Follow Me</h3>
              <div className="social-links">
                <a
                  href="https://github.com/AbdelrahmanShabanh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/abdelrahman-shaban-80669726b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin />
                </a>
                <a href="mailto:bodysh2019@gmail.com" className="social-link">
                  <FaEnvelope />
                </a>
                <a href="tel:01008872621" className="social-link">
                  <FaPhone />
                </a>
                <a
                  href="https://drive.google.com/file/d/16l-6k6ekTSPk_AUH_ZCarUOBNKsanmmi/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link resume-link"
                >
                  <FaFileAlt />
                </a>
              </div>
            </div>
          </div>

          <div
            className="contact-form-container fade-up"
            style={{ transitionDelay: "0.5s" }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <FaPaperPlane style={{ marginLeft: "8px" }} />
              </button>

              {submitSuccess && (
                <div className="success-message">
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Abdelrahman Shaban. All rights
            reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="scroll-top"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
