import React, { useState } from "react";
import PubSub from "pubsub-js";
export default function Search() {
  const [searchName, setSearchName] = useState("");

  //   收集输入的数据
  const handelInput = (event) => {
    setSearchName(event.target.value.trim());
  };
  //   将收集的数据传给List组件  -> 发布数据
  const sendData = () => {
    PubSub.publish("SEND_SEARCHNAME", searchName);
    // this.setState({
    //   searchName: "",
    // });
  };
  return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          onChange={handelInput}
          value={searchName}
        />
        <button onClick={sendData}>Search</button>
      </div>
    </section>
  );
}
