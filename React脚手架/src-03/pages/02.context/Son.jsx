import React, { Component } from "react";
import personContext from "./context";
export default class Son extends Component {
  static contextType = personContext;
  handleChange = () => {
    console.log(this.context);
  };
  render() {
    const { name, age } = this.context;
    return (
      <>
        <h3 onClick={this.handleChange}>星期一</h3>
        {/* <personContext.Consumer>
          {(person) => {
            const { name, age } = person;
            return (
              <ul>
                <li>{name}</li>
                <li>{age}</li>
              </ul>
            );
          }}
        </personContext.Consumer> */}
        <ul>
          <li>{name}</li>
          <li>{age}</li>
        </ul>
      </>
    );
  }
}
