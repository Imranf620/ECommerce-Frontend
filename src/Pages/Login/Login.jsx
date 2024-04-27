import React, { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Top from '../../Components/Top/Top';
import Navbar from '../../Components/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import "./login.css";
import image from '../../assets/1.png'
import { Link } from 'react-router-dom';
const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  const toggleLogin = (e) => {
    e.preventDefault();
    setShowLogin(false);
    setShowSignup(true);
  };

  const toggleSignup = (e) => {
    e.preventDefault();
    setShowSignup(false);
    setShowLogin(true);
  };

  return (
    <>
      <Top />
      <Navbar />
      <div className="auth">
        {showLogin && (
          <div class="login-section">
            <div class="loginImg">
              <img src={image} alt="no image" />
            </div>
            <div class="loginform">
              <form>
                <p class="hedding">Create an account</p>
                <span>Enter your details below</span>
                <div class="form_group">
                  <input type="text" placeholder='Name' />
                </div>
                <div class="form_group">
                  <input type="email" placeholder='Email' />
                </div>
                <div class="form_group">
                  <input type="password" placeholder='Password' />
                </div>
                <div class="form_group">
                  <button class="login-btn">Create Account</button>
                </div>
                <div class="form_group">
                  <button class="login-btn-goole"> Signup with Google</button>
                </div>
                <p>Already have an account. &nbsp; &nbsp; <button class="link-btn" onClick={toggleLogin}>Login</button> </p>
              </form>
            </div>
          </div>
        )}
        {showSignup && (
          <div class="login-section">
            <div class="loginImg">
              <img src={image} alt="no image" />
            </div>
            <div class="loginform">
              <form>
                <p class="hedding">Log in to Exclusive</p>
                <span>Enter your details below</span>
                <div class="form_group">
                  <input type="email" placeholder='Email' />
                </div>
                <div class="form_group">
                  <input type="password" placeholder='Password' />
                </div>
                <div class="form_group">
                  <button class="login-btn-text">Login</button>
                  <button class="login-Forgot">Forgot Password</button>
                </div>
                <p>Create account. &nbsp; &nbsp; <button class="link-btn" onClick={toggleSignup}>Signup</button> </p>
              </form>
            </div>
          </div>
        )}
       
      </div>
      <Footer />
    </>
  );
};

export default Login;
