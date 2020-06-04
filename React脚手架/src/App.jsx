import React, { Component } from "react";
import context from "./pages/context";
import Action from "./pages/Action";
export default class App extends Component {
  state = {
    person: { name: "xiaohong", age: 20 },
  };
  render() {
    return (
      <>
        <h2> Context </h2>
        <context.Provider value={this.state.person}>
          <Action />
        </context.Provider>
      </>
    );
  }
}
