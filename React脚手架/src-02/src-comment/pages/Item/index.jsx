import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    removeComment: PropTypes.func.isRequired,
  };
  // 根据id删除对应的评论
  remove = () => {
    const { id } = this.props.item;
    if (window.confirm("你确定要删除这条评论吗?")) {
      this.props.removeComment(id);
    }
  };
  render() {
    const { userName, comment } = this.props.item;
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="##" onClick={this.remove}>
            删除
          </a>
        </div>
        <p className="user">
          <span>{userName}</span>
          <span>说:</span>
        </p>
        <p className="centence">{comment}</p>
      </li>
    );
  }
}
