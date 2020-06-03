import React from "react";

class App extends React.Component {
  // 设置属性
  /* state = {
    isLikeMe: false,
  }; */
  constructor() {
    super();
    this.state = {
      isLikeMe: false,
    };
  }
  handle = () => {
    const { isLikeMe } = this.state;
    // 更新用户界面的方法
    this.setState({
      isLikeMe: !isLikeMe,
    });
  };
  render() {
    //   读取 isLikeMe
    const { isLikeMe } = this.state;
    return <h1 onClick={this.handle}>{isLikeMe ? "你喜欢我" : "我喜欢你"}</h1>;
  }
}

export default App;
