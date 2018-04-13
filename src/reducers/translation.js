export default function translation(state = false, action) {
  switch (action.type) {
    case 'TOGGLE_TRANSLATION' :
      return action.payload.isIndo;
    default:
      return state;
  }
}