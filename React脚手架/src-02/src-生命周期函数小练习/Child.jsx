import React from "react";
import ReactDOM from "react-dom";
export default class Child extends React.Component {
  state = {
    opacity: 1,
  };
  componentDidMount() {
    //   设置定时器，循环更新h2中内容的透明度
    this.timer = setInterval(() => {
      let { opacity } = this.state;
      opacity -= 0.01;
      if (opacity <= 0) {
        opacity = 1;
      }
      this.setState({
        opacity,
      });
    }, 1000 / 60);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  remove = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };
  render() {
    const { opacity } = this.state;
    return (
      <div>
        <h2 style={{ opacity: opacity }}>加油努力好好学React</h2>
        <button onClick={this.remove}>好的</button>
      </div>
    );
  }
}
