import React from 'react'
import { Form, Button } from 'react-bootstrap'
import Layout from '../../layouts/Layout'



const Login = (props) => {

    return (
        <div className="container">
            <div className="login">
                {/* Form */}
                <div className="LOGINPANEL">
                    <h1>MITHYA 2020 ADMIN</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;