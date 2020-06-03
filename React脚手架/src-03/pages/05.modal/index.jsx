import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./index.css";
export default class Modal extends Component {
  constructor() {
    super();
    this.div = document.createElement("div");
  }
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    changeVisible: PropTypes.func.isRequired,
  };
  handelBack = () => {
    this.props.changeVisible();
  };
  componentDidMount() {
    document.body.appendChild(this.div);
  }
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
            <button>确定</button>
          </div>
        </div>
        <div className="modal-mask"></div>
      </div>
    );
    return ReactDOM.createPortal(Modal, this.div);
  }
}
