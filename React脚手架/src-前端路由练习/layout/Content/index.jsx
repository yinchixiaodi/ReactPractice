import React, { Component } from "react";
import routes from "../../config/routes";
import { Route, Switch } from "react-router-dom";
export default class Content extends Component {
  renderContent = () => {
    const renderContent = [];
    routes.forEach((route) => {
      // 显示一级
      renderContent.push(
        <Route
          path={route.path}
          component={route.component}
          key={route.path}
          exact
        />
      );
      // 显示二级
      if (route.children) {
        route.children.forEach((child) => {
          renderContent.push(
            <Route
              path={child.path}
              component={child.component}
              key={child.path}
              exact
            />
          );
        });
      }
    });
    return renderContent;
  };
  render() {
    return <Switch>{this.renderContent()}</Switch>;
  }
}
