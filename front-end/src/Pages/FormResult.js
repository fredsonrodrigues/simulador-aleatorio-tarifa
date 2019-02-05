import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button } from "../Components";
import { restartSimulation } from "../Actions/FormActions";
import cellphones from "../Assets/img/cel.png";
import "../Assets/img.css";

class FormResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simulation: this.props.simulation
    };
    this.image = cellphones;
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.simulation);
  }

  ListCard = () => {
    return this.state.simulation.map(s => (
      <div className="column is-two-fifths">
        <Card>
          <header className="card-header">
            <p className="card-header-title">{s.plano}</p>
          </header>
          <div className="card-content">
            <div className="content">
              <h1 className="card-header-title">{s.valor}</h1>
            </div>
          </div>
        </Card>
      </div>
    ));
  };

  render() {
    const { ListCard } = this;
    return (
      <div>
        <div className="columns">
          <div className="column is-half">
            <p className="title">Simulador FaleMais Telzir</p>
            <p className="subtitle">
              Valores da ligação:
              <strong>
                ({this.props.form.origem}) para ({this.props.form.destino}) por{" "}
                {this.props.form.valor} min.
              </strong>
            </p>
            <div className="columns">
              <ListCard />
            </div>
            <div className="columns">
              <div className="column is-two-fifths">
                <Button onClick={this.props.restartSimulation}>Voltar</Button>
              </div>
              <div className="column is-two-fifths">
                <Button>Assinar plano</Button>
              </div>
            </div>
          </div>
          <div className="column is-half">
            <img
              src={this.image}
              className="image-telzir"
              alt="telefone telzir"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    form: state.form.form,
    simulation: state.form.simulation
  };
};
export default connect(
  mapStateToProps,
  { restartSimulation }
)(FormResult);
