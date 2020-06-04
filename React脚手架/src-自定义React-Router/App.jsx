import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "./router";
//引入官方
import About from "./pages/About";
import Home from "./pages/Home";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/home"> Home </Link>
          </li>
        </ul>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </BrowserRouter>
    );
  }
}
