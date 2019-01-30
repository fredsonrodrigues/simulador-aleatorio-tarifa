import React, { Component } from "react";
import "./Assets/bulma.min.css";
import { FormHero, Input } from "./Components";

class App extends Component {
  render() {
    return (
      <div>
        <FormHero>
          <p className="title">Bem Vindo a Telzir</p>
          <p className="subtitle">Subtitle</p>
          <div class="columns">
            <div class="column">
              <Input />
            </div>
            <div class="column">
              <Input />
            </div>
            <div class="column">
              <Input />
            </div>
            <div class="column">
              <Input />
            </div>
          </div>
        </FormHero>
      </div>
    );
  }
}

export default App;
