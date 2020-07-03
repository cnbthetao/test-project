import React, { Component } from 'react'
import './ActivityCenter.less'
export default class ActivityCenter extends Component {
    renderItem = () => {
        const data = this.props.home.ulData['ActivityCenterList']
        return data && data.map(item => <li key={item.id} style={{
            width: '50%',
            height: 'auto'
        }}><img src={item.imgSrc} style={{
            padding: '0',
            margin: '0',
            display: 'block',
            width: '100%',
            height: 'auto'
        }} /></li>)
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.renderItem()
                    }
                </ul>
            </div>
        )
    }
}
