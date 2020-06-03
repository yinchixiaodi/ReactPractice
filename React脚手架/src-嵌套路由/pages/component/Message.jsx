import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";
export default class Message extends Component {
  push = () => {
    this.props.history.push("/home/message/3");
  };
  replace = () => {
    this.props.history.replace("/home/message/2");
  };
  goForward = () => {
    this.props.history.goForward();
  };
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <>
        <ul>
          <li>
            <Link to="/home/message/1">message1</Link>
          </li>
          <li>
            <Link to="/home/message/2">message2</Link>
          </li>
          <li>
            <Link to="/home/message/3">message3</Link>
          </li>
        </ul>
        <button onClick={this.push}>添加</button>
        <button onClick={this.replace}>替换</button>
        <button onClick={this.goForward}>前进</button>
        <button onClick={this.goBack}>后退</button>
        <Route path="/home/message/:id" component={Detail}></Route>
      </>
    );
  }
}
