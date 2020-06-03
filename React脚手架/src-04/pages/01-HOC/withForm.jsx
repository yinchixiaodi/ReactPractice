import React, { Component } from "react";

export default function withForm(title) {
  return function (WrappedComponent) {
    return class extends Component {
      state = {
        userName: "",
        password: "",
        rePassword: "",
      };
      // 高阶函数
      handleChange = (key) => {
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
      };
      render() {
        return (
          <>
            <h2>{title}</h2>
            <WrappedComponent
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </>
        );
      }
    };
  };
}
