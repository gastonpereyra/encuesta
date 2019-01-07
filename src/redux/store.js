// Redux Store Config
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createForms } from "react-redux-form";
// Reducers
import i18n from './i18nReducer'
import app from './appReducer';
import { user, userDefault } from './userReducer';

export const Store = ()  => {
    const store = createStore(
        combineReducers({
            i18n,
            app,
            user,
            ...createForms({ 
                userForm: userDefault
            })
        }),
        applyMiddleware(thunk)
    );

    return store;
}