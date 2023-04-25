import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

import { Fragment } from "react";
import React,
{ useState, useContext } from "react";

import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import axios from "axios";
//import UserContext from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import { AppContext } from "/src/utils/context";
const Login = (props) => {
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
          <a href={"signup"}>
            <p className="text-xs page-change">Sign up</p>
          </a>
          <div className="login-info-box">
            <h2 className="text-xl login-title">Sign In</h2>
            
            <p>Sign in below to save your work.</p>
          </div>
          <div className="provider-container">
            <button className="provider">Continue with Google</button>
            <button className="provider">Continue with Github</button>
          </div>
          {/* <hr /> */}
          <Form onSubmit={handleSubmit}>
          <p className="text-xs credentials-info">Sign in using credentials</p>
          <input className="login-form-input" placeholder="Enter Email" />
          <input className="login-form-input" placeholder="Enter Password" />
          <button className="text-sm sign-button">Sign in</button>
          </Form>
        </div>
      </main>
      </Card.Body>
    </Card>
    </Fragment>
  );
};

export default Login;
