import React, { useContext, useCallback, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { AuthContext } from "../../context/auth";
import { withRouter, Redirect } from "react-router";
import app from '../../firestore'



const Login = ({ history }) => {


    const { currentUser } = useContext(AuthContext);
    const [usernameField, setUsernameField] = useState('');
    const [passwordField, setPasswordField] = useState('');


    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(usernameField, passwordField);
                history.push("/home");
            } catch (error) {
                alert(error);
            }
        },
        [history, usernameField, passwordField]
    );

    if (currentUser) {
        return <Redirect to="/home" />;
      }

    return (
        <div className="container">
            <div className="login">
                {/* Form */}
                <div className="LOGINPANEL">
                    <h1>MITHYA 2020 ADMIN</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control value={usernameField} onChange={(event)=>{setUsernameField(event.target.value)}} type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={passwordField} onChange={(event)=>{setPasswordField(event.target.value)}} type="password" placeholder="Password" />
                        </Form.Group>

                        <Button onClick={handleLogin} type='submit' variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Login);