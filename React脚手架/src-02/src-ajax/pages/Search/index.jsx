import React from "react";
import PubSub from "pubsub-js";
export default class Search extends React.Component {
  state = {
    searchName: "",
  };
  //   收集输入的数据
  handelInput = (event) => {
    this.setState({
      searchName: event.target.value.trim(),
    });
  };
  //   将收集的数据传给List组件  -> 发布数据
  sendData = () => {
    PubSub.publish("SEND_SEARCHNAME", this.state.searchName);
    // this.setState({
    //   searchName: "",
    // });
  };
  render() {
    const { searchName } = this.state;
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="enter the name you search"
            onChange={this.handelInput}
            value={searchName}
          />
          <button onClick={this.sendData}>Search</button>
        </div>
      </section>
    );
  }
}
