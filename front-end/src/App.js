import React, { Component } from "react";
import { FormHero, Loading } from "./Components";
import { connect } from 'react-redux'
import FormPage from "./Pages/FormPage"
import FormResult from "./Pages/FormResult"
import "./Assets/index.css";

class App extends Component {

  Application = (props) => {
    switch (props.screen) {
      case 0:
        return <Loading />
      case 1:
        return <FormPage />
      case 2:
        return <FormResult />
      default:
    }
  }

  render() {
    const { Application } = this
    return (
      <FormHero>
        <Application screen={this.props.page} />
      </FormHero>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.form.page
  }
}
export default connect(mapStateToProps, {})(App)
