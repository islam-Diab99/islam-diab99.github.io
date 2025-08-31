import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import "../App.css";

export const Contact = () => {
  const contacts = [
    { title: "Mobile", value: "+20 1277775152", link: "tel:1277775152", icon: <FaPhone /> },
    { title: "Email", value: "idiab604@gmail.com", link: "mailto:idiab604@gmail.com", icon: <FaEnvelope /> },
    { title: "WhatsApp", value: "+20 1010014318", link: "https://wa.me/201010014318", icon: <FaWhatsapp /> },
    { title: "Facebook", value: "Islam Diab", link: "https://www.facebook.com/abodiab144/", icon: <FaFacebookF /> },
  ];

  const { ref, inView } = useInView({ threshold: 0.2 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => { setAnimate(inView); }, [inView]);

  return (
    <section className="contact" id="contact" ref={ref}>
      <Container>
        <div className={`contact-header ${animate ? "animate" : ""}`}>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-grid">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`contact-card ${animate ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="icon">{contact.icon}</div>
              <h4>{contact.title}</h4>
              <span>{contact.value}</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};
