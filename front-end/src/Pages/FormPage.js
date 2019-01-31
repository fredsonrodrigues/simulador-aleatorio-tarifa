import React, { Component } from "react";
import { FormHero, Input, Select, Button } from "../Components";

class FormPage extends Component {

  SelectPlano = props => {
    return (
      <Select label={props.label}>
        <option>Plano</option>
        <option>FaleMais 30</option>
        <option>FaleMais 60</option>
        <option>FaleMais 120</option>
      </Select>
    )
  };

  SelectOrigem = props => {
    return (
      <Select label={props.label}>
        <option>Plano</option>
        <option>FaleMais 30</option>
        <option>FaleMais 60</option>
        <option>FaleMais 120</option>
      </Select>
    )
  };

  SelectDestino = props => {
    return (
      <Select label={props.label}>
        <option>Plano</option>
        <option>FaleMais 30</option>
        <option>FaleMais 60</option>
        <option>FaleMais 120</option>
      </Select>
    )
  };
  
  render() {
    const { SelectPlano, SelectOrigem, SelectDestino } = this;
    return (
      <FormHero>
        <p className="title">Simulador FaleMais Telzir</p>
        <p className="subtitle">
          Descubra o valor da sua chamada com ou sem um plano
          <strong> FaleMais</strong>.
        </p>
        <div className="columns">
          <div className="column">
            <SelectPlano label="1. Selecione o Plano" />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <SelectOrigem label={"2. Selecione a Origem da Ligação ..."} />
            <SelectDestino label={"3. ... E o destino"} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-two-fifths">
            <Input label={"4. Por último, quantos minutos de ligação"} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-two-fifths">
            <Button>Simular</Button>
          </div>
        </div>
      </FormHero>
    );
  }
}

export default FormPage;
