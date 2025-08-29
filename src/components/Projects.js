import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { motion } from "framer-motion";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "E-Commerce App",
      description: "Flutter Mobile App",
      imgUrl: projImg2,
    },
    {
      title: "Portfolio Website",
      description: "React + Bootstrap",
      imgUrl: projImg3,
    },
    {
      title: "Dashboard System",
      description: "Web Development",
      imgUrl: projImg1,
    },
    {
      title: "Chat Application",
      description: "Flutter + Firebase",
      imgUrl: projImg2,
    },
    {
      title: "Landing Page",
      description: "UI/UX Design",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}   // 👈 يبدأ من الجنب الشمال
              whileInView={{ opacity: 1, x: 0 }}  // 👈 يدخل لمكانه الطبيعي
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <h2>Projects</h2>
              <p>
                A collection of my recent works showcasing Flutter apps,
                web development, and design projects. Built with clean
                architecture, modern UI, and optimized performance.
              </p>

              <Row>
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}       // 👈 العناصر تدخل من اليمين
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }} // 👈 stagger effect
                    viewport={{ once: false }}
                    className="col-md-4"
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </Row>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg" />
    </section>
  );
};
