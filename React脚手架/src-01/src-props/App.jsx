import React from "react";

import Child from "./pages/Child";
class App extends React.Component {
  state = {
    person: {
      name: "小红",
      age: 20,
      sex: "男",
    },
  };
  handelUpdate = (person) => {
    this.setState({
      person,
    });
  };
  render() {
    const { person } = this.state;
    return (
      <div>
        <h1>App组件😄</h1>
        <Child
          name={person.name}
          age={person.age}
          sex={person.sex}
          handelUpdate={this.handelUpdate}
        />
      </div>
    );
  }
}

export default App;
