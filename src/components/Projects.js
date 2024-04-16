import { Col, Container, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    const projects = [
        {
            title: "someomoe",
            description: "someomoe",
            imgURL: projImg3
        },
        {
            title: "someomoe",
            description:"someomoe",
            imgURL: projImg1
        },
        {
            title:"someomoe",
            description:"someomoe",
            imgURL: projImg2
        },
        {
            title:"someomoe",
            description:"someomoe",
            imgURL:projImg3,
        },
    ];
    return (
        <section className="project" id ="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p> osief osefn sof nsfo isnoseifn foins oifnsoifn</p>
                    <Tab.Container id = "project-tabs" defaultActiveKey = "first">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey = "first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                Tab Three
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey = "first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <p>{project.title}</p>
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
        </section>
    )
}