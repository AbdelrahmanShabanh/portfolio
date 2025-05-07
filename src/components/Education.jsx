import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaBook } from 'react-icons/fa';

const Education = () => {
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

  const education = {
    university: 'Suez Canal University',
    degree: 'BS in Computer Science',
    period: 'October 2022 - present',
    coursework: [
      'Web Development',
      'Comparison of Learning Algorithms',
      'OOP',
      'Data Structure',
      'Mobile Computing',
      'Data Base'
    ]
  };

  const technologies = {
    technical: [
      'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'JavaScript (ES6+)', 
      'jQuery', 'React.js', 'Vite.js', 'RESTful APIs', 'CRUD Operations', 
      'Git', 'GitHub', 'Vercel', 'Netlify'
    ],
    soft: [
      'Team Leading', 'Mentorship', 'Teaching', 'Teamwork', 
      'Time Management', 'Adaptability', 'Communication'
    ]
  };

  return (
    <section id="education" className="py-20 bg-dark-600" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visibleSection ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Education & Skills</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My educational background and the technologies I work with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={visibleSection ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card p-6"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">{education.degree}</h3>
                <p className="text-primary-400">{education.university}</p>
              </div>
              <div className="bg-primary-600/20 p-2 rounded-full">
                <FaGraduationCap className="text-primary-400" size={20} />
              </div>
            </div>
            
            <div className="flex items-center text-gray-400 mb-6">
              <FaCalendarAlt className="mr-2 text-sm" />
              <span className="text-sm">{education.period}</span>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <FaBook className="mr-2" /> Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, index) => (
                  <span 
                    key={index} 
                    className="bg-dark-500 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={visibleSection ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card p-6"
          >
            <h3 className="text-xl font-bold text-white mb-6">Technologies & Skills</h3>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.technical.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-primary-700/20 text-primary-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.soft.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-secondary-700/20 text-secondary-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
