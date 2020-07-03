import React, { useEffect, useState } from "react";
import "./index.less";
export default function Tab(props) {
  const [flag, setFlag] = useState(false);

  const [title, setTitle] = useState("首页");

  const [searchFlag, setSearchFlag] = useState(false);

  const [searchShow, setSearchShowFlag] = useState(false)
  useEffect(() => {
    const { pathname } = props.location;
    if (pathname !== "/home") {
      setFlag(true);
    } else {
      setFlag(false);
    }
  });

  useEffect(() => {
    const { pathname } = props.location;
    if (pathname == "/search") {
      setSearchShowFlag(true)
    } else {
      setSearchShowFlag(false)
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
      {
        id: 7,
        path: "/detail/*",
        text: "详情",
      }
    ];

    arr.forEach((item) => {
      if (item.path === pathname) {
        setTitle(item.text);
        return;
      }
    });
  });

  useEffect(() => {
    const { pathname } = props.location;
    if (pathname === '/home') {
      setSearchFlag(true)
    } else {
      setSearchFlag(false)
    }
  });
  if (searchShow) {
    return (
      <header style={{background:'#fff',borderBottom: '1px solid #eee'}}>
        <div className="col_left ">
          <i
            onClick={back}
            style={{ color: "#0092d8", fontSize: ".28rem" }}
            className="fa fa-angle-left"
          />
        </div>
        <div className="col_search">
          <form>
            <input type="text" placeholder="请输入要搜索的内容" ></input>
          </form>
        </div>
        <div className="col_right ">
          <button>搜索</button>
        </div>
      </header>
    )
  }
  function goSearch() {
    const { push } = props.history;
    push("/search");
  }
  function back() {
    const { goBack } = props.history;
    goBack();
  }

  function goHome() {
    const { push } = props.history;
    push("/home");
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
      {searchFlag && <i className="fa fa-search" style={{ color: '#fff', fontSize: '.2rem' }} onClick={goSearch}></i>}
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
