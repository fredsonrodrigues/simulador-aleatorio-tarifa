import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input 
              name={this.props.name} 
              className="input is-large" 
              type="number" 
              value={this.props.value}
              onChange={this.props.onChange} />
        </div>
      </div>
    );
  }
}

export { Input };