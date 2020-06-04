import React, { Component } from "react";
import context from "./context";
export default class Child extends Component {
  static contextType = context;
  handleChange = () => {
    console.log(this.context);
  };
  render() {
    return (
      <>
        <h3 onClick={this.handleChange}>Child...</h3>
        <context.Consumer>
          {(context) => {
            const { name, age } = context;
            return (
              <ul>
                <li>姓名：{name}</li>
                <li>年龄：{age}</li>
              </ul>
            );
          }}
        </context.Consumer>
      </>
    );
  }
}
