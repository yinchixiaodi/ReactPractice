import React, { Component } from "react";

export default function withForm(title) {
  return function (WrappedComponent) {
    // 返回一个新组件
    return class extends Component {
      state = {
        userName: "",
        password: "",
        rePassword: "",
      };
      handleData = (key) => {
        return (event) => {
          this.setState({
            [key]: event.target.value.trim(),
          });
        };
      };
      handleSubmit = (event) => {
        event.preventDefault();
        const { userName, password, rePassword } = this.state;
        console.log(userName, password, rePassword);
        this.setState({
          userName: "",
          password: "",
          rePassword: "",
        });
      };
      render() {
        const { userName, password, rePassword } = this.state;
        return (
          <>
            <h2>{title}</h2>
            <WrappedComponent
              handleData={this.handleData}
              handleSubmit={this.handleSubmit}
              userName={userName}
              password={password}
              rePassword={rePassword}
            />
          </>
        );
      }
    };
  };
}
