import React from "react";
import Child from "./Child";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React生命周期函数</h1>
        <Child />
      </div>
    );
  }
}
