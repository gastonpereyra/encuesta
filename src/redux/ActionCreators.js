// Action Types
import * as actions from './ActionTypes';
// Literal - I18N
export const loadI18n = messages => ({
  type: actions.LOAD_I18N,
  payload: messages,
});

const importI18n = (lang = "en") => {
  return import(`../i18n/${lang}.json`);
};

export const chargeI18n = () => (dispatch ) => {
  importI18n().then(lang => {
    dispatch(loadI18n(lang));
  })
}