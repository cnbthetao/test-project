import React, { Component } from 'react'
import { connect } from 'dva'
import './navlist.less'
function NavList(props) {
    const data = props.home.ulData.length != 0 && props.home.ulData['navList']

    return <div className="category_wrap">
        <ul className="category_list">
            {data && data.map(item => <li key={item.id}>
                <p>{item.text}</p>
                <img src={item.url} />
            </li>)}
        </ul>
    </div>
}
export default NavList