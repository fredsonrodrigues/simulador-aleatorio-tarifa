import React, { Component } from "react";
import { FormHero, Input, Select, Button } from "../Components";

class FormPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      plano: "",
      origem: "",
      destino: "",
      valor: ""
    }
    this.changeInput = this.changeInput.bind(this)
  }

  changeInput = e => {
    let val = this.state
    val[e.target.name] = e.target.value
    this.setState(val)
  }

  SelectPlano = props => {
    return (
      <Select name={"plano"}
        label={props.label}
        value={this.state.plano}
        onChange={this.changeInput}>
        <option>Selecione Plano</option>
        <option>FaleMais 30</option>
        <option>FaleMais 60</option>
        <option>FaleMais 120</option>
      </Select>
    )
  };

  SelectOrigem = props => {
    return (
      <Select name={"origem"} 
        label={props.label}
        value={this.state.origem}
        onChange={this.changeInput}>
        <option>011</option>
        <option>016</option>
        <option>017</option>
        <option>018</option>
      </Select>
    )
  };

  SelectDestino = props => {
    return (
      <Select name={"destino"}
        label={props.label}
        value={this.state.destino}
        onChange={this.changeInput}>
        <option>011</option>
        <option>016</option>
        <option>017</option>
        <option>018</option>
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
            <Input
              name={"valor"}
              label={"4. Por último, quantos minutos de ligação"}
              value={this.state.valor}
              onChange={this.changeInput}
            />
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
