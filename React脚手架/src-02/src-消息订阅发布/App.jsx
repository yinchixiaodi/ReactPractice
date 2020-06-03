import React from "react";
import Child from "./Child";
import PubSub from "pubsub-js";
export default class App extends React.Component {
  handleSend = () => {
    console.log("消息发布111");
    // 消息发布
    PubSub.publish("RECEIVE_DATA", "加油!!!");
  };
  render() {
    return (
      <div>
        <h1>React生命周期函数</h1>
        <button onClick={this.handleSend}>点击按钮向子组件发送数据</button>
        <Child />
      </div>
    );
  }
}
