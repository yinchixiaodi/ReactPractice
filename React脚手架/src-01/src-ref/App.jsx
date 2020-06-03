import React from "react";

class App extends React.Component {
  // 给实例对象添加属性
  inputRef = React.createRef();
  inputMessage1 = () => {
    // console.log(this.inputRef);
    const value = this.inputRef.current.value.trim();
    alert(value);
  };
  inputMessage2 = (event) => {
    // console.log(this.inputRef);
    const value = event.target.value.trim();
    alert(value);
  };
  render() {
    console.log(this);
    return (
      <div>
        <input type="text" placeholder="请输入内容" ref={this.inputRef} />
        <button onClick={this.inputMessage1}>点击提示内容</button>
        <input
          type="text"
          placeholder="取消焦点提示内容"
          onBlur={this.inputMessage2}
        />
      </div>
    );
  }
}

export default App;
