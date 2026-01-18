import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills = [
    { name: "Flutter & Dart", level: "Expert" },
    { name: "State Management", description: "Bloc, Cubit, Provider", level: "Expert" },
    { name: "Clean Architecture", description: "MVVM, Design Patterns", level: "Expert" },
    { name: "CI/CD", description: "GitHub Actions, Fastlane", level: "Expert" },
    { name: "Firebase", description: "Auth, Firestore, FCM", level: "Expert" },
    { name: "API Integration", description: "REST & GraphQL", level: "Expert" },
    { name: "Animations", description: "Implicit & Explicit", level: "Advanced" },
    { name: "Packages", description: "Dio, Hive, GetIt", level: "Expert" },
    { name: "Databases", description: "SQLite, MongoDB", level: "Advanced" },
    { name: "Node.js", description: "REST APIs", level: "Intermediate" },
    { name: "React.js", description: "Web Development", level: "Intermediate" },
    { name: "Git & GitHub", description: "Version Control", level: "Expert" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
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
    <section className="skill" id="skills" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <motion.div
              className="skill-bx"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Skills
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Technologies and tools I use to build high-quality mobile applications
              </motion.p>

              <motion.div
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className={`skill-card ${skill.level.toLowerCase()}`}
                    variants={cardVariants}
                  >
                    <div className="skill-card-inner">
                      <h5>{skill.name}</h5>
                      {skill.description && (
                        <span className="skill-description">{skill.description}</span>
                      )}
                      <div className="skill-level-indicator">
                        <span className="level-dot" />
                        <span className="level-text">{skill.level}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
