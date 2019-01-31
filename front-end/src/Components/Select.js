import React, { Component } from 'react'

class Select extends Component {
    render() {
        return (
            <div className="field">
                <label className="label">{this.props.label}</label>
                <div className="control">
                    <div className="select is-large">
                        <select>
                            {this.props.children}
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export {Select}
