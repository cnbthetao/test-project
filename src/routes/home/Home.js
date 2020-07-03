import React from "react";
import { connect } from 'dva'
import NoticeBar from './NoticeBar/noticebar'
import Swiper from './Swiper/swiper'
import NavList from './NavList/navlist'
import NewUser from './NewUser/newuser'
import ActivityCenter from "./ActivityCenter/ActivityCenter";
import SpecialRecommendation from './SpecialRecommendation/SpecialRecommendation'
import './Home.less'
class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch({
      type: 'home/getData'
    })
  }
  render() {
    return <div className="container">
      <NoticeBar />
      <Swiper {...this.props}/>
      <NavList {...this.props}/>
      <NewUser {...this.props}/>
      <ActivityCenter {...this.props}/>
      <SpecialRecommendation {...this.props}/>
    </div >;
  }
}
export default connect(
  state => state
)(Home)