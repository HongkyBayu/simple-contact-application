import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import LoginPage from '../login/LoginPage';
import ContactList from './ContactList';

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

export default class App extends Component {
  render() {
    return <RootStack/>;
  }
}