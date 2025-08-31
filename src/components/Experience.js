import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

export const Experience = () => {

  const experiences = [
{ 
  title: "Mid-level Flutter Developer", 
  company: "Eram Group", 
  period: "Jan 2025 - Present", 
  description: "Leading mobile team, streamlining CI/CD, and delivering mission-critical features such as real-time tracking, secure payments, offline support, scalable architecture, advanced performance optimization, and resilient UI with optimistic updates and safe rollback for concurrent requests."
}, 
{ 
  title: "Mid-level Flutter Developer", 
  company: "Paymac Software Solutions", 
  period: "Oct 2024 - Jan 2025", 
  description: "Modernized legacy systems by resolving critical performance bottlenecks, improving cross-device responsiveness, integrating with hardware systems, and ensuring continuous delivery of stable updates." 
}, 
{ 
  title: "Freelance Flutter Developer", 
  company: "Various Clients", 
  period: "Jan 2023 - Present", 
  description: "Designed and developed complete Flutter applications for international clients, handling architecture, UI/UX, integrations, performance improvements, and ensuring client satisfaction with timely deliveries."
}
  ];
  
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Experience</h2>
                  <p>Here is my professional journey and work experiences over the years.</p>

                  <Row>
                    {experiences.map((exp, index) => (
                      <TrackVisibility key={index} partialVisibility>
                        {({ isVisible }) => (
                          <Col md={6} className={`exp-card ${isVisible ? "visible" : ""}`}>
                            <div className="exp-card-box">
                              <h4>{exp.title}</h4>
                              <span>{exp.company} | {exp.period}</span>
                              <p>{exp.description}</p>
                            </div>
                          </Col>
                        )}
                      </TrackVisibility>
                    ))}
                  </Row>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
