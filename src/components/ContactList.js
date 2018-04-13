/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Contact from './Contact';
import I18n from '../I18n/i18n';
import ContactForm from './ContactForm';
import { connect } from 'react-redux';
import TranslateButton from './TranslateButton';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import SearchContact from './SearchContact';

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  _onRefresh() {
    this.setState({ refreshing: true });
  }

  filterContact(contactData, filterKeyword) {
    const filterList = contactData.filter((value) => {
      return value.name.toLowerCase().includes(filterKeyword.toLowerCase());
    });
    return filterList;
  }

  render() {
    const { isIndo } = this.props;
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            {I18n.t('ContactList', {locale: isIndo ? 'id' : 'en'})}
          </Text>
          <SearchContact translation={isIndo} />
          <FlatList
              style={{ height: 450, paddingTop: 20, }}
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
              data={this.props.visibleContact}
              keyExtractor={item => item.email}
              renderItem={({ item: { name, email } }) => (
                  <Contact
                      contactName={name}
                      contactEmail={email}
                  />
              )}
          />
          <ContactForm />
        </View>
    );
  }
}


ContactList.navigationOptions = ({ navigation: { goBack } }) => ({
  headerTitle: 'Contact',
  headerLeft: <TranslateButton />,
  headerRight: (
    <Text
      onPress={() => goBack()}
    >
      Logout
    </Text>
  ),
});

const contactList = new ContactList();

const mapStateToProps = state => ({
  isIndo : state.translation,
  visibleContact: contactList.filterContact(state.contact, state.filter),
});

export default connect(mapStateToProps)(ContactList);

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