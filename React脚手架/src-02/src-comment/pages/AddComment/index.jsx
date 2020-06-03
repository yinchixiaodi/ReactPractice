import React, { Component } from "react";
import PubSub from "pubsub-js";
export default class addComment extends Component {
  state = {
    userName: "",
    comment: "",
  };
  // 收集用户的用户名和评论内容
  handleUserName = (event) => {
    this.setState({
      userName: event.target.value.trim(),
    });
  };
  handleComment = (event) => {
    this.setState({
      comment: event.target.value.trim(),
    });
  };
  // 点击提交给List组件传递数据
  sendData = (event) => {
    // 清除默认事件
    event.preventDefault();
    const { userName, comment } = this.state;
    // 消息发布
    PubSub.publish("USER_COMMENT", { id: Date.now(), userName, comment });
    // 提交之后，清空用户名和评论信息
    this.setState({
      userName: "",
      comment: "",
    });
  };
  render() {
    const { userName, comment } = this.state;
    return (
      <div className="col-md-4">
        <form className="form-horizontal" onSubmit={this.sendData}>
          <div className="form-group">
            <label>用户名</label>
            <input
              type="text"
              className="form-control"
              placeholder="用户名"
              onChange={this.handleUserName}
              value={userName}
            />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea
              className="form-control"
              rows="6"
              placeholder="评论内容"
              onChange={this.handleComment}
              value={comment}
            ></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default pull-right">
                提交
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
