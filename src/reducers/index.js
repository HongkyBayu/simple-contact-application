import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import actionType from '../reducers/ActionTypes/actionTypes'
import contact from '../reducers/contact';
import filter from '../reducers/filter';
import translation from '../reducers/translation';

export default combineReducers({
  contact,
  filter,
  translation,
  form: formReducer.plugin({
    contactForm: (state, action) => {
      switch(action.type) {
        case actionType.CONTACT.CONTACT_SAVE_SUCCESS:
          return undefined;
        default:
          return state;
      }
    }
  })
});