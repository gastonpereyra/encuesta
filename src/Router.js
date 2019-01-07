// Modulos React
import React from 'react';
// Moduelos Router
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// Pages
import Home from './Home';

// Redux
import { connect } from 'react-redux';
import * as Actions from "./redux/ActionCreators";
// import { actions } from 'react-redux-form';

// Cargar los Estados
const mapStateToProps = (state) => {
    return {
        i18n: state.i18n,
        app: state.app,
        user: state.user
    }
    // return { data: state.data };
  }
// Cargar las Acciones
const mapDispatchToProps = (dispatch) => ({
      // function: (param) => (dispatch(function(param)))
      // resetForm: () => { dispatch(actions.reset('formName')) }
      chargeI18n: (lang) => (dispatch(Actions.chargeI18n(lang))),
      completeUserData: () => (dispatch(Actions.completeUserData())),
      addUser: (firstname, lastname, age, genre, continent, zone, color) => 
                (dispatch(Actions.addUser(firstname, lastname, age, genre, continent, zone, color)))
  });
//
class Router extends React.Component {
    
    componentDidMount() {
        var lang = navigator.language || navigator.userLanguage;
        this.props.chargeI18n(lang);
      }

    render() {
        const HomePage = () => (
            <Home 
                actualLang={this.props.app.lang} 
                messages={this.props.i18n} 
                changeLang={this.props.chargeI18n} 
                user={this.props.user}
                submitUser={this.props.addUser}
                complete={this.props.completeUserData}
                />
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