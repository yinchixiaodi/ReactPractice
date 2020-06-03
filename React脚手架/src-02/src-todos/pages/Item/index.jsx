import React from "react";
import PropTypes from "prop-types";
import PubSub from "pubsub-js";
import "./item.css";
export default class Item extends React.Component {
  state = {
    display: "none",
  };
  static propTypes = {
    todo: PropTypes.object.isRequired,
    changeCompleted: PropTypes.func.isRequired,
    showDelete: PropTypes.func.isRequired,
  };
  updataCheck = (event) => {
    const { todo, changeCompleted } = this.props;
    changeCompleted(todo.id, event.target.checked);
  };
  mouseEnter = () => {
    this.setState({
      display: "block",
    });
  };
  mouseMove = () => {
    this.setState({
      display: "none",
    });
  };
  delTodo = () => {
    const { id } = this.props.todo;
    /* if (window.confirm("你确定要删除这个todo吗?")) {
      this.props.removeTodo(id);
    } */
    PubSub.publish("SENDID", id);
    console.log("publish");
    this.props.showDelete();

    // this.props.removeTodo(id);
  };
  render() {
    const { name, isCompleted } = this.props.todo;
    return (
      <li onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseMove}>
        <label>
          <input
            type="checkbox"
            onChange={this.updataCheck}
            checked={isCompleted}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: this.state.display }}
          onClick={this.delTodo}
        >
          删除
        </button>
      </li>
    );
  }
}
