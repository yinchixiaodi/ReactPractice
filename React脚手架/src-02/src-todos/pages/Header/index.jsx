import React from "react";
import PropTypes from "prop-types";
import "./index.css";
export default class Header extends React.Component {
  state = {
    todoName: "",
    // todo: { id: Date.now(), name: "", isCompleted: false },
  };
  static propTypes = {
    updateTodos: PropTypes.func.isRequired,
  };
  // 收集输入的数据
  handleInput = (event) => {
    this.setState({
      todoName: event.target.value.trim(),
    });
  };
  // 按下回车键，修改父组件的数据 -> props函数方法
  handleUpdateTodos = (event) => {
    const { todoName } = this.state;
    if (event.keyCode === 13) {
      // 调用父组件传过来的方法，将新收集的数据传递给父组件
      this.props.updateTodos(todoName);
    }
    // 按下回车键之后，清空输入框中的值
    this.setState({
      todoName: "",
    });
  };
  render() {
    const { todoName } = this.state;
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onChange={this.handleInput}
          onKeyDown={this.handleUpdateTodos}
          value={todoName}
        />
      </div>
    );
  }
}
