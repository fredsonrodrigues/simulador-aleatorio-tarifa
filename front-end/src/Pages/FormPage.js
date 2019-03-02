import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Select, Button } from "../Components";
import { submitForm, getPlans, getCodes } from "../Actions/FormActions";
import cellphones from "../Assets/img/cel.png";
import '../Assets/img.css'

class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: this.props.form,
      codes: [],
      plans: [],
      disabled: true,
      error: this.props.errors
    };
    this.changeInput = this.changeInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.image = cellphones;
  }

  checkForm = () => {
    if (this.state.form.plano !== "" &&
      this.state.form.origem !== "" &&
      this.state.form.destino !== "" &&
      this.state.form.valor !== "") {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  changeInput = e => {
    let val = this.state;
    val.form[e.target.name] = e.target.value;
    this.setState(val);
    this.checkForm()
  };

  submitForm() {
    this.props.submitForm(this.state.form);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ plans: nextProps.plans, codes: nextProps.codes, error: nextProps.error });
  }

  SelectPlano = props => {
    return (
      <Select
        name={"plano"}
        label={props.label}
        value={this.state.form.plano}
        onChange={this.changeInput}
      >
        <option>Selecione Plano</option>
        {this.state.plans.map((pl, index) => {
          return (
            <option key={index} value={pl.id}>
              {pl.plan}
            </option>
          );
        })}
      </Select>
    );
  };

  SelectOrigem = props => {
    return (
      <Select
        name={"origem"}
        label={props.label}
        value={this.state.form.origem}
        onChange={this.changeInput}
      >
        <option>Selecione o Código</option>
        {this.state.codes.map((pl, index) => {
          return (
            <option key={index} value={pl.code}>
              {pl.code}
            </option>
          );
        })}
      </Select>
    );
  };

  SelectDestino = props => {
    return (
      <Select
        name={"destino"}
        label={props.label}
        value={this.state.form.destino}
        onChange={this.changeInput}
      >
        <option>Selecione o Código</option>
        {this.state.codes.map((pl, index) => {
          return (
            <option key={index} value={pl.code}>
              {pl.code}
            </option>
          );
        })}
      </Select>
    );
  };

  ErrorMessage = () => {
    if (this.state.error != null) {
      return (<div className="columns">
        <div className="column is-three-quarters">
          <article className="message is-danger">
            <div className="message-body">
              {this.state.error.response.data.error}
            </div>
          </article>
        </div>
      </div>)
    } else {
      return (<div></div>);
    }
  };

  componentWillMount() {
    this.props.getPlans();
    this.props.getCodes();
    this.checkForm()
  }

  render() {
    const { SelectPlano, SelectOrigem, SelectDestino, ErrorMessage } = this;
    return (
      <div>
        <div className="columns">
          <div className="column is-half">
            <p className="title">Simulador Plano aletatório</p>
            <p className="subtitle">
              Descubra o valor da sua chamada com ou sem um plano
              <strong> Aleatorio</strong>.
            </p>
            <img src={this.image} className="image-telzir" alt="telefone telzir" />
          </div>
          <div className="column is-half">
            <ErrorMessage />
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
              <div className="column is-three-quarters">
                <Input
                  name={"valor"}
                  label={"4. Quantos minutos de ligação"}
                  value={this.state.form.valor}
                  onChange={this.changeInput}
                />
              </div>
            </div>
            <div className="columns">
              <div className="column is-three-quarters">
                <Button disabled={this.state.disabled} onClick={this.submitForm}>Simular</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    form: state.form.form,
    codes: state.form.codes,
    plans: state.form.plans,
    error: state.form.errors
  };
};
export default connect(
  mapStateToProps,
  {
    submitForm,
    getPlans,
    getCodes
  }
)(FormPage);
