import React, { Component } from "react";

class FormHero extends Component {
  render() {
    return (
      <section className="hero is-info is-fullheight">

        <div className="hero-body">
          <div className="container has-text-centered">
            {this.props.children}
          </div>
        </div>

        <div className="hero-foot">
        </div>
      </section>
    );
  }
}

export {FormHero};
