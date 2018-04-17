import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import actionType from '../reducers/ActionTypes/actionTypes'
import I18n from '../I18n/i18n';

class SearchContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterKeyword: '',
    };
    this._onChangeSearchInput = this._onChangeSearchInput.bind(this);
  }

  _onChangeSearchInput(text) {
    this.props.searchNameInput(text);
  }

  render() {
    const { translation } = this.props;
    return (
      <View style-={styles.searchContainer}>
        <View style={styles.searchBox}>
          <TextInput
            onChangeText={this._onChangeSearchInput}
            style={styles.searchText}
            placeholder={I18n.t('SearchPlaceholder', { locale: translation ? 'id' : 'en' })}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  filterKeyword: state.filterKeyword,
});

const mapDispatchToProps = dispatch => ({
  searchNameInput: (filterKeyword) => {
    dispatch({
      type: actionType.CONTACT.FILTER_KEYWORD,
      payload: {
        filterKeyword,
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContact);

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