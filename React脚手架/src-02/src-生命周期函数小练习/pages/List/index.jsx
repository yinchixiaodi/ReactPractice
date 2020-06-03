import React from "react";
import Item from "../Item";
import PropTypes from "prop-types";
import "./index.css";
export default class List extends React.Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    changeCompleted: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
  };
  render() {
    const { todos, changeCompleted, removeTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          return (
            <Item
              key={todo.id}
              todo={todo}
              changeCompleted={changeCompleted}
              removeTodo={removeTodo}
            />
          );
        })}
      </ul>
    );
  }
}
