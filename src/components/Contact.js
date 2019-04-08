import React from 'react'
import {Button, Form} from 'react-bootstrap';
class Contact extends React.Component {


    render() {
        return (
            <div id="contact" className='contactUs'>
                <div className="contactContainer">
                
                <h1>Contact Us</h1>
                <div className='separator'></div>
                <Form>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Send Request
                    </Button>
                </Form>
                    
            </div>
            </div>
        )
    }
}

export default Contact;