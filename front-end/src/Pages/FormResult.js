import React, { Component } from "react";
import { FormHero, Card, Button } from "../Components";

class FormResult extends Component {
  render() {
    return (
      <FormHero>
        <p className="title">Simulador FaleMais Telzir</p>
        <p className="subtitle">
          Valores da ligação:
          <strong> (011) para (017) por 50 min.</strong>.
        </p>
        <div className="columns">
          <div className="column is-one-fifth">
            <Card>
              <header class="card-header">
                <p class="card-header-title">Sem FaleMais</p>
              </header>
              <div class="card-content">
                <div class="content">
                    <h1 class="card-header-title">R$ 16,00</h1>
                </div>
              </div>
            </Card>
          </div>
          <div className="column is-one-fifth">
            <Card>
              <header class="card-header">
                <p class="card-header-title">Com FaleMais</p>
              </header>
              <div class="card-content">
                <div class="content">
                    <h1 class="card-header-title">R$ 10,00</h1>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="columns">
          <div className="column is-one-fifth">
            <Button>Voltar</Button>
          </div>
          <div className="column is-one-fifth">
            <Button>Assinar plano</Button>
          </div>
        </div>
      </FormHero>
    );
  }
}

export default FormResult;
