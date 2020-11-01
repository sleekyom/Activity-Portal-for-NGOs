import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../components/HomePage";
import AboutUs from "../components/Pages/AboutUs";
import BlogPost from "../components/Pages/BlogPost";
import ErrorPage from "../components/Pages/ErrorPage";
import Login from "../components/login/Login";
import {Register} from "../components/login/Register";
import { selectCurrentUser } from "../redux/user/userSelector";



export default function Routes() {


  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/about-us/history">
        <AboutUs />
      </Route>
      
      <Route path="/blogpost">
        <BlogPost />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>

      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
}
