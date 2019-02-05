import React, { Component } from "react";
import { connect } from 'react-redux';
import { Card, Button } from "../Components";
import { restartSimulation } from '../Actions/FormActions'

class FormResult extends Component {

  constructor(props) {
    super(props)
    this.state = {
      simulation : this.props.simulation
    }
  }
  

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.simulation)
  }

  ListCard = () => {
    return this.state.simulation.map(s => 
      <div className="column is-one-fifth">
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
    )
  }

  render() {
    const { ListCard } = this
    return (
      <div>
        <p className="title">Simulador FaleMais Telzir</p>
        <p className="subtitle">
          Valores da ligação:
          <strong> ({this.props.form.origem}) 
          para ({this.props.form.destino}) 
          por {this.props.form.valor} min.</strong>
        </p>
        <div className="columns">
          <ListCard />
        </div>
        <div className="columns">
          <div className="column is-one-fifth">
            <Button onClick={this.props.restartSimulation}>Voltar</Button>
          </div>
          <div className="column is-one-fifth">
            <Button>Assinar plano</Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    form: state.form.form,
    simulation: state.form.simulation
  }
}
export default connect(mapStateToProps,{restartSimulation})(FormResult)