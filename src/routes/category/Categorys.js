import React from "react";

import "./Categorys.less";

import { Tabs, WhiteSpace } from "antd-mobile";

class Categorys extends React.Component {
  constructor() {
    super()
    this.state = {
      catesTab: []
    }
  }
  renderContent = (tab) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <div class="xixi">
        {/* {this.renderItem} */}
        {/* 这边是渲染部分 */}

        {this.state.catesTab.map(item => <a key={item.id}>
          <img src={item.url} />
        </a>)}

      </div>

      <div class="hehe">
        热门品类
      </div>

      <div class="haha">热门单品</div>
    </div>
  );


  componentDidMount() {
    fetch('http://localhost:8000/api/cates')
      .then(function (response) {
        return response.json();
      })
      .then(data => {
        console.log('xixi', data)
        this.setState({
          catesTab: data.data
        })

      });
  }
  render() {
    const tabs = [
      {
        title: (
          <div>
            <i class=" fa fa-window-maximize"></i>
            <span> 空调 </span>
          </div>
        ),
      },
      {
        title: (
          <div>
            <i class=" fa fa-television"></i>
            <span>冰箱</span>
          </div>
        ),
      },
      {
        title: (
          <div>
            <i class="fa fa-trash"></i>
            <span>洗衣机</span>
          </div>
        ),
      },
      {
        title: (
          <div>
            <i class="fa fa-ship"></i>
            <span>厨房小家电</span>
          </div>
        ),
      },
      {
        title: <div>
          <i class=' fa fa-plug'></i>
          <span>厨房大电器</span>
        </div>
      },
      {
        title: <div>

          <i class='fa fa-phone'></i>
          <span>生活电器</span>
        </div>
      },
      {
        title: <div>
          <i class='fa fa-shower'></i>
          <span>热水/净水</span>
        </div>
      },
      {
        title: <div>
          <i class='fa  fa-thumb-tack'></i>
          <span>家装配器周边</span>
        </div>
      },
    ];

    return (
      <div className="container">
        <WhiteSpace />
        <Tabs
          tabBarPosition="left"
          tabs={tabs}
          renderTabBar={(props) => {
            return (

              <Tabs.DefaultTabBar {...props} page={7} />

            );
          }}
        >
          {this.renderContent}
        </Tabs>
        <WhiteSpace />
      </div>
    );
  }
}

export default Categorys;
