import React from "react";
import "./style.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from "../Grid";





function Contact() {
    return (


        <Container id="form1">
            <br></br>
            <br></br>
            <Form id="form1">
                <Form.Group controlId="formBasicName">
                    <Form.Label id="font">First and Last Name</Form.Label>
                    <Form.Control type="name" placeholder="ex. John Smith" />
                    <br></br>
                    <Form.Label id="font">Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="ex. (916)200-2322" />
                    <Form.Text className="text-muted" id="font">
                        Enter a number we can contact you with.
          </Form.Text>
                    <br></br>
                    <Form.Label id="font">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted" id="font">
                        We'll never share your email with anyone else.
          </Form.Text>


                </Form.Group>

                <Form.Label id="font">Message </Form.Label>
                <Form.Control type="input" placeholder="ex. I want to place an order for 300 people July 4th, is that available?" id="inputText" />
                <br></br>
                <Button variant="primary" type="submit" id="font">
                    Submit
        </Button>
            </Form>
        </Container>

    )
}
export default Contact;