import React from "react";
import './Home.less'
import NoticeBar from './NoticeBar/noticebar'
import Swiper from './Swiper/swiper'
import NavList from './NavList/navlist'
import NewUser from './NewUser/newuser'
import ActivityCenter from "./ActivityCenter/ActivityCenter";
import SpecialRecommendation from './SpecialRecommendation/SpecialRecommendation'
export default class Home extends React.Component {
  render() {
    return <div className="container">
      <NoticeBar />
      <Swiper />
      <NavList />
      <NewUser />
      <ActivityCenter />
      <SpecialRecommendation />
    </div >;
  }
}