import React, { Component } from 'react'
import './navlist.less'
export default class NavList extends Component {
    state = {
        list: [
            {
                id: 1,
                text: '空调',
                imgUrl: 'https://pic.midea.cn/h5/pic/201911/5b9200fe1358.png?x-oss-process=image/format,webp/quality,Q_90&@100Q.png'
            },
            {
                id: 2,
                text: '冰箱',
                imgUrl: 'https://pic.midea.cn/h5/pic/201911/2a6fa030a146.png?x-oss-process=image/format,webp/quality,Q_90&@100Q.png'
            },
            {
                id: 3,
                text: '洗衣机',
                imgUrl: 'https://pic.midea.cn/h5/pic/201911/c777a686d5a1.png?x-oss-process=image/format,webp/quality,Q_90&@100Q.png'
            },
            {
                id: 4,
                text: '厨房小电器',
                imgUrl: 'https://pic.midea.cn/h5/pic/202003/609961fa99d1.png?x-oss-process=image/format,webp/quality,Q_90&@100Q.png'
            },
            {
                id: 5,
                text: '厨房大电器',
                imgUrl: 'https://pic.midea.cn/h5/pic/201911/35611857f825.png?x-oss-process=image/format,webp/quality,Q_90&@100Q.png'
            },
            {
                id: 6,
                text: '生活家电',
                imgUrl: 'https://pic.midea.cn/h5/pic/202003/5f0cca7e1732.png?x-oss-process=image/format,webp/quality,Q_90&@100Q.png'
            },
            {
                id: 7,
                text: '热水器/净水机',
                imgUrl: 'https://pic.midea.cn/h5/pic/201911/3ca5532032dc.png?x-oss-process=image/format,webp/quality,Q_90&@100Q.png'
            },
            {
                id: 8,
                text: '家装及配件周边',
                imgUrl: 'https://pic.midea.cn/h5/pic/202003/698efe45e8d5.png?x-oss-process=image/format,webp/quality,Q_90&@100Q.png'
            }
        ]
    }
    render() {
        const { list } = this.state
        return (
            <div className="category_wrap">
                <ul className="category_list">
                    {list.map(item => <li key={item.id}>
                        <p>{item.text}</p>
                        <img url={item.imgUrl}  />
                    </li>)}
                </ul>
            </div>
        )
    }
}
