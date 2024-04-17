import react from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Web Design", "UI/UX Designer"];
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300-Math.random() * 100);
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)
        return () => {clearInterval(ticker)}
    }, [text])
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }
        if (!delta && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className = "banner" id = "home">
            <Container>
                <Row className = "align-items-center">
                    <Col xs = {12} md = {6} xl = {7}>
                        <Span className = "tagline">Welcome to my Portfolio</Span>
                        <h1>'Hi I'm webdecoded '<span className = "wrap">{text}</span></h1>
                        <p> PUT ABOUT YOURSELF HERE ie powerlifting computer science, etc </p>
                        <button onClick={() => console.log('connect')}> Let's connect </button>
                    </Col>
                    <Col xs = {12} md = {6} xl = {5}>
                        <img src = {headerImg} alt = "Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}