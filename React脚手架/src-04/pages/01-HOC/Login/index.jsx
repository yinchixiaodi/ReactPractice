import React, { Component } from "react";
import withForm from "../withForm";
@withForm("登录")
class Login extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props;
    return (
      <>
        <form action="##" onSubmit={handleSubmit}>
          用户名：
          <input type="text" onChange={handleChange("userName")} />
          <br />
          密码：
          <input type="text" onChange={handleChange("password")} />
          <br />
          <button type="submit">登录</button>
          <br />
        </form>
      </>
    );
  }
}
export default Login;
