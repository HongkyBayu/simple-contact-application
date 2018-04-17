import actionType from '../reducers/ActionTypes/actionTypes'

export default function filter(state = '', action) {
  switch(action.type) {
    case actionType.CONTACT.FILTER_KEYWORD:
      return action.payload.filterKeyword;
    default:
      return state;
  }
}