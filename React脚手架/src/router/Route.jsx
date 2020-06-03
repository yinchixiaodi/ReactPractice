import React, { Component } from "react";
// import { matchPath } from "react-router";
import context from "./context";
function matchPath(pathname, props) {
  const { path, exact } = props;
  // 定义是否匹配上路径的标识
  let match = false;
  // 如果是严格匹配，pathname和path必须相等
  if (exact) {
    if (pathname === path) {
      match = true;
    }
  } else {
    // 如果是模糊匹配，只需要判断是否以path开头即可
    if (pathname.startsWith(path)) {
      match = true;
    }
  }
  return match;
}
export default class Route extends Component {
  render() {
    return (
      <context.Consumer>
        {(context) => {
          const { pathname } = context.location;
          const match = matchPath(pathname, this.props);
          if (!match) return null;
          return React.createElement(this.props.component, context);
        }}
      </context.Consumer>
    );
  }
}
