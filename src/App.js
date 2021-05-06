import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MemeProvider } from "./context/MemeContext";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import MemeTemplates from "./pages/MemeTemplates";
import OwnMeme from "./pages/OwnMeme";
import SingleMeme from "./pages/SingleMeme";

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
