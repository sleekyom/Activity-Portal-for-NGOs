import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Routes from "./utils/Routes";
import Footer from "./components/Footer";
import { checkUserSession } from "./redux/user/userActions";

function App() {
  const dispatch = useDispatch();
  const checkSession = () => dispatch(checkUserSession());

  useEffect(() => {
    checkSession();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
