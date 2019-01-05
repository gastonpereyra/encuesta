// Action Types
import * as actions from './ActionTypes';
// Literal - I18N
export const loadLiterals = literals => ({
    type: actions.LOAD_LITERALS,
    payload: literals,
  });