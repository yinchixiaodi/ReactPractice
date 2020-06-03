import React, { Component } from "react";
import { createBrowserHistory } from "history";
import context from "./context";
const history = createBrowserHistory();
export default class BrowserRouter extends Component {
  state = {
    location: history.location,
  };
  componentDidMount() {
    const unlisten = history.listen((location) => {
      // this.setState({});
      this.setState({ location });
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }
  render() {
    return (
      <context.Provider
        value={{ history, location: this.state.location, match: {} }}
      >
        {/* 子组件 */}
        {this.props.children}
      </context.Provider>
    );
  }
}
