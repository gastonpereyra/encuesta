// Action Type
import { USER_POST } from './ActionTypes';

export const userDefault = {
    firstname: "",
    lastname: "",
    age: "",
    genre: "",
    continent: "",
    zone: "",
    colorFavourite: ""
};

export const user = (state = userDefault, { type, payload }) => {
        switch (type) {
        case USER_POST:
            return payload;
        default:
            return state;
    }
};