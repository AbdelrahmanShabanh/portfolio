import { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaCode,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import projectImage from "../assets/react.svg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleSection, setVisibleSection] = useState(false);
  const [flippedCard, setFlippedCard] = useState(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const sectionRef = useRef(null);
  const flipTimerRef = useRef(null);

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

      // Clear any active flip timer when component unmounts
      if (flipTimerRef.current) {
        clearTimeout(flipTimerRef.current);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "MYOU E-commerce",
      description:
        "Developed an e-commerce website for a clothing brand with customized theme colors. It helps with increasing buying rates by 55%.",
      image: projectImage,
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      github: "https://github.com/AbdelrahmanShabanh/MYOU-store.git",
      live: "",
      details:
        "An e-commerce platform for a clothing brand featuring customized theme colors and a user-friendly interface that contributed to a 55% increase in buying rates.",
      gallery: [projectImage, projectImage, projectImage],
      theme: {
        primary: "#e91e63",
        secondary: "#f8bbd9",
        gradient: "linear-gradient(135deg, #e91e63, #f8bbd9)",
        accent: "#ad1457"
      }
    },
    {
      id: 2,
      title: "Linear Scoot Website",
      description:
        "Developed a website for rental electric scooters at GU university in Suez, designed for students use within the campus. It will serve more than 20k college students.",
      image: projectImage,
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      github: "",
      live: "linearscoot-five.vercel.app",
      details:
        "A website for rental electric scooters at GU university in Suez, designed for students use within the campus. It will serve more than 20k college students. Led a team of Backend, Flutter, UX/UI developers and using Git, GitHub as version control.",
      gallery: [projectImage, projectImage, projectImage],
      theme: {
        primary: "#ff9800",
        secondary: "#ffcc80",
        gradient: "linear-gradient(135deg, #ff9800, #ffcc80)",
        accent: "#f57c00"
      }
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "A simple and intuitive weather application that provides real-time weather information for any location around the world.",
      image: projectImage,
      technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
      github: "https://github.com/AbdelrahmanShabanh/weatherapp.git",
      live: "",
      details:
        "This Weather App is a lightweight web application that allows users to check current weather conditions for any city or country. The app fetches real-time data from a weather API and displays temperature, humidity, wind speed, and weather conditions in a clean, user-friendly interface. Users can search for locations and get instant weather updates with visual indicators for different weather conditions.",
      gallery: [projectImage, projectImage, projectImage],
      theme: {
        primary: "#2e7d32",
        secondary: "#81c784",
        gradient: "linear-gradient(135deg, #2e7d32, #81c784)",
        accent: "#1b5e20"
      }
    },
    {
      id: 4,
      title: "Top Movies Rating App",
      description:
        "A movie rating application similar to IMDb that allows users to browse, rate, and review movies. Features a clean UI and comprehensive movie details.",
      image: projectImage,
      technologies: ["React", "JavaScript", "CSS", "API Integration"],
      github: "https://github.com/AbdelrahmanShabanh/Top-movies.git",
      live: "",
      details:
        "Top Movies is a React-based movie rating application inspired by IMDb. It allows users to browse through a collection of movies, view detailed information, rate films, and leave reviews. The application features a responsive design, search functionality, and integration with movie data APIs to provide a comprehensive movie browsing experience.",
      gallery: [projectImage, projectImage, projectImage],
      theme: {
        primary: "#ffc107",
        secondary: "#212121",
        gradient: "linear-gradient(135deg, #ffc107, #212121)",
        accent: "#ff8f00"
      }
    },
    {
      id: 5,
      title: "Gym Management System",
      description:
        "A GUI application built with Python Tkinter for a local gym to manage memberships, track attendance, and handle billing operations.",
      image: projectImage,
      technologies: ["Python", "Tkinter", "SQLite", "OOP"],
      github: "https://github.com/AbdelrahmanShabanh/gym-system.git",
      live: "",
      details:
        "This Gym Management System is a desktop application developed for a local gym using Python and Tkinter. The system helps gym owners and staff manage member registrations, track attendance, schedule classes, handle billing and payments, and generate reports. It features a user-friendly interface with different access levels for administrators and staff members, and stores all data in a local database for easy access and management.",
      gallery: [projectImage, projectImage, projectImage],
      theme: {
        primary: "#1565c0",
        secondary: "#64b5f6",
        gradient: "linear-gradient(135deg, #1565c0, #64b5f6)",
        accent: "#0d47a1"
      }
    },
    {
      id: 6,
      title: "Event Sphere",
      description:
        "Event Sphere is a modern, full-stack event booking platform that connects users with a diverse range of events.",
      image: projectImage,
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/AbdelrahmanShabanh/EventSphere.git",
      live: "",
      details:
        "Event Sphere is a modern, full-stack event booking platform that connects users with a diverse range of events. Built with React and Node.js, this application offers a seamless experience for discovering, booking, and managing event attendance.",
      gallery: [projectImage, projectImage, projectImage],
      theme: {
        primary: "#8d6e63",
        secondary: "#d7ccc8",
        gradient: "linear-gradient(135deg, #8d6e63, #d7ccc8)",
        accent: "#5d4037"
      }
    },
  ];

  const handleCardFlip = (projectId) => {
    // Clear any existing timer
    if (flipTimerRef.current) {
      clearTimeout(flipTimerRef.current);
      flipTimerRef.current = null;
    }

    if (flippedCard === projectId) {
      setFlippedCard(null);
    } else {
      setFlippedCard(projectId);

      // Set a timer to flip the card back after 5 seconds
      flipTimerRef.current = setTimeout(() => {
        setFlippedCard(null);
        flipTimerRef.current = null;
      }, 5000);
    }
  };

  const handleOpenProject = (project) => {
    // Clear any active flip timer when opening project details
    if (flipTimerRef.current) {
      clearTimeout(flipTimerRef.current);
      flipTimerRef.current = null;
    }

    setSelectedProject(project);
    setActiveGalleryIndex(0);
    document.body.style.overflow = "hidden";
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const handleGalleryNav = (index) => {
    setActiveGalleryIndex(index);
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
    <section id="projects" className="section" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-12 fade-up">
          <h2 className="section-title">My Projects</h2>
          <p>
            Here are some of the projects I've worked on. Click on a project to
            learn more about it.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`card project-card fade-up ${
                visibleSection ? "visible" : ""
              } ${flippedCard === project.id ? "flipped" : ""}`}
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                '--project-primary': project.theme.primary,
                '--project-secondary': project.theme.secondary,
                '--project-gradient': project.theme.gradient,
                '--project-accent': project.theme.accent
              }}
              onClick={() => handleCardFlip(project.id)}
            >
              <div className="card-inner">
                {/* Front of the card */}
                <div className="card-front" style={{ background: project.theme.gradient }}>
                  <div className="card-front-icon" style={{ color: 'white' }}>
                    <FaCode />
                  </div>
                  <h3 style={{ color: 'white' }}>{project.title}</h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Click to view details</p>
                </div>

                {/* Back of the card */}
                <div className="card-back themed-card-back">
                  <div className="project-img-container">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-img"
                      />
                    ) : (
                      <div
                        className="img-placeholder"
                        style={{ height: "100%" }}
                      >
                        {project.title}
                      </div>
                    )}
                    <div className="project-img-overlay" style={{ 
                      background: `linear-gradient(to top, ${project.theme.primary}dd, transparent)` 
                    }}></div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title" style={{ color: project.theme.primary }}>
                      {project.title}
                    </h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span 
                          key={i} 
                          className="project-tag"
                          style={{ 
                            backgroundColor: `${project.theme.primary}20`,
                            color: project.theme.accent,
                            border: `1px solid ${project.theme.primary}40`
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span 
                          className="project-tag"
                          style={{ 
                            backgroundColor: `${project.theme.primary}20`,
                            color: project.theme.accent,
                            border: `1px solid ${project.theme.primary}40`
                          }}
                        >
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="project-actions">
                      <button
                        className="btn btn-outline themed-btn"
                        style={{
                          borderColor: project.theme.primary,
                          color: project.theme.primary
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          // Clear the auto-flip timer when user interacts with the card
                          if (flipTimerRef.current) {
                            clearTimeout(flipTimerRef.current);
                            flipTimerRef.current = null;
                          }
                          handleOpenProject(project);
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = `${project.theme.primary}15`;
                          e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.transform = 'translateY(0)';
                        }}
                      >
                        <FaEye style={{ marginRight: "8px" }} /> Details
                      </button>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline themed-btn"
                          style={{
                            borderColor: project.theme.primary,
                            color: project.theme.primary
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            // Clear the auto-flip timer when user interacts with the card
                            if (flipTimerRef.current) {
                              clearTimeout(flipTimerRef.current);
                              flipTimerRef.current = null;
                            }
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = `${project.theme.primary}15`;
                            e.target.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.transform = 'translateY(0)';
                          }}
                        >
                          <FaGithub style={{ marginRight: "8px" }} /> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                  {/* Themed progress bar for auto-flip timer */}
                  <div 
                    className="card-back-timer"
                    style={{ backgroundColor: project.theme.primary }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseProject}>
          <div className="modal-content themed-modal" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button className="modal-close" onClick={handleCloseProject}>
                <FaTimes />
              </button>
              <img
                src={selectedProject.gallery[activeGalleryIndex]}
                alt={`${selectedProject.title} - Image ${
                  activeGalleryIndex + 1
                }`}
                className="modal-img"
              />

              <div className="project-gallery">
                <div className="gallery-container">
                  {selectedProject.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="gallery-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleGalleryNav(index);
                      }}
                    >
                      <img
                        src={image}
                        alt={`${selectedProject.title} - Thumbnail ${
                          index + 1
                        }`}
                        style={{
                          border:
                            activeGalleryIndex === index
                              ? `2px solid ${selectedProject.theme.primary}`
                              : "none",
                          opacity: activeGalleryIndex === index ? 1 : 0.7,
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="gallery-nav">
                  {selectedProject.gallery.map((_, index) => (
                    <div
                      key={index}
                      className={`gallery-dot ${
                        activeGalleryIndex === index ? "active" : ""
                      }`}
                      style={{
                        backgroundColor: activeGalleryIndex === index 
                          ? selectedProject.theme.primary 
                          : 'rgba(255, 255, 255, 0.3)'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleGalleryNav(index);
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-body">
              <h3 className="modal-title" style={{ color: selectedProject.theme.primary }}>
                {selectedProject.title}
              </h3>
              <p className="modal-description">{selectedProject.details}</p>

              <div className="modal-section">
                <h4 className="modal-section-title" style={{ color: selectedProject.theme.primary }}>
                  Technologies
                </h4>
                <div className="modal-tags">
                  {selectedProject.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="modal-tag"
                      style={{
                        backgroundColor: `${selectedProject.theme.primary}20`,
                        color: selectedProject.theme.accent,
                        border: `1px solid ${selectedProject.theme.primary}40`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ backgroundColor: selectedProject.theme.primary }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = selectedProject.theme.accent;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = selectedProject.theme.primary;
                    }}
                  >
                    <FaGithub style={{ marginRight: "8px" }} /> GitHub
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={`https://${selectedProject.live}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{
                      borderColor: selectedProject.theme.primary,
                      color: selectedProject.theme.primary
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = `${selectedProject.theme.primary}15`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                    }}
                  >
                    <FaExternalLinkAlt style={{ marginRight: "8px" }} /> Live
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;