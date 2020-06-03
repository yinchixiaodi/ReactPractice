import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import routes from "../../config/routes";
import "./index.css";
@withRouter
class Header extends Component {
  renderChild = () => {
    /* 1. 获取当前路径location.pathname
    2. 判断routes中哪个配置匹配上当前路径
    3. 取出route.children属性，将属性中配置遍历生成二级导航链接 */
    const { pathname } = this.props.location;
    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];
      // if (route.path === pathname) {
      if (pathname.startsWith(route.path)) {
        return route.children || [];
      }
    }
    return [];
  };
  render() {
    const renderChild = this.renderChild();
    return (
      <div>
        {/* 一级导航链接 */}
        <ul>
          {routes.map((route) => {
            return (
              <li key={route.path}>
                <NavLink to={route.path}>{route.name}</NavLink>
              </li>
            );
          })}
        </ul>
        {/* 
          二级导航链接:
            坑：如果当前路径是二级导航链接，该怎么判断routes中哪个配置匹配上当前路径？  
        */}
        <ul>
          {renderChild.map((route) => {
            return (
              <li key={route.path}>
                <NavLink to={route.path}>{route.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Header;
