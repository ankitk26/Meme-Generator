import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/layouts/Home";
import MemeTemplates from "./components/memeTemplates/MemeTemplates";
import Navbar from "./components/layouts/Navbar";
import SingleMeme from "./components/singleMeme/SingleMeme";
import OwnMeme from "./components/customMeme/OwnMeme";
import { MemeProvider } from "./components/context/MemeContext";
import "./css/App.css";
import "./css/style.css";

function App() {
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
}

export default App;
