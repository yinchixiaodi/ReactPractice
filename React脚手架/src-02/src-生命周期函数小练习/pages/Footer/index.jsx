import React from "react";
import PropTypes from "prop-types";
import "./footer.css";
export default class Footer extends React.Component {
  static propTypes = {
    completedLength: PropTypes.number.isRequired,
    allLength: PropTypes.number.isRequired,
    changAllcheckbox: PropTypes.func.isRequired,
    removeAll: PropTypes.func.isRequired,
  };
  update = (event) => {
    // 获取当前的选中状态?
    this.props.changAllcheckbox(event.target.checked);
  };
  delChecked = () => {
    if (window.confirm("确定要删除所有选中的todo吗?")) {
      this.props.removeAll();
    }
  };
  render() {
    const { allLength, completedLength } = this.props;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.update}
            checked={allLength === completedLength}
          />
        </label>
        <span>
          <span>已完成{completedLength}</span> / 全部{allLength}
        </span>
        <button className="btn btn-danger" onClick={this.delChecked}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
