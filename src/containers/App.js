import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LoginPage from '../login/LoginPage';
import ContactList from './ContactList.container';
import rootReducers from '../reducers/index'

const RootStack = StackNavigator(
  {
    LoginPage: {
      screen: LoginPage,
    },
    ContactList: {
      screen: ContactList,
    },
  },
  {
    initialRouteName: 'LoginPage',
  },
);

const store = createStore(rootReducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}