import React, { Component } from "react";

class FormHero extends Component {
  render() {
    return (
      <section className="hero is-info is-fullheight">

        <div className="hero-body">
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </section>
    );
  }
}

export {FormHero};
