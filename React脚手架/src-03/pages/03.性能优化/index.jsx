import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Index extends Component {
  state = {
    num: 1,
  };
  static propTypes = {
    person: PropTypes.object,
  };
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps, nextState);
    const nextStateKeys = Object.keys(nextState);
    // 遍历属性
    for (let index = 0; index < nextStateKeys.length; index++) {
      const nextStateKey = nextStateKeys[index];
      // 如果state中有这个属性，并且属性值相同，不更新，否则更新
      if (
        !this.state.hasOwnProperty(nextStateKey) ||
        this.state[nextStateKey] !== nextState[nextStateKey]
      ) {
        return true;
      }
    }
    return false;
  }
  handleClick = () => {
    this.setState({
      num: this.state.num + 1,
    });
  };
  render() {
    console.log("render()");
    return (
      <>
        <p>{this.state.num}</p>
        <button onClick={this.handleClick}>点击更新</button>
      </>
    );
  }
}
