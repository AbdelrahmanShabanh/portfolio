import { useState, useEffect, useRef } from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";
import experienceImage from "../assets/react.svg";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [visibleSection, setVisibleSection] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleSection(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      id: 1,
      title: "Programming Instructor",
      company: "Discovery Academy for Science and Technology",
      location: "Portsaid, Egypt",
      period: "February 2024 - Present",
      type: "Part-time",
      image: experienceImage,
      description:
        "Teaching programming languages and concepts to students of different ages.",
      achievements: [
        "Mentoring many students and won several awards in coding competitions",
        "Teaching (HTML, CSS, Bootstrap, JS, python, Scratch) to students from different ages",
        "Increased courses enrollment rates by 20%",
        "Learning Team Work while collaborating with my team in may competition and freelancing jobs",
      ],
    },
    {
      id: 2,
      title: "Backend Intern",
      company: "Suez Canal University",
      location: "Ismailia, Egypt",
      period: "June 2023 - August 2023",
      type: "Internship",
      image: experienceImage,
      description: "Learned backend development with Node.js and MongoDB.",
      achievements: [
        "Learning MongoDB and how to make server and apply CRUD operations on products using Nodejs and made an online pharmacy for a final project and we toke a total score of 49/50",
        "Learning about relational data base and non relational (NoSQL)",
      ],
    },
    {
      id: 3,
      title: ".NET WEB Development Intern",
      company: "Iti",
      location: "Ismailia, Egypt",
      period: "July 2024 - August 2024",
      type: "Internship",
      image: experienceImage,
      description: "Learning full stack web development using .NET framework.",
      achievements: [
        "Learning to make a full stack website using MVC (.NET)",
        "Took a total score of 120/120 in the end of training and A+ in final project",
      ],
    },
  ];

  const handleOpenExperience = (experience) => {
    setSelectedExperience(experience);
    document.body.style.overflow = "hidden";
  };

  const handleCloseExperience = () => {
    setSelectedExperience(null);
    document.body.style.overflow = "auto";
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="experience" className="section" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-12 fade-up">
          <h2 className="section-title">My Experience</h2>
          <p>
            Here's a summary of my professional experience and internships.
            Click on a card to see more details.
          </p>
        </div>

        <div className="experience-grid">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`card experience-card fade-up ${
                visibleSection ? "visible" : ""
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={() => handleOpenExperience(experience)}
            >
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{experience.title}</h3>
                  <p className="experience-company">{experience.company}</p>
                </div>
                <div className="experience-icon">
                  <FaBriefcase />
                </div>
              </div>

              <div className="experience-meta">
                <div className="experience-meta-item">
                  <FaCalendarAlt />
                  <span>{experience.period}</span>
                </div>

                <div className="experience-meta-item">
                  <FaMapMarkerAlt />
                  <span>{experience.location}</span>
                </div>
              </div>

              <p>{experience.description}</p>

              <button className="btn btn-outline mt-4">View Details →</button>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Detail Modal */}
      {selectedExperience && (
        <div className="modal-overlay" onClick={handleCloseExperience}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button className="modal-close" onClick={handleCloseExperience}>
                <FaTimes />
              </button>
              <div
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary-dark), var(--secondary-color))",
                  padding: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      background: "white",
                      padding: "0.5rem",
                      borderRadius: "50%",
                      width: "100px",
                      height: "100px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {selectedExperience.image ? (
                      <img
                        src={selectedExperience.image}
                        alt={selectedExperience.company}
                        style={{
                          width: "90px",
                          height: "90px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <div
                        className="img-placeholder"
                        style={{
                          width: "90px",
                          height: "90px",
                          borderRadius: "50%",
                          fontSize: "0.8rem",
                        }}
                      >
                        {selectedExperience.company}
                      </div>
                    )}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <h3
                      className="modal-title"
                      style={{ color: "white", marginBottom: "0.5rem" }}
                    >
                      {selectedExperience.title}
                    </h3>
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontSize: "1.25rem",
                        marginBottom: "1rem",
                      }}
                    >
                      {selectedExperience.company}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "1.5rem",
                        justifyContent: "center",
                        color: "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <FaCalendarAlt />
                        <span>{selectedExperience.period}</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <FaMapMarkerAlt />
                        <span>{selectedExperience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-body">
                <h4 className="modal-section-title">Key Achievements</h4>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {selectedExperience.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                      }}
                    >
                      <FaCheckCircle
                        style={{
                          color: "var(--primary-color)",
                          marginTop: "0.25rem",
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ color: "var(--text-gray)" }}>
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
