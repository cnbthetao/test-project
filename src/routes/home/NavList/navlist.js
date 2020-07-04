import React, { useEffect } from 'react'
import './navlist.less'
import { Link } from 'dva/router'
import { connect } from 'dva'
function NavList(props) {
    const data = props.home.ulData.length != 0 && props.home.ulData['navList']
    if (props.home.homeUlData.length === 0) {
        useEffect(() => {
            const { dispatch } = props
            dispatch({
                type: 'home/getHome',
                payload: {
                    t: 1593849643616,
                    pageNo: 4
                }
            })
        })
    }
    return <div className="category_wrap">
        <ul className="category_list">
            {data && data.map(item => <Link to={`/cates/${item.id}`} key={item.id}><li>
                <p>{item.text}</p>
                <img src={item.url} />
            </li></Link>)}
        </ul>
    </div>
}
export default connect(
    state => state
)(NavList)