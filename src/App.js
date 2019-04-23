import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/projects/" component={Projects} />
    </Router>
  );
}

export default App;
