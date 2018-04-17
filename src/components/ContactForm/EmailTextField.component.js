import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function EmailTextField(props) {

  const { input, ...inputProps } = props;

  return (
    <TextInput
      {...inputProps}
      style={styles.emailInput}
      placeholder="Email"
      onChangeText={input.onChange}
      value={input.value}
    />
  )
}

const styles = StyleSheet.create({
  emailInput: {
    backgroundColor: '#D4D8D8',
    borderRadius: 5,
    width: 240,
    marginTop: 3,
  }
});