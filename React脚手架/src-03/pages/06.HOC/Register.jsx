import React, { Component } from "react";
import withForm from "./withForm";
@withForm("注册")
class Register extends Component {
  //   state = {
  //     userName: "",
  //     password: "",
  //     rePassword: "",
  //   };

  render() {
    const {
      handleData,
      handleSubmit,
      userName,
      password,
      rePassword,
    } = this.props;
    return (
      <>
        <form action="##" onSubmit={handleSubmit}>
          用户名：
          <input
            type="text"
            onChange={handleData("userName")}
            value={userName}
          />
          <br />
          密码：
          <input
            type="password"
            onChange={handleData("password")}
            value={password}
          />
          <br />
          确认密码：
          <input
            type="password"
            onChange={handleData("rePassword")}
            value={rePassword}
          />
          <br />
          <button type="submit">登录</button>
          <br />
        </form>
      </>
    );
  }
}

// export default withForm("注册")(Register);
export default Register;
