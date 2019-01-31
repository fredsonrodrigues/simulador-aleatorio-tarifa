import React, { Component } from "react";
import "./Assets/index.css";
import { FormHero, Input, Select, Button } from "./Components";

class App extends Component {
  render() {
    return (
      <div>
        <FormHero>
          <p className="title">Simulador FaleMais Telzir</p>
          <p className="subtitle">Descubra o valor da sua chamada com ou sem um plano  
          <strong> FaleMais</strong>.</p>
          <div className="columns">
            <div className="column">
              <Select label={"1. Selecione o Plano FaleMais"}>
                <option>Plano</option>
                <option>FaleMais 30</option>
                <option>FaleMais 60</option>
                <option>FaleMais 120</option>
              </Select>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Select label={"2. Selecione a Origem da Ligação ..."}>
                <option>Origem</option>
                <option>011</option>
                <option>016</option>
                <option>017</option>
                <option>018</option>
              </Select>
              <Select label={"3. ... E o destino"}>
                <option>Destino</option>
                <option>011</option>
                <option>016</option>
                <option>017</option>
                <option>018</option>
              </Select>
            </div>
          </div>
          <div className="columns">
            <div className="column is-two-fifths">
              <Input label={"4. Por último, quantos minutos de ligação"} />
            </div>
          </div>
          <div className="columns">
            <div className="column is-two-fifths">
                <Button>
                  Simular
                </Button>
              </div>
            </div>
        </FormHero>
      </div>
    );
  }
}

export default App;
