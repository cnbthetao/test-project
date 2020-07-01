import React, { useEffect, useState } from "react";
import { Icon, NavBar } from "antd-mobile";
import "./index.less";
export default function Tab(props) {
  const [flag, setFlag] = useState(false);

  const [title, setTitle] = useState("首页");

  const [searchFlag, setSearchFlag] = useState(false);

  useEffect(() => {
    //! 监控路由
    const { pathname } = props.location;
    if (pathname !== "/home") {
      setFlag(true);
    } else {
      setFlag(false);
    }
  });

  useEffect(() => {
    const { pathname } = props.location;
    const arr = [
      {
        id: 1,
        path: "/home",
        text: "首页",
      },
      {
        id: 2,
        path: "/cates",
        text: "分类",
      },
      {
        id: 3,
        path: "/car",
        text: "购物车",
      },
      {
        id: 4,
        path: "/mine",
        text: "我的",
      },
      {
        id: 5,
        path: "/mine/login",
        text: "登录",
      },
      {
        id: 6,
        path: "/mine/reg",
        text: "注册",
      },
    ];

    arr.forEach((item) => {
      if (item.path === pathname) {
        setTitle(item.text);
        return;
      }
    });
  });

  useEffect(() => {
    // const { pathname } = props.location;
    // if (pathname === '/home'){
    //   setSearchFlag(true)
    // } else {
    //   setSearchFlag(false)
    // }
  });

  function back() {
    const { goBack } = props.history;
    goBack();
  }

  function goHome() {
    const { push } = props.history;
    push("/home");
  }

  if (searchFlag) {
    return (
      <header>
        <input />
      </header>
    );
  }

  return (
    <header>
      {flag && (
        <i
          onClick={back}
          style={{ color: "#fff", fontSize: ".28rem" }}
          className="fa fa-angle-left"
        />
      )}
      <h3> {title} </h3>
      {flag && (
        <i
          onClick={goHome}
          style={{ color: "#fff", fontSize: ".28rem" }}
          className="fa fa-ellipsis-v"
        />
      )}
    </header>
  );
}
