import React from 'react'
import './navlist.less'
import { Link } from 'dva/router'
function NavList(props) {
    const data = props.home.ulData.length != 0 && props.home.ulData['navList']

    return <div className="category_wrap">
        <ul className="category_list">
            {data && data.map(item => <Link to={`/cates/${item.id}`} key={item.id}><li>
                <p>{item.text}</p>
                <img src={item.url} />
            </li></Link>)}
        </ul>
    </div>
}
export default NavList