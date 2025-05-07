import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Intersection Observer for fade-up animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with fade-up class
    document.querySelectorAll(".fade-up").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".fade-up").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  );
}

export default App;
