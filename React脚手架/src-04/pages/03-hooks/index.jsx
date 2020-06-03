import React, { useState, useEffect, useContext, useCallback } from "react";
import PubSub from "pubsub-js";
import ReactDOM from "react-dom";
import context from "./context";

export default function Hooks() {
  const defaultValue = useContext(context);
  const [count, setCount] = useState(defaultValue);
  const [num, setNum] = useState(0);
  const handleChange1 = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const handleChange2 = () => {
    setNum(num + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleChange1}>按钮1</button>
      <br />
      <span>{num}</span>
      <br />
      <button onClick={handleChange2}>按钮2</button>
    </div>
  );
}

/* export default function Hooks() {
  const [count, setCount] = useState(0);
  const handleChange = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    //   相当于componentDidMount 和 componentDidUpdate
    console.log("useEffect--");
    setTimeout(() => {
      setCount(10);
    }, 1000);
    PubSub.subscribe("MSG", (msg, data) => {});
    // 如果需要具有componentWillUnmount功能，需要返回一个函数
    return () => {
      PubSub.unsubscribe("MSG");
    };
  }, []);
  const handlRemove = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleChange}>按钮</button>
      <button onClick={handlRemove}>卸载</button>
    </div>
  );
} */
