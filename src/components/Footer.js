import { Row, Col } from "./Contact"
import Container from 'react-bootstrap/Container'
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg"
import githubIcon from "../assets/img/github.svg"
import Mailchimpform from "react-mailchimp-form"
/*
npm install react-mailchimp-form
*/
export const Footer = () => {
    <footer className="footer">
        <Container>
            <row className = "align-items-center">
                <Mailchimpform />
                <col sm = {6}>
                    <img src = {logo} alt = "Logo" />
                </col>
                <col sm = {6} className = "text-center text-sm-end">
                    <div className = "social-icon">
                        <a href="https://www.linkedin.com/in/felixarbucias/"><img src={navIcon1} alt="" /></a>
                        <a href="https://github.com/felixArbucias"><img src={githubIcon} alt="" /></a>
                    </div>
                    <p>CopyRight 2022. All Right Reserved by Felix Arbucias.</p>
                </col>
            </row>
        </Container>
    </footer>
}