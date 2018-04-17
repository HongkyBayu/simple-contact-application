import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import I18n from '../../I18n/i18n';

function NameTextField(props) {

  const { input, isIndo, ...inputProps } = props;

  return (
    <TextInput
      {...inputProps}
      style={styles.nameInput}
      placeholder={I18n.t('Name', {locale: isIndo ? 'id' : 'en'})}
      onChangeText={input.onChange}
      value={input.value}
    />
  )
}

const mapStateToProps = state => ({
  isIndo: state.translation
});

export default connect(mapStateToProps)(NameTextField);

const styles = StyleSheet.create({
  nameInput: {
    backgroundColor: '#D4D8D8',
    borderRadius: 5,
    width: 240,
  }
});