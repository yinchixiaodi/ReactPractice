import React, { Component } from "react";
import Son from "./Son";
export default class Father extends Component {
  render() {
    return (
      <>
        <h1>今天是6月1日</h1>
        <Son />
      </>
    );
  }
}
