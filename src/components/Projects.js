import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css/animate.css'
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
            title: "Trading bot",
            description: "Built in python, this trading bot can be implemented using an API key to whitelisted brokerages. It has the ability to recognize buys and sells.",
            imgUrl: projImg3,
        },
        {
            title: "someomoe",
            description:"someomoe",
            imgUrl: projImg1,
        },
        {
            title:"someomoe",
            description:"someomoe",
            imgUrl: projImg2,
        },
        {
            title:"someomoe",
            description:"someomoe",
            imgUrl:projImg3,
        },
    ];
    return (
        <section className="project" id ="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p> Here are a few of my favorite projects! </p>
                    <Tab.Container id = "project-tabs" defaultActiveKey = "first">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey = "first">Trading Bot</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Galaga-like FPS Game</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                Light and Sound Memory Game
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey = "first"> 
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key = {index}
                                                    {...project}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey = "second"> lorem ipsum</Tab.Pane>
                            <Tab.Pane eventKey = "third">lorem ipsum</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className = "background-image-right" src = {colorSharp2}></img>
        </section>
    )
}