import React, { Component } from 'react'
import '../../Assets/bouncer.css'

class Loading extends Component {
    render() {
        return (
            <div>
                <div className="phone">
                    <ul className="content">
                        <li></li>
                        <li></li>
                    </ul>
                    <div className="cover"></div>
                    <div className="cover"></div>
                    <div className="cover"></div>
                </div>
            </div>
        )
    }
}

export { Loading };