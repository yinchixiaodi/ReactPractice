import React from "react";

export default class App extends React.Component {
  state = {
    username: "",
    password: "",
  };

  /* changeName = (event) => {
    this.setState({
      username: event.target.value.trim(),
    });
  };
  changePassword = (event) => {
    this.setState({
      password: event.target.value.trim(),
    });
  }; */
  // 将两个获取input框中的值的函数封装成一个函数
  change = (key) => {
    return (event) => {
      this.setState({
        [key]: event.target.value.trim(),
      });
    };
  };
  login = () => {
    event.preventDefault();
    console.log(this.state.username, this.state.password);
    // 提交之后清空输入框中的值
    this.setState({
      username: "",
      password: "",
    });
  };
  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.login}>
        用户名：
        <input
          type="text"
          placeholder="请输入用户名"
          onChange={this.change("username")}
          value={username}
        />
        <br />
        密码：
        <input
          type="password"
          placeholder="请输入密码"
          onChange={this.change("password")}
          value={password}
        />
        <br />
        <button>提交</button>
      </form>
    );
  }
}
