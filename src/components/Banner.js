import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../assets/img/profile.jpg";
import { motion } from "framer-motion";
import "../App.css";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                Hi! <span className="highlight-name">I'm Islam Diab</span>
                <span className="txt-rotate">Senior Flutter Developer</span>
              </h1>
              <p>
             Senior Flutter Developer with 4 years of experience building high-performance mobile applications. I architect scalable solutions using Clean Architecture and MVVM, and own the full development lifecycle from design to production. Experienced in CI/CD automation, monorepo structures, and delivering both B2B and B2C products. Passionate about writing clean, maintainable code and driving technical excellence.
              </p>
            </motion.div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: false }}
              className="header-img-container"
            >
              <img
                src={profileImg}
                alt="Islam Diab"
                className="profile-img"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
