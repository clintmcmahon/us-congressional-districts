import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Districts from './Districts';
import "mapbox-gl/dist/mapbox-gl.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import About from "./About";
function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">US Congressional District Map (2019)</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar>
      <Router>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Districts} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
