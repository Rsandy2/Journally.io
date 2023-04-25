import { Fragment } from "react";
//import { Link } from "react-router-dom";
import React,
{ useState, useContext } from "react";

import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import axios from "axios";
//import UserContext from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
//import { AppContextProvider } from "/src/components/AppContextProvider";
import { AppContext } from "/src/utils/context";


import "../Login.css";
const Signup = (props) => {
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [error, setError] = useState();
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const { setUserData } = useContext (AppContext) ;
  return (
    <Fragment>
      <Card>
        <Card.Body>
      <main className="login-layout-flow">
        <div className="login-wrapper">
          <a href={"/login"}>
            <p className="text-xs page-change">Login</p>
          </a>
          <div className="login-info-box">
            <h2 className="text-xl login-title">Sign Up</h2>
            <p>Sign up below to save your work.</p>
          </div>
          <div className="provider-container">
            <button className="provider">Continue with Google</button>
            <button className="provider">Continue with Github</button>
          </div>
          {/* <hr /> */}
          <Form onSubmit={handleSubmit}>
          <p className="text-xs credentials-info">Sign in using credentials</p>
            <Form.Group id = "email">
              <input className="login-form-input" placeholder="Enter Email" type="email" required onChange={e=>setEmail(e.target.value)}/>
              console.log("email: "+email);
            </Form.Group>
            <Form.Group id = "password">
              <input className="login-form-input" placeholder="Enter Password" type="password" required onChange={e=>setPassword(e.target.value)}/>
              console.log("password: "+password);

            </Form.Group>
          
          <button className="text-sm sign-button">Sign in</button>
          </Form>
        </div>
      </main>
      </Card.Body>
    </Card>
    </Fragment>
  );
};

export default Signup;
