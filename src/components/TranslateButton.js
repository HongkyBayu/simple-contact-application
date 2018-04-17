import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import actionType from '../reducers/ActionTypes/actionTypes'

class TranslateButton extends Component{

  onToggleTranslate() {
    const { isIndo } = this.props;
    this.props.changeLanguage(!isIndo);
  }

  render() {
    const { isIndo } = this.props;
    return (
      <Text
        onPress={() => this.onToggleTranslate()}
      >
        {isIndo ? 'ID' : 'EN'}
      </Text>
    );
  }
};

const mapStateToProps = state => ({
  isIndo: state.translation,
});

const mapDispatchToProps = dispatch => ({
  changeLanguage: (isIndo) => {
    dispatch({
      type: actionType.TRANSLATION.TOGGLE_TRANSLATION,
      payload: {
        isIndo,
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TranslateButton);