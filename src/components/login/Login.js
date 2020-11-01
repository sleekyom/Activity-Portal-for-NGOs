import React, { Component } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { createStructuredSelector } from "reselect";
import { FiFacebook } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import './login.css'
import { selectCurrentUser } from '../../redux/user/userSelector';
import { googleSignInStart } from '../../redux/user/userActions';





const Login = () => {
    const { currentUser } = useSelector(
      createStructuredSelector({
        currentUser: selectCurrentUser,
      })
    );

     const dispatch = useDispatch();
     const loginWithGoogle = () => dispatch(googleSignInStart());

    console.log(currentUser);
    
  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src="#" alt="" />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username </label>
            <input type="text" placeholder="Username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password </label>
            <input type="password" placeholder="Password" name="password" />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn">
          Login
        </button>
      </div>

      <div className="social-media-login">
        <FiFacebook size={44} color={"#232a33"} style={{ cursor: "pointer" }} />
        <FaGoogle
          size={44}
          color={"red"}
          style={{ cursor: "pointer" }}
          onClick={loginWithGoogle}
        />
      </div>
    </div>
  );
}
export default Login