import { useState } from "react";
import { Row } from "react-bootstrap";



export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]:value
        })
    }

    const handleSubmit = async (e) => {    
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("https://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        })
        setButtonText("Send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({success: true, message: 'Message sent successfully'});
        } else {
            setStatus({success:false, message: 'Something went wrong, please try again later.'})
        }
    };

    return (
        <section className = "contact" id="connect">
            <Container>
                <Row className = "align-items-center">
                    <Col md={6}>
                        <img src = {contactImg} alt = "Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form>
                            <Row>
                                <Col sm={6} className = "px-1">
                                    <input type = "text" value = {formDetails.firstName} placeHolder = "First Name" onChange={(e)=> onFormUpdate('firstName', e.target.value)}></input>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}