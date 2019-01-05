// Modulos React
import React from 'react';
// Moduelos Router
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// Pages
import Home from './Home';

// Redux
import { connect } from 'react-redux';
import { chargeI18n } from "./redux/ActionCreators";
// import { actions } from 'react-redux-form';
// Cargar los Estados
const mapStateToProps = (state) => {
    return {
    i18n: state.i18n
    }
    // return { data: state.data };
  }
// Cargar las Acciones
const mapDispatchToProps = (dispatch) => ({
      // function: (param) => (dispatch(function(param)))
      // resetForm: () => { dispatch(actions.reset('formName')) }
      chargeI18n: () => (dispatch(chargeI18n()))
  });
//
class Router extends React.Component {
    
    componentDidMount() {
        var lang = navigator.language || navigator.userLanguage;
        alert(lang);
        this.props.chargeI18n();
      }

    render() {
        console.log(this.props.literals)
        const HomePage = () => (
            <Home message={this.props.i18n} />
        )
        return (
            <Switch>
              <Route path="/home" component={HomePage} />
              <Redirect to="/home" />
            </Switch>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Router));