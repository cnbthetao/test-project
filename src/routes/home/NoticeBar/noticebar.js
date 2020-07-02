import React, { Component } from 'react'
import cn from 'classname'
import './noticebar.less'
export default class NoticeBar extends Component {
    state = {
        flag: false
    }
    showAllMsg = () => {
        this.setState({
            flag: !this.state.flag
        })
    }
    render() {
        const { flag } = this.state
        return (
            <div>
                <div className={cn({
                    massage: !flag,
                    allMsg: flag
                })} onClick={this.showAllMsg}>
                    <div className="leftIcon"></div>
                    <div className={cn({
                        midMsg: !flag,
                        showMsg: flag
                    })}>【通知】1、由于销售火爆，工厂正在积极生产备货中，6.18大促期间的订单以实际发出为准，发货时效延迟对您造成的不便，感谢理解和支持。2、受疫情管控政策影响，北京、天津、牡丹江等区域发货/配送时效有所延迟；受暴雨天气影响，广西防城港市、东兴市等区域配送时效有所延迟，敬请谅解！</div>
                    <div className="rightIcon">
                        <i className="fa fa-angle-down" aria-hidden="true" style={{ fontSize: ".18rem" }}></i>
                    </div>
                </div>
            </div>
        )
    }
}


