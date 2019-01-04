// Redux Store Config
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createForms } from "react-redux-form";

export const Store = ()  => {
    const store = createStore(
        combineReducers({
            ...createForms({ 
                feedback: { user: "" }
            })
        }),
        applyMiddleware(thunk)
    );

    return store;
}