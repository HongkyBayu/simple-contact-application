/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Contact from './Contact';
import ContactForm from './ContactForm';
import CONTACT from './DummyContact';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import SearchContact from './SearchContact';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactData: [],
      searchInput: '',
    };

    this._searchInput = this._searchInput.bind(this);
  }

  componentDidMount() {
    this.setState({ contactData: CONTACT });
  }

  _insertData(data) {
    const { contactData } = this.state;
    this.setState({
      contactData: [ ...contactData, data ],
    });
  }

  _searchInput(value) {
    this.setState({
      searchInput: value,
    });
  }

  _filterList() {
    const contact = this.state.contactData;
    const searchValue = this.state.searchInput;
    const filterList = contact.filter((value) => {
      return value.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    return filterList;
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Contact List
          </Text>
          <SearchContact searchNameInput={this._searchInput}/>
          <FlatList
              style={{ height: 500, paddingTop: 20, }}
              data={this._filterList()}
              keyExtractor={item => item.email}
              renderItem={({ item: { name, email, image } }) => (
                  <Contact
                      contactName={name}
                      contactEmail={email}
                      imageURL={image}
                  />
              )}
          />
          <ContactForm contactFormCallback={(data) => this._insertData(data)}/>
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
