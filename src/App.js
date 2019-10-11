import React from 'react';
import './App.css';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {FacebookLoginButton} from "react-social-login-buttons";
import {GoogleLoginButton} from "react-social-login-buttons";
import {GithubLoginButton} from "react-social-login-buttons";
import {AmazonLoginButton} from "react-social-login-buttons";

function App() {
    return (
        <form className="login-form">
            <h1>
                <span>siypatha</span>.com
            </h1>
            <h2 className="text-center">welcome</h2>
            <FormGroup>
                <Label>Email</Label>
                <Input type="email" placeholder="Email"/>
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type="password" placeholder="Password"/>
            </FormGroup>
          <Button className="btn-lg btn-dark btn-block">Log in</Button>
          <div className="text-center pt-3">
            Or continue with your social media
          </div>
          <FacebookLoginButton className="mt-3 mb-3"/>
          <div className="text-center">
            <a href="/sign-up">Sign Up</a>
            <span className="p-2">|</span>
            <a href="/forgot-password">Forgot Password</a>
          </div>
        </form>
    );
}

export default App;
