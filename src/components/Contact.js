import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

export const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const contacts = [
    {
      title: "Email",
      value: "idiab604@gmail.com",
      link: "mailto:idiab604@gmail.com",
      icon: <FaEnvelope />,
      gradient: "linear-gradient(135deg, #EA4335, #FF6B6B)"
    },
    {
      title: "Phone",
      value: "+20 127 777 5152",
      link: "tel:+201277775152",
      icon: <FaPhone />,
      gradient: "linear-gradient(135deg, #34A853, #4ADE80)"
    },
    {
      title: "LinkedIn",
      value: "islamdiab0",
      link: "https://www.linkedin.com/in/islamdiab0/",
      icon: <FaLinkedinIn />,
      gradient: "linear-gradient(135deg, #0A66C2, #0EA5E9)"
    },
    {
      title: "GitHub",
      value: "islam-Diab99",
      link: "https://github.com/islam-Diab99",
      icon: <FaGithub />,
      gradient: "linear-gradient(135deg, #6E7681, #A1A1AA)"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
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
    <section className="contact" id="contact" ref={ref}>
      <Container>
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In Touch</h2>
          <p>Feel free to reach out for collaborations or just a friendly hello</p>
        </motion.div>

        <motion.div
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              variants={cardVariants}
            >
              <div className="contact-card-inner">
                <div className="contact-icon-wrapper" style={{ background: contact.gradient }}>
                  {contact.icon}
                </div>
                <div className="contact-info">
                  <h4>{contact.title}</h4>
                  <span>{contact.value}</span>
                </div>
                <div className="contact-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>Prefer email? Send me a message directly</p>
          <a href="mailto:idiab604@gmail.com" className="cta-button">
            Send Email
          </a>
        </motion.div>
      </Container>
    </section>
  );
};
