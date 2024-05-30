import java from "../assets/img/java.png";
import python from "../assets/img/Python-Symbol.png";
import git from "../assets/img/git.png";
import tailwindcss from "../assets/img/tailwindcss.webp"
import react from "../assets/img/reactjs.png"
import nodejs from "../assets/img/nodejs.png"
import javascript from "../assets/img/js.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import vercel from "../assets/img/vercel.png";
import sql from "../assets/img/sql.jpg";
import firebase from "../assets/img/firebase.png";
import { Row, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container'


export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <section className = "skill" id = "skills">
            <Container>
                <Row>
                    <Col>
                        <div className = "skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Here is a list of things that I am confident in! </p>
                            <Carousel responsive = {responsive} infinite = {true} className = "skill-slider">
                                <div className = "item">
                                    <img src = {git} alt = "Image"></img>
                                    <h5>Git</h5>
                                </div>
                                <div className = "item">
                                    <img src = {java} alt = "Image"></img>
                                    <h5>Java</h5>
                                </div>
                                <div className = "item">
                                    <img src = {python} alt = "Image"></img>
                                    <h5>Python</h5>
                                </div>
                                <div className = "item">
                                    <img src = {javascript} alt = "Image"></img>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className = "item">
                                    <img src = {tailwindcss} alt = "Image"></img>
                                    <h5>Tailwind</h5>
                                </div>
                                <div className = "item">
                                    <img src = {react} alt = "Image"></img>
                                    <h5>React.JS</h5>
                                </div>
                                <div className = "item">
                                    <img src = {nodejs} alt = "Image"></img>
                                    <h5>Node.JS</h5>
                                </div>
                                <div className = "item">
                                    <img src = {vercel} alt = "Image"></img>
                                    <h5>vercel</h5>
                                </div>
                                <div className = "item">
                                    <img src = {sql} alt = "Image"></img>
                                    <h5>SQL</h5>
                                </div>
                                <div className = "item">
                                    <img src = {firebase} alt = "Image"></img>
                                    <h5>Firebase</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}