import { useEffect } from "react";
import meter1 from "../assets/img/meter1.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { motion } from "framer-motion";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <motion.section
      className="skill"
      id="skills"
      initial={{ opacity: 0, y: 100 }}       // يبدأ تحت و شفاف
      whileInView={{ opacity: 1, y: 0 }}     // لما يدخل الشاشة يطلع لفوق + يبان
      transition={{ duration: 1, ease: "easeOut" }} // زمن الانيميشن
      viewport={{ once: false }}              // يشتغل مرة واحدة بس
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <motion.div
              className="skill-bx"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2>My Skills</h2>
              <p>
                As a <strong>Flutter Developer</strong>, I specialize in building
                high-performance mobile apps with clean architecture, advanced state management,
                and CI/CD automation for seamless deployment.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Flutter & Dart</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>State Management (Bloc, Cubit, Provider, Rx)</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Clean Architecture & Design Patterns</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>CI/CD (GitHub Actions & Fastlane)</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Firebase & Cloud Integration</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>API Integration (REST & GraphQL)</h5>
                </div>

                {/* 🔹 Flutter Extras */}
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Flutter Animations (Implicit & Explicit)</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Third-Party Packages (e.g. Dio, Hive, GetIt)</h5>
                </div>

                {/* 🔹 Basic Backend */}
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Node.js Basics (APIs)</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Databases (MySQL, SQLite, MongoDB)</h5>
                </div>
              </Carousel>
            </motion.div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </motion.section>
  );
};
