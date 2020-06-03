import React, { Component } from "react";
import withForm from "./withForm";
@withForm("登录")
class Login extends Component {
  //   state = {
  //     userName: "",
  //     password: "",
  //   };
  //   handleData = (key) => {
  //     return (event) => {
  //       this.setState({
  //         [key]: event.target.value.trim(),
  //       });
  //     };
  //   };
  //   handleSubmit = (event) => {
  //     event.preventDefault();
  //     const { userName, password } = this.state;
  //     console.log(userName, password);
  //     this.setState({
  //       userName: "",
  //       password: "",
  //     });
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
          <button type="submit">登录</button>
          <br />
        </form>
      </>
    );
  }
}

// export default withForm("登录")(Login);
export default Login;
