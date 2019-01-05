// Redux Store Config
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createForms } from "react-redux-form";
// Reducers
import i18n from './i18nReducer'

export const Store = ()  => {
    const store = createStore(
        combineReducers({
            i18n,
            ...createForms({ 
                feedback: { user: "" }
            })
        }),
        applyMiddleware(thunk)
    );

    return store;
}