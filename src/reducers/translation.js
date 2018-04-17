import actionType from '../reducers/ActionTypes/actionTypes'

export default function translation(state = false, action) {
  switch (action.type) {
    case actionType.TRANSLATION.TOGGLE_TRANSLATION :
      return action.payload.isIndo;
    default:
      return state;
  }
}