import React from "react";
import PropTypes from "prop-types";

export default class Child extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string,
    handelUpdate: PropTypes.func.isRequired,
  };
  //   给props设置默认值
  static defaultProps = {
    age: 22,
    sex: "女",
  };
  //   如果设置了默认值，点击的时候没传的参数的值不会改变
  update = () => {
    const person = {
      name: "zhangsan",
      age: 18,
      sex: "女",
    };
    this.props.handelUpdate(person);
  };
  render() {
    // console.log(this);
    const { name, age, sex } = this.props;
    return (
      <div>
        <h2 onClick={this.update}>Child子组件</h2>
        <ul>
          <li>姓名: {name}</li>
          <li>年龄: {age}</li>
          <li>性别: {sex}</li>
        </ul>
      </div>
    );
  }
}
