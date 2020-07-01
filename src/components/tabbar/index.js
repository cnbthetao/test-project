import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.less";
import '../../assets/style/reset.less'
/*
 * NavLink是激活导航    Link是跳转导航
 */
export default function TabBar() {
  const navs = [
    {
      id: 1,
      path: "/home",
      text: "首页",
      iconName: "fa-home",
    },
    {
      id: 2,
      path: "/cates",
      text: "分类",
      iconName: "fa-list-ul",
    },
    {
      id: 3,
      path: "/car",
      text: "购物车",
      iconName: "fa-shopping-cart",
    },
    {
      id: 4,
      path: "/mine",
      text: "我的",
      iconName: "fa-user-o",
    },
  ];
  return (
    <ul className="footer">
      {navs.map((item) => (
        <li key={item.id}>
          <NavLink to={item.path} activeClassName="active">
            <i className={"fa " + item.iconName}></i>
            <span> {item.text} </span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
