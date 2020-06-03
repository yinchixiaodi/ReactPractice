import React from "react";
import Item from "../Item";
import PubSub from "pubsub-js";
import "./index.css";

export default class List extends React.Component {
  state = {
    commentList: [{ id: 1, userName: "小红", comment: "React is so..." }],
  };
  // 消息订阅
  componentDidMount() {
    PubSub.subscribe("USER_COMMENT", (msg, data) => {
      //   console.log(msg);
      //   console.log(data);
      this.setState({
        // commentList: this.state.commentList.reduce((pre, item) => {
        //   pre.push({
        //     userName: data.userName,
        //     comment: data.comment,
        //   });
        //   return pre;
        // }, []),
        commentList: [data, ...this.state.commentList],
      });
    });
  }
  // 子组件更新父组件数据调用的方法
  removeComment = (id) => {
    const { commentList } = this.state;
    this.setState({
      commentList: commentList.filter((item) => {
        return item.id !== id;
      }),
    });
  };
  render() {
    const { commentList } = this.state;
    const isShow = commentList.length > 0 ? "none" : "block";
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{ display: isShow }}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {commentList.map((item) => {
            return (
              <Item
                key={item.id}
                item={item}
                removeComment={this.removeComment}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
