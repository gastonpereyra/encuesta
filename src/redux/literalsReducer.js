// Action Type
import { LOAD_LITERALS } from './ActionTypes';
// Reducer de Literal

export default (state = {}, { type, payload }) => {
    switch (type) {
      case LOAD_LITERALS:
        return payload;
      default:
        return state;
    }
  };