import React, { Component } from 'react'
import './SpecialRecommendation.less'
export default class SpecialRecommendation extends Component {
    state = {
        topData: [
            {
                id: 1,
                src: 'https://pic.midea.cn/h5/pic/202006/d1784dce0d9a.jpg?x-oss-process=image/format,webp/quality,Q_90&@100Q.jpg',
                title: '美的智能家电专区',
                coupon: '领券直减150元'
            }
        ],
        bottomData: [
            {
                id: 1,
                src: 'https://pic.midea.cn/h5/pic/201912/769dff30acc7.png?x-oss-process=image/format,webp/quality,Q_90&@100Q.png',
                introduction: '快速冷暖变频空调 智能WIFI',
                modelNumber: '家用空调套机KFR-26GW/WCBN8A3@',
                price: '1899.00',
                pageviews: '47万',
                comment: '919',
                collect: '583'
            },
            {
                id: 2,
                src: 'https://pic.midea.cn/h5/pic/202005/c71df6511a7e.png?x-oss-process=image/format,webp/quality,Q_90&@100Q.png',
                introduction: '直驱电机 洗烘一体 WIFI智控',
                modelNumber: '洗衣机MD100VT717WDY5',
                price: '4099.00',
                pageviews: '8万',
                comment: '90',
                collect: '172'
            },
            {
                id: 3,
                src: 'https://pic.midea.cn/h5/pic/202007/ecbbf03016f2.jpg?x-oss-process=image/format,webp/quality,Q_90&@100Q.jpg',
                introduction: '扫地机器人 M7 LDS激光导航 扫拖一体',
                modelNumber: '扫地机器人M7',
                price: '1499.00',
                pageviews: '9729',
                comment: '25',
                collect: '17'
            },
            {
                id: 4,
                src: 'https://pic.midea.cn/h5/pic/202006/faa4a2e88511.jpg?x-oss-process=image/format,webp/quality,Q_90&@100Q.jpg',
                introduction: '风冷无霜 智能远程调温保鲜',
                modelNumber: '冰箱BCD-450WKZM(E)',
                price: '2599.00',
                pageviews: '9万',
                comment: '109',
                collect: '171'
            },
            {
                id: 5,
                src: 'https://pic.midea.cn/h5/pic/202005/ad1baa216ca7.jpg?x-oss-process=image/format,webp/quality,Q_90&@100Q.jpg',
                introduction: '阿尔法一根芯净水机 智显水龙头',
                modelNumber: '净水机MRO1890-400G',
                price: '1998.00',
                pageviews: '4万',
                comment: '16',
                collect: '27'
            },
            {
                id: 6,
                src: 'https://pic.midea.cn/h5/pic/202005/dfcb2bc3e852.jpg?x-oss-process=image/format,webp/quality,Q_90&@100Q.jpg',
                introduction: '16L即热零冷水 抑菌洗 WIFI智控',
                modelNumber: '燃气热水器JSQ30-TD7',
                price: '2299.00',
                pageviews: '3万',
                comment: '36',
                collect: '68'
            },
            {
                id: 7,
                src: 'https://pic.midea.cn/h5/pic/202006/c018bc4a131b.jpg?x-oss-process=image/format,webp/quality,Q_90&@100Q.jpg',
                introduction: '7片劲风 智能感温落地扇',
                modelNumber: '电风扇SAD35EC',
                price: '199.00',
                pageviews: '2万',
                comment: '47',
                collect: '18'
            },
            {
                id: 8,
                src: 'https://pic.midea.cn/h5/pic/202005/4ed3a03bff44.jpg?x-oss-process=image/format,webp/quality,Q_90&@100Q.jpg',
                introduction: '21m³智能声控自清洗烟灶套',
                modelNumber: '烟灶套装JZT-Q39+CXW-280-JC502',
                price: '2399.00',
                pageviews: '8473',
                comment: '5',
                collect: '13'
            }
        ]
    }
    renderItem_top = () => {
        const { topData } = this.state
        return topData.map(item => <li key={item.id} className="active_box">
            <img src={item.src} />
            <div className="info">
                <p className="desc">{item.title}</p>
                <p className="name">{item.coupon}</p>
            </div>
        </li>)
    }
    renderItem_bottom = () => {
        const { bottomData } = this.state
        return bottomData.map(item => <li key={item.id} className="product">
            <div className="pic">
                <img src={item.src} />
            </div>
            <div className='info_bottom'>
                <p className="desc_bottom">{item.introduction}</p>
                <p className="name_bottom">{item.modelNumber}</p>
                <p className="message">
                    <p className='price'>￥&nbsp;{item.price}</p>
                    <p className='collect'><i class="fa fa-star-o" aria-hidden="true"></i>{item.collect}</p>
                    <p className='comment'><i class="fa fa-comment-o" aria-hidden="true"></i>{item.comment}</p>
                    <p className="pageviews"><i class="fa fa-eye" aria-hidden="true"></i>{item.pageviews}</p>
                </p>
            </div>
        </li>)
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
