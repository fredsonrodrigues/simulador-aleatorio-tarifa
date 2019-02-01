import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div class="card">
                {this.props.children}
            </div>
        );
    }
}

export {Card};