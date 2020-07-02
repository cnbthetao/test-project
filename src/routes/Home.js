import React, { useState, useEffect } from "react";
import './Home.less'
import cn from 'classname'
import { Carousel, WingBlank } from 'antd-mobile';
export default function Home() {
  const [flag, setflag] = useState(true)
  const [data, setData] = useState(['1', '2', '3'])
  const [imgHeight, setImgHeight] = useState(176)
  function showAllMsg() {
    setflag({
      flag: !flag
    })
    console.log(flag);
  }
  // useEffect(() => {
  //   setTimeout(() => {
  //     setData({
  //       data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
  //     });
  //   }, 100);
  //   console.log(data)
  // })
  return <div className="container">
    <div className={cn({
      massage: true,
      allMsg: true
    })} onClick={showAllMsg}>
      <div className="leftIcon"></div>
      <div className={cn({
        midMsg: true,
        showMsg: true
      })}>【通知】1、由于销售火爆，工厂正在积极生产备货中，6.18大促期间的订单以实际发出为准，发货时效延迟对您造成的不便，感谢理解和支持。2、受疫情管控政策影响，北京、天津、牡丹江等区域发货/配送时效有所延迟；受暴雨天气影响，广西防城港市、东兴市等区域配送时效有所延迟，敬请谅解！</div>
      <div className="rightIcon">
        <i className="fa fa-angle-down" aria-hidden="true" style={{ fontSize: ".18rem" }}></i>
      </div>
    </div>
    <WingBlank style={{ margin: '0',background:'red' }}>
      <Carousel
        autoplay={false}
        infinite
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={index => console.log('slide to', index)}
      >
        {data.map(val => (
          <a
            key={val}
            href="http://www.alipay.com"
            style={{ display: 'inline-block', width: '100%', height: imgHeight }}
          >
            <img
              src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                setImgHeight({ imgHeight: 'auto' });
              }}
            />
          </a>
        ))}
      </Carousel>
    </WingBlank>
  </div>;
}
