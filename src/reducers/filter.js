export default function filter(state = '', action) {
  switch(action.type) {
    case 'FILTER_KEYWORD':
      return action.payload.filterKeyword;
    default:
      return state;
  }
}