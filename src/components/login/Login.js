import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { FiFacebook } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import "./login.css";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { googleSignInStart } from "../../redux/user/userActions";

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
      <div className="social-media-login">
        <h1>Login with Google</h1>
        <FaGoogle
          size={44}
          color={"#232a33"}
          style={{ cursor: "pointer" }}
          onClick={loginWithGoogle}
        />
      </div>
    </div>
  );
};
export default Login;
