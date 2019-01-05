// React
import React from 'react';
// Router
import { BrowserRouter } from 'react-router-dom'; 
// Componentes 
import Router from './Router';
import { loadLiterals } from "./redux/ActionCreators";
import loadLang from "./i18n";
// Styles
import './styles/App.scss';
import 'bulma/css/bulma.min.css';
// Redux
import { Provider } from 'react-redux'; 
import { Store } from './redux/store';
const store = Store();

const lang = loadLang();
store.dispatch(loadLiterals(lang))

const App = (props) => {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    )
}

export default App;
