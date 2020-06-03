import React from "react";
import Header from "./pages/Header";
import List from "./pages/List";
import Footer from "./pages/Footer";
import Modal from "./pages/modal/index";
import "./App.css";
export default class App extends React.Component {
  state = {
    todos: [
      { id: 1, name: "吃饭", isCompleted: false },
      { id: 2, name: "看书", isCompleted: false },
    ],
    title: "删除Todo",
    content: "你确定要删除这个todo吗?",
    visible: false,
  };
  id = 3;
  updateTodos = (name) => {
    const todos = this.state.todos;
    this.setState({
      todos: [{ id: this.id++, name, isCompleted: false }, ...todos],
    });
  };
  // 点击item的选中状态时需要调用的回调函数
  changeCompleted = (id, isCompleted) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            name: todo.name,
            isCompleted,
          };
        }
        return todo;
      }),
    });
  };
  // 改变footer组件的选中
  changAllcheckbox = (isCompleted) => {
    // 将todos里面的所有的选中状态修改成和footer组件一样
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        return {
          id: todo.id,
          name: todo.name,
          isCompleted,
        };
      }),
    });
  };
  // 显示是否删除框
  showDelete = () => {
    this.setState({
      visible: true,
    });
  };
  hindDelete = () => {
    this.setState({
      visible: false,
    });
  };
  // 删除某一个todo
  removeTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => {
        return todo.id !== id;
      }),
    });
    // this.setState({});
  };
  // 删除所有选中的todo
  removeAll = () => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => {
        return !todo.isCompleted;
      }),
    });
  };
  // 取消删除
  changeVisible = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const { todos, title, content, visible } = this.state;
    const allLength = todos.length;
    const completedLength = todos.reduce((pre, todo) => {
      // console.log(pre, todo);
      return pre + (todo.isCompleted ? 1 : 0);
    }, 0);
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header updateTodos={this.updateTodos} />
          <List
            todos={todos}
            changeCompleted={this.changeCompleted}
            showDelete={this.showDelete}
          />
          <Footer
            allLength={allLength}
            completedLength={completedLength}
            changAllcheckbox={this.changAllcheckbox}
            removeAll={this.removeAll}
            showDelete={this.showDelete}
          />
          <Modal
            title={title}
            content={content}
            visible={visible}
            changeVisible={this.changeVisible}
            removeTodo={this.removeTodo}
            hindDelete={this.hindDelete}
            removeAll={this.removeAll}
          />
        </div>
      </div>
    );
  }
}
