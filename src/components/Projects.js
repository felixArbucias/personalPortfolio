import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";

import devbudDark from "../assets/img/devbudDark.png";
import devbudLight from "../assets/img/devbudLight.png";
import devbudGit from "../assets/img/devbudGit.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { useState } from "react"
import { Link } from "react-router-dom";
import { Github } from "react-bootstrap-icons";

export const Projects = () => {
    const projects = [
        {
            title: "Light and Sound Memory Game",
            description: "Built for CodePath x SalesForce finalist task.",
            imgUrl: projImg1,
        }, 
    ];
    const project2 = [
        {
            title: "Reddit Reply Bot",
            description: "Reply bot utilizing PRAW API key to reddit account; Allows user to specify a thread or post and make automated replies to specific comments containing keywords within that thread/post.",
            imgUrl: projImg1,
        },
    ];
    const project3 = [ 
        {
            title: "DevBuds",
            description: "Dark Mode Preview",
            imgUrl: devbudDark,
        },
        {
            title: "",
            description: "DevBuds is a collaborative platform where developers can get together and work on non-commercial projects. By posting project needs and applying to specific roles, users can find collaborators with matching skills to bring their ideas to life.",
            imgUrl: devbudLight,
        },
        {
            title: "",
            description: "Git Hub Preview",
            imgUrl: devbudGit,
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
                            <Nav.Link eventKey="first">Light and Sound Memory Game</Nav.Link>
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