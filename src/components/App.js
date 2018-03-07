import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../home/Home';
import ContactList from './ContactList';

const RootStack = StackNavigator(
    {
      Home: {
        screen: Home,
      },
      Contact: {
        screen: ContactList,
      },
    },
    {
      initialRouteName: 'Home',
    },
);

export default class App extends Component {
  render() {
    return <RootStack/>;
  }
}