import React, { Component } from "react";

export default class A extends Component {
  state = {
    count: 1,
  };
  render() {
    return (
      <div>
        A..
        {this.props.render(this.state.count)}
      </div>
    );
  }
}
