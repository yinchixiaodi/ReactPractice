import React from "react";
import List from "./pages/List";
import AddComment from "./pages/AddComment";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <AddComment />
          <List />
        </div>
      </div>
    );
  }
}
