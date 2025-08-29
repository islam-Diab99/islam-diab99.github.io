import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { motion } from "framer-motion";   // 👈 استدعاء Framer Motion
import "../App.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Flutter Developer", "Software Engineer", "Problem Solver" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}     // يبدأ تحت
              whileInView={{ opacity: 1, y: 0 }}   // يظهر مع fade + slide up
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false }}           // 👈 يشتغل كل مرة يظهر
            >
              <span className="tagline">
                Welcome to my Portfolio
              </span>
              <h1>
                {`Hi! I'm Islam Diab `}
                <span className="txt-rotate">
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                I'm a passionate Software Engineer specialized in Flutter development. 
                I build high-performance, scalable mobile applications with clean 
                architecture and modern design patterns. Experienced in setting up 
                CI/CD pipelines, automated testing, and advanced mobile development 
                practices to deliver reliable and maintainable products.
              </p>
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
                onClick={() => console.log('connect')}
              >
                Let’s Connect <ArrowRightCircle size={25} />
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
  )
}
