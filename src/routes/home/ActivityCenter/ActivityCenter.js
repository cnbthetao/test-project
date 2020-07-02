import React, { Component } from 'react'
import './ActivityCenter.less'
export default class ActivityCenter extends Component {
    state = {
        activityCenterImgUrl: [
            {
                id: 1,
                imgSrc: 'https://pic.midea.cn/h5/pic/202006/243515a0cdde.jpg?x-oss-process=image/format,webp/quality,Q_90&@100Q.jpg'
            },
            {
                id: 2,
                imgSrc: 'https://pic.midea.cn/h5/pic/202006/b1e0cd3d550d.png?x-oss-process=image/format,webp/quality,Q_90&@100Q.png'
            },
            {
                id: 3,
                imgSrc: 'https://pic.midea.cn/h5/pic/202006/7e170045d6c2.png?x-oss-process=image/format,webp/quality,Q_90&@100Q.png'
            },
            {
                id: 4,
                imgSrc: 'https://pic.midea.cn/h5/pic/201907/d1a45f86b3b7.png?x-oss-process=image/format,webp/quality,Q_90&@100Q.png'
            },
        ]
    }
    renderItem = () => {
        const { activityCenterImgUrl } = this.state
        return activityCenterImgUrl.map(item => <li key={item.id} style={{
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
