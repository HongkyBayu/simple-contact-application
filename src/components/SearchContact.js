import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class SearchContact extends Component {
  constructor(props) {
    super(props);
    this._onChangeSearchInput = this._onChangeSearchInput.bind(this);
  }

  _onChangeSearchInput(text) {
    this.props.searchNameInput(text);
  }

  render() {
    return (
        <View style-={styles.searchContainer}>
          <View style={styles.searchBox}>
          <TextInput
              onChangeText={this._onChangeSearchInput}
              style={styles.searchText}
              placeholder="Search"
          />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  searchBox: {
    paddingTop: 10,
  },
  searchText: {
    textAlign: 'center',
    backgroundColor: '#D4D8D8',
    opacity: 100,
    borderRadius: 10,
  },
});