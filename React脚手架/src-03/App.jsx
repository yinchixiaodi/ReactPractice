import React, { Component, Fragment } from "react";
// import FragmentDemo from "./pages/01.Fragment";
// import personContext from "./pages/02.context/context";
// import Father from "./pages/02.context/Father";
// import Index from "./pages/03.性能优化";
// import Modal from "./pages/05.modal";
// import Login from "./pages/HOC/Login";
// import Register from "./pages/HOC/Register";
import A from "./pages/07.render props/A";
import B from "./pages/07.render props/B";
export default class App extends Component {
  state = {
    // person: { name: "xiaohong", age: 20 },
    title: "Title",
    content: "今天是6月1日",
    visible: false,
  };
  changeVisible = () => {
    this.setState({
      visible: false,
    });
  };
  show = () => {
    this.setState({
      visible: true,
    });
  };
  render() {
    const { title, content, visible } = this.state;
    return (
      <>
        {/* <Fragment>
              <personContext.Provider value={this.state.person}>
                <Father />
              </personContext.Provider>
            </Fragment> */}

        {/* <Index person={this.state.person} /> */}

        {/* <button onClick={this.show}>按钮</button>
        <Modal
          title={title}
          content={content}
          visible={visible}
          changeVisible={this.changeVisible}
        /> */}
        {/* <Login />
        <Register /> */}
        <A
          render={(count) => {
            return <B count={count} />;
          }}
        />
      </>
    );
  }
}
