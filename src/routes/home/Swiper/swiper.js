import { Carousel, WingBlank } from 'antd-mobile';
import React from 'react'
import './swiper.less'
export default class Swiper extends React.Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        slideCount: 8
    }
    componentDidMount() {
        // const data = this.props.home.ulData.length != 0 && 
        setTimeout(() => {
            this.setState({
                data: this.props.home.ulData['swiperList']
            });
        }, 100);
    }
    render() {
        const { data } = this.state
        return (
            <WingBlank style={{ margin: '0' }}>
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {data && data.map(val => (
                        <a
                            key={val}
                            href=""
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={val.url}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}

// export default class Swiper extends React.Component {
//     render() {
//         return (
//             <div>
//                 <WingBlank style={{ margin: '0' }}>
//                     <Carousel
//                         autoplay={true}
//                         infinite
//                     >
//                         {data && data.map(val => (
//                             <a
//                                 key={val.id}
//                                 href=""
//                                 style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
//                             >
//                                 <img
//                                     src={val.url}
//                                     alt=""
//                                     style={{ width: '100%', verticalAlign: 'top' }}
//                                     onLoad={() => {
//                                         window.dispatchEvent(new Event('resize'));
//                                         this.setState({ imgHeight: 'auto' });
//                                     }}
//                                 />
//                             </a>
//                         ))}
//                     </Carousel>
//                 </WingBlank>
//             </div>
//         )
//     }
// }
