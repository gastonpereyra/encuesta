// Redux Store Config
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createForms } from "react-redux-form";
// Reducers
import literals from './literalsReducer'

export const Store = ()  => {
    const store = createStore(
        combineReducers({
            literals,
            ...createForms({ 
                feedback: { user: "" }
            })
        }),
        applyMiddleware(thunk)
    );

    return store;
}