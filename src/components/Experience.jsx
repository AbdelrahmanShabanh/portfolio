import { useState, useEffect, useRef } from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTimes,
  FaCheckCircle,
  FaLaptop,
  FaCode,
  FaReact,
  FaServer,
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
      company: "3C School",
      location: "Online",
      period: "May 2025 - Present",
      type: "Part-time",
      image: experienceImage,
      description:
        "Teaching programming languages and concepts to students of different ages.",
      achievements: [
        "Teaching programming fundamentals to students across various age groups",
        "Developing engaging curriculum for online programming courses",
        "Mentoring students in coding best practices and problem-solving",
        "Creating interactive learning materials for remote education",
      ],
      icon: FaLaptop,
      theme: {
        primary: "#4CAF50",
        secondary: "#81C784"
      }
    },
    {
      id: 2,
      title: "Programming Instructor",
      company: "GC School",
      location: "Online",
      period: "May 2025 - Present",
      type: "Part-time",
      image: experienceImage,
      description:
        "Teaching programming languages and concepts to students of different ages.",
      achievements: [
        "Delivering comprehensive programming courses to diverse student groups",
        "Adapting teaching methods for different learning styles and ages",
        "Building strong online learning communities",
        "Tracking student progress and providing personalized feedback",
      ],
      icon: FaCode,
      theme: {
        primary: "#2196F3",
        secondary: "#64B5F6"
      }
    },
    {
      id: 3,
      title: "Frontend Intern (React)",
      company: "ITI",
      location: "Ismailia, Egypt",
      period: "June 2025 - Present",
      type: "Internship",
      image: experienceImage,
      description:
        "Learning JavaScript and React while working on real projects in teams and achieved A+ in final project.",
      achievements: [
        "Mastered JavaScript ES6+ features and modern development practices",
        "Built responsive web applications using React.js and modern libraries",
        "Collaborated effectively in team-based development projects",
        "Achieved A+ grade in final project demonstrating technical excellence",
        "Gained experience with version control systems and agile methodologies",
      ],
      icon: FaReact,
      theme: {
        primary: "#61DAFB",
        secondary: "#21232A"
      }
    },
    {
      id: 4,
      title: "Full Stack Intern",
      company: "STEM Entrepreneurship",
      location: "Remote",
      period: "March 2025 - May 2025",
      type: "Internship",
      image: experienceImage,
      description:
        "Gained comprehensive experience in full-stack web development technologies and frameworks.",
      achievements: [
        "Developed end-to-end web applications using modern tech stack",
        "Learned backend development with Node.js and database management",
        "Implemented RESTful APIs and integrated frontend with backend services",
        "Worked with both SQL and NoSQL databases",
        "Participated in code reviews and agile development processes",
      ],
      icon: FaServer,
      theme: {
        primary: "#FF6B35",
        secondary: "#F7931E"
      }
    },
    {
      id: 5,
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
      icon: FaBriefcase,
      theme: {
        primary: "#9C27B0",
        secondary: "#BA68C8"
      }
    },
    {
      id: 6,
      title: ".NET WEB Development Intern",
      company: "ITI",
      location: "Ismailia, Egypt",
      period: "July 2024 - August 2024",
      type: "Internship",
      image: experienceImage,
      description: "Learning full stack web development using .NET framework.",
      achievements: [
        "Learning to make a full stack website using MVC (.NET)",
        "Took a total score of 120/120 in the end of training and A+ in final project",
      ],
      icon: FaCode,
      theme: {
        primary: "#512BD4",
        secondary: "#7B68EE"
      }
    },
    {
      id: 7,
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
      icon: FaServer,
      theme: {
        primary: "#4DB33D",
        secondary: "#68CC45"
      }
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
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <div
                key={experience.id}
                className={`card experience-card fade-up ${
                  visibleSection ? "visible" : ""
                }`}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  borderLeft: `4px solid ${experience.theme.primary}`
                }}
                onClick={() => handleOpenExperience(experience)}
              >
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{experience.title}</h3>
                    <p className="experience-company" style={{ color: experience.theme.primary }}>
                      {experience.company}
                    </p>
                  </div>
                  <div 
                    className="experience-icon"
                    style={{ 
                      backgroundColor: `${experience.theme.primary}20`,
                      color: experience.theme.primary 
                    }}
                  >
                    <IconComponent />
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

                <button 
                  className="btn btn-outline mt-4"
                  style={{
                    borderColor: experience.theme.primary,
                    color: experience.theme.primary
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = `${experience.theme.primary}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  View Details →
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Experience Detail Modal */}
      {selectedExperience && (
        <div className="modal-overlay" onClick={handleCloseExperience}>
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
            style={{ border: `2px solid ${selectedExperience.theme.primary}` }}
          >
            <div className="relative">
              <button className="modal-close" onClick={handleCloseExperience}>
                <FaTimes />
              </button>
              <div
                style={{
                  background: `linear-gradient(135deg, ${selectedExperience.theme.primary}, ${selectedExperience.theme.secondary})`,
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
                      padding: "1rem",
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
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <selectedExperience.icon 
                        size={40} 
                        style={{ color: selectedExperience.theme.primary }}
                      />
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
                <h4 
                  className="modal-section-title"
                  style={{ color: selectedExperience.theme.primary }}
                >
                  Key Achievements
                </h4>
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
                          color: selectedExperience.theme.primary,
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