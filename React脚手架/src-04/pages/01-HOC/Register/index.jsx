import React, { Component } from "react";
import withForm from "../withForm";
@withForm("注册")
class Register extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props;
    return (
      <>
        <form action="##" onSubmit={handleSubmit}>
          用户名：
          <input type="text" onChange={handleChange("userName")} />
          <br />
          密码：
          <input type="password" onChange={handleChange("password")} />
          <br />
          确认密码：
          <input type="password" onChange={handleChange("rePassword")} />
          <br />
          <button type="submit">注册</button>
        </form>
      </>
    );
  }
}
export default Register;
