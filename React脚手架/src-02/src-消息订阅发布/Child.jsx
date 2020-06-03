import React from "react";
import PubSub from "pubsub-js";
export default class Child extends React.Component {
  // 接收消息
  componentDidMount() {
    PubSub.subscribe("RECEIVE_DATA", (msg, data) => {
      console.log(msg, data);
    });
  }
  // 取消订阅
  componentWillUnmount() {
    PubSub.unsubscribe("RECEIVE_DATA");
  }
  render() {
    return <p>消息订阅</p>;
  }
}
