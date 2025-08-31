import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { motion } from "framer-motion";
import "../App.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150); // أسرع من قبل
  const [index, setIndex] = useState(1);
  const toRotate = [ "Flutter Developer", "Software Engineer", "Problem Solver" ];
  const period = 1000; // وقت أقل قبل الحذف

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(80); // سرعة الحذف
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150); // سرعة الكتابة
    }
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:idiab604@gmail.com";
  }

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
                <span className="txt-rotate">
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
             Flutter Developer with 3 years of experience turning ideas into smooth, high-performance mobile apps. I enjoy solving problems, polishing UI/UX, and writing clean code that feels good to maintain. Flutter & Dart are my main tools, but I’m always curious to explore new tech. What drives me most is the thrill of shipping something users actually love — and the fun of continuously improving it.
              </p>
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://drive.google.com/file/d/1WGPM7IWJqx5owaSApxlaEtmd9oAE_pJt/view?usp=sharing", "_blank")}
              >
                Download My CV <ArrowRightCircle size={25} />
              </motion.button>
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
                src={headerImg} 
                alt="Header Img" 
                className="header-img floating"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
