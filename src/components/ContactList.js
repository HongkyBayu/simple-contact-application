/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Contact from './Contact';
import I18n from '../I18n/i18n';
import ContactForm from './ContactForm';
import CONTACT from './DummyContact';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import SearchContact from './SearchContact';

export default class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactData: [],
      searchInput: '',
      refreshing: false,
      isIndo : false,
    };

    this._searchInput = this._searchInput.bind(this);
    this._onToggleTranslate = this._onToggleTranslate.bind(this);
  }

  componentDidMount() {
    this.setState({ contactData: CONTACT });
  }

  _insertData(data) {
    const { contactData } = this.state;
    this.setState({
      contactData: [ data, ...contactData ],
    });
  }

  _searchInput(value) {
    this.setState({
      searchInput: value,
    });
  }

  _onRefresh() {
    this.setState({ refreshing: true });
  }

  _filterList() {
    const contact = this.state.contactData;
    const searchValue = this.state.searchInput;
    const filterList = contact.filter((value) => {
      return value.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    return filterList;
  }

  _onToggleTranslate(){
    const { isIndo } = this.state;
    this.setState({
      isIndo: !isIndo,
    })
  }

  render() {
    const { isIndo } = this.state;
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            {I18n.t('ContactList', {locale: isIndo ? 'id' : 'en'})}
          </Text>
          <Button
            onPress={this._onToggleTranslate}
            title="Translate"
          />
          <SearchContact translation={isIndo} searchNameInput={this._searchInput}/>
          <FlatList
              style={{ height: 450, paddingTop: 20, }}
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
              data={this._filterList()}
              keyExtractor={item => item.email}
              renderItem={({ item: { name, email } }) => (
                  <Contact
                      contactName={name}
                      contactEmail={email}
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
    padding: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

ContactList.navigationOptions = ({ navigation: { goBack } }) => ({
  headerTitle: 'Contact',
  headerLeft: null,
  headerRight: (
      <Text
          onPress={() => goBack()}
      >
        Logout
      </Text>
  ),
});