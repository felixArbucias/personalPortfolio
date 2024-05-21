import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { useState } from "react"
export const Projects = () => {
    const projects = [
        {
            title: "Trading bot",
            description: "Built in python, this trading bot can be implemented using an API key to whitelisted brokerages. It has the ability to recognize buys and sells.",
            imgUrl: projImg3,
        },            
    ];
    const project2 = [
        {
            title: "",
            description: "",
            imgUrl: projImg2,
        },
    ];
    const project3 = [ 
        {
            title: "",
            description: "",
            imgUrl: projImg3,
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
                    <Nav variant="pills" className="nav-pills mb-5 justify-content align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Stock Trading Bot</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Reddit Reply Bot</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">DevBuds</Nav.Link>
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
                        <Tab.Pane eventKey = "second" >
                            <Row>
                                {
                                    project2.map((project, index) => {
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
                        <Tab.Pane eventKey = "third">
                            <Row>
                                {
                                    project3.map((project, index) => {
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
                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className = "background-image-right" src = {colorSharp2}></img>
    </section>
)
}