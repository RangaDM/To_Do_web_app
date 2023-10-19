import React from "react";
import Homepage from "./Pages/Homepage";
import Navbar from "./Pages/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Welcome from "./Pages/Welcome";
import ContactUs from "./Pages/ContactUs";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Switch>
        <Route path="/welcome" component={Welcome} /> 
        <Route path="/home" component={Homepage} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/about-us" component={AboutUs} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
