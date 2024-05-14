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
    const onFormUpdate = (category, value0) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

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
                                <Col sm={6} className = "px-1">
                                    <input type = "text" value = {formDetails.lastName} placeHolder = "Last Name" onChange={(e)=> onFormUpdate('lastName', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className = "px-1">
                                    <input type = "email" value = {formDetails.email} placeHolder = "Email Address" onChange={(e)=> onFormUpdate('email', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className = "px-1">
                                    <input type = "tel" value = {formDetails.phone} placeHolder = "Phone Number" onChange={(e)=> onFormUpdate('phone', e.target.value)}></input>
                                </Col>
                                <Col>
                                    <textarea row = "6" value = {formDetails.message} placeholder="Message" onChange={(e)=> onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col> 
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}