import './App.css';
import Home from './components/Home';
import Projects from "./components/Projects";
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      {/*All our Routes goes here!*/}
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
    </Router>
  );
}

export default App;
