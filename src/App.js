import About from "./About";

import Navbar from "./Navbar";
import Projects from "./Projects";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import ProjectDetails from "./ProjectDetails";
import Vectors from "./Vectors";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/project/:id">
          <ProjectDetails />
        </Route>
        <Route path="/vectors">
          <Vectors />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
