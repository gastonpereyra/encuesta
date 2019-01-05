// Action Types
import * as actions from './ActionTypes';
// App General
const loadAppLang = lang => ({
  type: actions.APP_LANG,
  payload: lang
})

// I18N
const loadI18n = messages => ({
  type: actions.LOAD_I18N,
  payload: messages,
});
const importI18n = (lang) => {
  return import(`../i18n/${lang}.json`);
};

export const chargeI18n = (l = "en") => (dispatch ) => {
  const langAbbr = l.split('-')[0];
  importI18n(langAbbr).then(lang => {
    dispatch(loadI18n(lang));
    dispatch(loadAppLang(langAbbr));
  })
}
