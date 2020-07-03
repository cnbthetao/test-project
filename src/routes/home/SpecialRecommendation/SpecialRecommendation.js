import React, { Component } from 'react'
import { Link } from 'dva/router'
import './SpecialRecommendation.less'
export default class SpecialRecommendation extends Component {
    renderItem_top = () => {
        const data = this.props.home.ulData['topDataList']
        return data && data.map(item => <Link to='/cates'>
            <li key={item.id} className="active_box">
                <img src={item.src} />
                <div className="info">
                    <p className="desc">{item.title}</p>
                    <p className="name">{item.coupon}</p>
                </div>
            </li>
        </Link>)
    }
    renderItem_bottom = () => {
        const data = this.props.home.ulData['bottomDataList']
        return data && data.map(item => <Link to={`/detail/${item.id + 9}`}>
            <li key={item.id} className="product">
                <div className="pic">
                    <img src={item.src} />
                </div>
                <div className='info_bottom'>
                    <p className="desc_bottom">{item.introduction}</p>
                    <p className="name_bottom">{item.modelNumber}</p>
                    <p className="message">
                        <p className='price'>￥&nbsp;{item.price}</p>
                        <p className='collect'><i className="fa fa-star-o" aria-hidden="true"></i>{item.collect}</p>
                        <p className='comment'><i className="fa fa-comment-o" aria-hidden="true"></i>{item.comment}</p>
                        <p className="pageviews"><i className="fa fa-eye" aria-hidden="true"></i>{item.pageviews}</p>
                    </p>
                </div>
            </li>
        </Link>)
    }
    render() {
        return (
            <div className="special_recommand_wrap">
                <ul>
                    {this.renderItem_top()}
                </ul>
                <ul>
                    {this.renderItem_bottom()}
                </ul>
            </div>
        )
    }
}
