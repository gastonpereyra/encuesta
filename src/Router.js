// Modulos React
import React from 'react';
// Moduelos Router
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// Pages
import Home from './Home';

// Redux
import { connect } from 'react-redux';
// import { actions } from 'react-redux-form';
// Cargar los Estados
const mapStateToProps = (state) => {
    return {
    literals: state.literals
    }
    // return { data: state.data };
  }
// Cargar las Acciones
const mapDispatchToProps = (dispatch) => ({
      // function: (param) => (dispatch(function(param)))
      // resetForm: () => { dispatch(actions.reset('formName')) }
  });
//
class Router extends React.Component {
    
    componentDidMount() {
        // fetchs
      }

    render() {
        console.log(this.props.literals)
        const HomePage = () => (
            <Home message={this.props.literals} />
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