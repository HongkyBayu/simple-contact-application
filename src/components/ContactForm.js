import React, { Component } from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      emailInput: '',
    }
    this._onInputNameChange = this._onInputNameChange.bind(this);
    this._onInputEmailChange = this._onInputEmailChange.bind(this);
    this._buttonSumbitData = this._buttonSumbitData.bind(this);
  }

  _onInputNameChange(text) {
    this.setState({
      nameInput: text,
    })
  }

  _onInputEmailChange(text) {
    this.setState({
      emailInput: text,
    })
  }

  _buttonSumbitData() {
    const results = {
      name: this.state.nameInput,
      email: this.state.emailInput,
    }
    this.props.contactFormCallback(results);
  }

  render() {
    return (
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
          <TextInput
              style={styles.nameInput}
              placeholder="Name"
              onChangeText={this._onInputNameChange}
          />
          <TextInput
              style={styles.emailInput}
              placeholder="Email"
              onChangeText={this._onInputEmailChange}
          />
          </View>
          <Button
              onPress={this._buttonSumbitData}
              title="Submit Data"
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  nameInput: {
    backgroundColor: '#D4D8D8',
    borderRadius: 5,
    width: 240,
  },
  emailInput: {
    backgroundColor: '#D4D8D8',
    borderRadius: 5,
    width: 240,
    marginTop: 3,
  }
});