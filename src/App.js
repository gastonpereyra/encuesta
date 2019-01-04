// React
import React from 'react';
// Router
import { BrowserRouter } from 'react-router-dom'; 
// Componentes 
import Router from './Router';
// Styles
import './styles/App.scss';
import 'bulma/css/bulma.min.css';
// Redux
import { Provider } from 'react-redux'; 
import { Store } from './redux/store';
const store = Store();

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
