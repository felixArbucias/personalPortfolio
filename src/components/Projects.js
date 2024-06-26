import { Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Container from "react-bootstrap/Container";


import devbudDark from "../assets/img/devbudDark.png";
import devbudLight from "../assets/img/devbudLight.png";
import devbudGit from "../assets/img/devbudGit.png";
import eTracker from "../assets/img/expensetracker.png";
import memGame1 from "../assets/img/memoryGame1.png";
import memGame2 from "../assets/img/MemoryGame2.png"
import memGameGit from "../assets/img/memoryGameGit.png";

import redditReply from "../assets/img/redditReply.png";

import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
    const project3 = [
        {
            title: "Light and Sound Memory Game",
            description: "Built for CodePath x SalesForce finalist task.",
            imgUrl: memGame1,
        }, 
        {
            title: "",
            description: "Game plays a variety of sounds and flashes button being pressed. User must repeat the sequence to win.",
            imgUrl: memGame2,
        }, 
        {
            title: "",
            description: "GitHub Preview",
            imgUrl: memGameGit,
        }, 
    ];
    const project2 = [
        {
            title: "Expense Tracker",
            description: "Built an expense tracker using VueJSgit  & Composition API",
            imgUrl: eTracker,
        },
    ];
    const project1 = [ 
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
                            <Nav.Link eventKey="first">DevBuds</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Expense Tracker</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Memory Game</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey = "first"> 
                            <Row>
                                {
                                    project1.map((project, index) => {
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
