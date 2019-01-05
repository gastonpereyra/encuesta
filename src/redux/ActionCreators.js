// Action Types
import * as actions from './ActionTypes';
// Literal - I18N
const loadI18n = messages => ({
  type: actions.LOAD_I18N,
  payload: messages,
});
const importI18n = (lang) => {
  return import(`../i18n/${lang}.json`);
};

export const chargeI18n = (l = "en") => (dispatch ) => {
  importI18n(l.split('-')[0]).then(lang => {
    dispatch(loadI18n(lang));
  })
}