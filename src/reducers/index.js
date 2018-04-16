import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import contact from '../reducers/contact';
import filter from '../reducers/filter';
import translation from '../reducers/translation';

export default combineReducers({
  contact,
  filter,
  translation,
  form: formReducer
});