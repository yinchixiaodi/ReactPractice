import React, { useState, useEffect } from "react";
import PubSub from "pubsub-js";
import axios from "axios";
import "./index.css";
export default function List() {
  const [isFirstView, setIsFirstView] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    // 接收数据
    PubSub.subscribe("SEND_SEARCHNAME", (msg, searchName) => {
      //   console.log(data);
      //   请求结果出来之前，页面显示List
      setIsFirstView(false);
      setIsLoading(true);
      //   发送ajax请求
      axios
        .get("http://localhost:9527/api/search/users", {
          params: { q: searchName },
        })
        .then((response) => {
          // 请求成功
          setIsLoading(false);
          const data = response.data.items.map((user) => {
            return {
              id: user.id,
              login: user.login,
              avatar_url: user.avatar_url,
              html_url: user.html_url,
            };
          });
          setUsers(data);
        })
        .catch((error) => {
          //   请求失败
          setUsers(null);
          setIsLoading(false);
          setError("请求出问题啦！！！");
        });
    });
  }, []);

  if (isFirstView) {
    return <h1>搜索用户</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (users) {
    return (
      <div className="row">
        {users.map((user) => {
          return (
            <div className="card" key={user.id}>
              <a href={user.html_url} target="_blank">
                <img src={user.avatar_url} style={{ width: 100 }} />
              </a>
              <p className="card-text">{user.login}</p>
            </div>
          );
        })}
      </div>
    );
  }
  return <h1>{error}</h1>;
}
