// Action Type
import { APP_LANG, APP_ACTIVE_NAVBAR, APP_DESACTIVE_NAVBAR, APP_COMPLETE_USER_DATA } from './ActionTypes';
// Reducer del estado general de la App

export default (state = {
    lang: "",
    username: "",
    navBar: false,
    userForm: false
    }, { type, payload }) => {
        switch (type) {
        case APP_LANG:
            return {...state, lang: payload};
        case APP_ACTIVE_NAVBAR:
            return {...state, navBar: true};
        case APP_DESACTIVE_NAVBAR:
            return {...state, navBar: false};
        case APP_COMPLETE_USER_DATA:
            return {...state, userData: true};
        default:
            return state;
    }
};