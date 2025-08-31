import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter3 from "../assets/img/meter3.svg";
import meter2    from "../assets/img/meter2.svg";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const { ref, inView } = useInView({
    threshold: 0.2, // لما 20% من العنصر يبقى ظاهر
    triggerOnce: false // مهم: علشان يتحرك كل مرة يظهر فيها
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [inView]);

  return (
    <section className="skill" id="skills" ref={ref}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={`skill-bx ${animate ? 'animate' : ''}`}>
                        <h2>Skills</h2>
                        <p>Here’s a quick look at the tools and skills that help me turn ideas into reliable mobile solutions</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
<div className="item"><img src={meter1} alt="Image" /><h5>Flutter & Dart</h5></div>
<div className="item"><img src={meter1} alt="Image" /><h5>State Management (Bloc, Cubit, Provider, Rx)</h5></div>
<div className="item"><img src={meter1} alt="Image" /><h5>Clean Architecture & Design Patterns</h5></div>
<div className="item"><img src={meter1} alt="Image" /><h5>CI/CD (GitHub Actions & Fastlane)</h5></div>
<div className="item"><img src={meter1} alt="Image" /><h5>Firebase & Cloud Integration</h5></div>
<div className="item"><img src={meter1} alt="Image" /><h5>API Integration (REST & GraphQL)</h5></div>
<div className="item"><img src={meter1} alt="Image" /><h5>Flutter Animations (Implicit & Explicit)</h5></div>
<div className="item"><img src={meter1} alt="Image" /><h5>Third-Party Packages (e.g. Dio, Hive, GetIt)</h5></div>
<div className="item"><img src={meter2} alt="Image" /><h5>Node.js Basics (APIs)</h5></div>
<div className="item"><img src={meter1} alt="Image" /><h5>Databases (MySQL, SQLite, MongoDB)</h5></div>
<div className="item"><img src={meter3} alt="Image" /><h5>React.js Basics</h5></div>


                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
