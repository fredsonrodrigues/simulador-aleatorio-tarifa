import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input className="input is-large" type="text" value="16" />
        </div>
      </div>
    );
  }
}

export { Input };