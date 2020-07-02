import React, { Component } from 'react'
import './newuser.less'
export default class NewUser extends Component {
    state = {
        newUserImgList: ['https://pic.midea.cn/h5/pic/202005/959508511d08.gif@100Q.gif']
    }
    render() {
        return (
            <div>
                <ul className="new_user_wrap">
                    {
                        this.state.newUserImgList.map((item, index) => <li key={index}><img src={item} style={{ width: '100%' }} /></li>)
                    }
                </ul>
            </div>
        )
    }
}
