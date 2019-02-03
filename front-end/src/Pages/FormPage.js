import React, { Component } from "react";
import { connect } from 'react-redux';
import { Input, Select, Button } from "../Components";
import { submitForm, getPlans, getCodes } from '../Actions/FormActions'

class FormPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      form: this.props.form,
      codes: [],
      plans: []
    }
    this.changeInput = this.changeInput.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  changeInput = e => {
    let val = this.state
    val.form[e.target.name] = e.target.value
    console.log(val)
    this.setState(val)
  }

  submitForm() {
    this.props.submitForm(this.state.form)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ plans: nextProps.plans, codes: nextProps.codes })
  }

  SelectPlano = props => {
    return (
      <Select name={"plano"}
        label={props.label}
        value={this.state.form.plano}
        onChange={this.changeInput}>
        <option>Selecione Plano</option>
        {this.state.plans.map((pl, index) => {
          return <option key={index} value={pl.id}>{pl.plan}</option>
        })}
      </Select>
    )
  };

  SelectOrigem = props => {
    return (
      <Select name={"origem"}
        label={props.label}
        value={this.state.form.origem}
        onChange={this.changeInput}>
        <option>Selecione o Código</option>
        {this.state.codes.map((pl, index) => {
          return <option key={index} value={pl.code}>{pl.code}</option>
        })}
      </Select>
    )
  };

  SelectDestino = props => {
    return (
      <Select name={"destino"}
        label={props.label}
        value={this.state.form.destino}
        onChange={this.changeInput}>
        <option>Selecione o Código</option>
        {this.state.codes.map((pl, index) => {
          return <option key={index} value={pl.code}>{pl.code}</option>
        })}
      </Select>
    )
  };

  componentWillMount() {
    this.props.getPlans()
    this.props.getCodes()
  }

  render() {
    const { SelectPlano, SelectOrigem, SelectDestino } = this;
    return (
      <div>
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
              value={this.state.form.valor}
              onChange={this.changeInput}
            />
          </div>
        </div>
        <div className="columns">
          <div className="column is-two-fifths">
            <Button onClick={this.submitForm}>Simular</Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    form: state.form.form,
    codes: state.form.codes,
    plans: state.form.plans,
  }
}
export default connect(mapStateToProps,
  {
    submitForm,
    getPlans,
    getCodes
  }
)(FormPage)
