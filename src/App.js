import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import MemeTemplates from "./pages/MemeTemplates";
import Navbar from "./layouts/Navbar";
import SingleMeme from "./pages/SingleMeme";
import OwnMeme from "./pages/OwnMeme";

import { MemeProvider } from "./context/MemeContext";

import "./assets/css/App.css";
import "./assets/css/style.css";

const App = () => {
  return (
    <MemeProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/memeTemplates" component={MemeTemplates} />
          <Route path="/generateMeme/:memeId" component={SingleMeme} />
          <Route path="/ownMeme" component={OwnMeme} />
        </Switch>
      </Router>
    </MemeProvider>
  );
};

export default App;
