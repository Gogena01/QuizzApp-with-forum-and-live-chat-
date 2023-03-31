import {
    signInWithGoogle,
    signInWithEmailAndPassword,
} from "./base.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import React, { useState } from "react";

import "./login.css";

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    return (
        <>
            <div className="col col-2"></div>
            <div className="col col-8">
                <div className="row">
                    <div className="col col-6">
                        <Card id="loginCard">
                            <Card.Body id="loginCardBody">
                                <Card.Title>Sing in</Card.Title>
                                <div>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            value={loginEmail}
                                            onChange={(e) => setLoginEmail(e.target.value)}
                                        />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            value={loginPassword}
                                            onChange={(e) => setLoginPassword(e.target.value)}
                                        />
                                    </Form.Group>
                                    <hr style={{ margin: "5%" }} />

                                    <div className="d-grid gap-2">
                                        <Button
                                            variant="outline-success"
                                            type="submit"
                                            onClick={() => {
                                                signInWithEmailAndPassword(loginEmail, loginPassword);
                                            }}
                                        >
                                            Login
                                        </Button>
                                        <Button
                                            id="loginBtn"
                                            variant="outline-primary"
                                            onClick={signInWithGoogle}
                                        >
                                            <i className="fab fa-google"></i>Sign-in with Goolge
                                        </Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-col-2"></div>
                </div>
            </div>
        </>
    );
};

export default Login;