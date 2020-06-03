import React, { Component } from "react";
import PropTypes from "prop-types";
export default class A extends Component {
  state = {
    count: 0,
  };
  static propTypes = {
    render: PropTypes.func.isRequired,
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
