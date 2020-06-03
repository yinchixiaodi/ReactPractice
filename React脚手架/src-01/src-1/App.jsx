import React from "react";
import ClassComp from "./pages/ClassComp";
import FuncComp from "./pages/FuncComp";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ClassComp />
        <FuncComp />
      </div>
    );
  }
}
