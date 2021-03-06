import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Routes from "./utils/Routes";
import Footer from "./components/Footer";
import { checkUserSession } from "./redux/user/userActions";

function App() {
  const dispatch = useDispatch();
  const checkSession = () => dispatch(checkUserSession());
  const [currentLink, setCurrentLink] = useState("/");

  useEffect(() => {
    checkSession();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Header setCurrentLink={setCurrentLink} />
      <Routes currentLink={currentLink} />
      <Footer />
    </div>
  );
}

export default App;
