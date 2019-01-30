import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div class="field">
            <div class="control">
              <input
                class="input is-large"
                type="text"
                placeholder="Large input"
                disabled
              />
            </div>
          </div>
        );
    }
}

export {Input};