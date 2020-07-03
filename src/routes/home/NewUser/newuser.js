import React, { Component } from 'react'
import './newuser.less'
export default class NewUser extends Component {
    render() {
        const data = this.props.home.ulData['newUserList']
        return (
            <div>
                <ul className="new_user_wrap">
                    {
                        data && data.map(item => <li key={item.id}><img src={item.url} style={{ width: '100%' }} /></li>)
                    }
                </ul>
            </div>
        )
    }
}
