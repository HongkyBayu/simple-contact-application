import DummyData from '../dummydata/DummyContact';
import actionType from '../reducers/ActionTypes/actionTypes';

export default function contact(state = DummyData, action) {
  switch (action.type) {
    case actionType.CONTACT.ADD_CONTACT:
      const { name, email } = action.payload;
      return [
        { name, email },
        ...state
      ];
    default:
      return state;
  }
}