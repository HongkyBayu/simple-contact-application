import DummyData from '../components/DummyContact';

export default function contact(state = DummyData, action) {
  switch (action.type) {
    case 'ADD_CONTACT':
      console.log('nando bodoh');
      console.log(action.payload);
      const { name, email } = action.payload;
      return [
        { name, email },
        ...state
      ];
    default:
      return state;
  }
}