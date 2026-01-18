import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experiences = [
    {
      title: "Senior Flutter Developer",
      company: "Eram Group",
      period: "Jan 2026 - Present",
      location: "Cairo, Egypt",
      type: "Full-time",
      description: "Led end-to-end development of Flutter mobile apps across B2B and B2C products. Owned technical decisions from architecture to production, designed Clean Architecture with MVVM using Bloc/Cubit/Provider, built monorepo structure with shared packages, architected fully automated CI/CD pipeline with multi-flavor environments and automated deployment to App Store and Google Play.",
      highlights: ["Team Lead", "CI/CD", "Clean Architecture"]
    },
    {
      title: "Mid-level Flutter Developer",
      company: "Eram Group",
      period: "Jan 2025 - Dec 2025",
      location: "Cairo, Egypt",
      type: "Full-time",
      description: "Worked on CI/CD implementation, responsive design, and contributed to mission-critical features including real-time tracking, secure payments, offline support, and scalable architecture with performance optimization.",
      highlights: ["CI/CD", "Performance", "Responsive Design"]
    },
    {
      title: "Mid-level Flutter Developer",
      company: "Paymac",
      period: "Jan 2024 - Jan 2025",
      location: "6th of October, Egypt",
      type: "Full-time",
      description: "Refactored and optimized legacy cross-platform ERP system focusing on performance and maintainability. Enhanced hardware integration layers, implemented new features in healthcare applications.",
      highlights: ["ERP Systems", "Healthcare", "Hardware Integration"]
    },
    {
      title: "Freelance Mobile Developer",
      company: "Self-employed",
      period: "Feb 2022 - Jan 2024",
      location: "Remote",
      type: "Freelance",
      description: "Delivered high-quality mobile applications for clients across different industries. Collaborated directly with clients to gather requirements and managed the full application delivery process.",
      highlights: ["Client Relations", "Full-Stack", "App Store Deployment"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className="experience" id="experience" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="experience-header"
        >
          <h2>Experience</h2>
          <p>My professional journey in mobile development</p>
        </motion.div>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={cardVariants}
            >
              <div className="timeline-marker">
                <div className="marker-dot" />
                {index < experiences.length - 1 && <div className="marker-line" />}
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-title-section">
                    <h4>{exp.title}</h4>
                    <div className="company-info">
                      <span className="company-name">{exp.company}</span>
                      <span className="company-type">{exp.type}</span>
                    </div>
                  </div>
                  <div className="timeline-meta">
                    <span className="period">{exp.period}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>

                <p className="timeline-description">{exp.description}</p>

                <div className="timeline-highlights">
                  {exp.highlights.map((highlight, i) => (
                    <span key={i} className="highlight-tag">{highlight}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
