import React, { Component } from "react";
// import Login from "./pages/01-HOC/Login";
// import Register from "./pages/01-HOC/Register";
// import A from "./pages/02-render props/A";
// import B from "./pages/02-render props/B";
import Hooks from "./pages/03-hooks";
import context from "./pages/03-hooks/context";
export default class App extends Component {
  render() {
    return (
      <>
        {/* <Login />
        <Register /> */}
        {/* <A
          render={(count) => {
            return <B count={count} />;
          }}
        /> */}
        <context.Provider value={100}>
          <Hooks />
        </context.Provider>
      </>
    );
  }
}
