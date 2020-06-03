import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import PubSub from "pubsub-js";

import "./index.css";
export default class Modal extends Component {
  constructor() {
    super();
    this.div = document.createElement("div");
  }
  state = {};
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    changeVisible: PropTypes.func.isRequired,
    removeTodo: PropTypes.func,
    hindDelete: PropTypes.func,
    removeAll: PropTypes.func,
  };
  componentDidMount() {
    PubSub.subscribe("SENDID", (msg, data) => {
      console.log("subscribes", data);
      this.setState({
        id: data,
      });
    });
    document.body.appendChild(this.div);
  }
  removeSuccess = () => {
    // 删除当前todo
    if (!this.state.id) {
      this.props.removeAll();
    } else {
      this.props.removeTodo(this.state.id);
    }
    this.props.hindDelete();
  };
  handelBack = () => {
    this.props.changeVisible();
  };

  componentWillUnmount() {
    //   组件卸载，清除多余元素
    this.div.remove();
  }
  render() {
    const { title, content, visible } = this.props;
    const Modal = (
      <div className="modal" style={{ display: visible ? "block" : "none" }}>
        <div className="modal-wrap">
          <div className="modal-wrap-header">
            <h3>{title}</h3>
            <button onClick={this.handelBack}>X</button>
          </div>
          <div className="modal-wrap-center">{content}</div>
          <div className="modal-wrap-footer">
            <button onClick={this.handelBack} style={{ marginRight: 10 }}>
              取消
            </button>
            <button onClick={this.removeSuccess}>确定</button>
          </div>
        </div>
        <div className="modal-mask"></div>
      </div>
    );
    return ReactDOM.createPortal(Modal, this.div);
  }
}
