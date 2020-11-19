import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../components/Pages/HomePage";
import SuggestionForm from "../components/Pages/SuggestionForm";
import History from "../components/Pages/History";
import BlogPost from "../components/Pages/BlogPost";
import Stakeholders from "../components/Pages/Stakeholders";
import ErrorPage from "../components/Pages/ErrorPage";
import PastProjects from "../components/Pages/PastProjects";
import OngoingProject from "../components/Pages/OngoingProject";
import ContactUs from "../components/Pages/ContactUs";
import Donation from "../components/Pages/Donation";
import UpcomingProjects from "../components/Pages/UpcomingProjects";
import Login from "../components/login/Login";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Register } from "../components/login/Register";
import { selectCurrentUser } from "../redux/user/userSelector";

export default function Routes({ currentLink }) {
  const { currentUser } = useSelector(
    createStructuredSelector({
      currentUser: selectCurrentUser,
    })
  );

  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      {/* Blog */}
      <Route path="/blogpost">
        <BlogPost />
      </Route>
      {/* About - Us */}
      <Route path="/about-us/history">
        <History />
      </Route>
      <Route path="/about-us/stakeholders">
        <Stakeholders />
      </Route>

      {/* Projects */}
      <Route path="/projects/past-projects">
        <PastProjects />
      </Route>
      <Route path="/projects/ongoing-projects">
        <OngoingProject />
      </Route>
      <Route path="/projects/upcoming-projects">
        <UpcomingProjects />
      </Route>

      {/* Contact - us */}
      {/* <Route path="/contactus">
        <ContactUs />
      </Route> */}

      {/* Donation Page*/}
      <Route
        path="/donation"
        render={(props) =>
          !currentUser ? <Redirect to="/login" /> : <Donation {...props} />
        }
      />

      {/* Suggestion Page */}
      <Route
        path="/suggestionform"
        render={(props) =>
          !currentUser ? (
            <Redirect to="/login" />
          ) : (
            <SuggestionForm {...props} />
          )
        }
      />

      {/* Login Page */}
      <Route
        path="/login"
        render={(props) =>
          currentUser ? <Redirect to={currentLink} /> : <Login {...props} />
        }
      />

      {/* Register */}
      {/* <Route
        path="/register"
        render={(props) =>
          currentUser ? <Redirect to={currentLink} /> : <Register {...props} />
        }
      /> */}

      {/* Error Page */}
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
}
