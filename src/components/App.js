/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Contact from './Contact';
import CONTACT from './DummyContact';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      contactData: [],
    }
  }

  componentDidMount() {
    this.setState({ contactData: CONTACT});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Search
        </Text>
        <FlatList
            data={this.state.contactData}
            keyExtractor={item => item.email}
            renderItem={({ item: {name, email, image} }) => (
                <Contact
                    contactName={name}
                    contactEmail={email}
                    imageURL={image}
                />
            )}
        />
        <Text style={styles.instructions}>
          Form
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
