import React, { Component } from 'react'

class Button extends Component {
    render() {
        return (
            <div className="control">
                <button onClick={this.props.onClick} className="button is-large is-fullwidth is-light is-outlined">
                    {this.props.children}
                </button>
            </div>
        )
    }
}

export { Button };