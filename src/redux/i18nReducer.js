// Action Type
import { LOAD_I18N } from './ActionTypes';
// Reducer de Literal

export default (state = {}, { type, payload }) => {
    switch (type) {
      case LOAD_I18N:
        return payload;
      default:
        return state;
    }
  };