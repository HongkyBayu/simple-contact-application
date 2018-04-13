import React, { Component } from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import I18n from '../I18n/i18n';

class ContactForm extends Component {
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
    const { nameInput, emailInput } = this.state;
    this.props.onSaveContact(nameInput, emailInput);
    this.setState({
      nameInput: '',
      emailInput: '',
    });
  }

  render() {
    const { nameInput, emailInput } = this.state;
    const { isIndo } = this.props;
    return (
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
          <TextInput
              style={styles.nameInput}
              placeholder={I18n.t('Name', {locale: isIndo ? 'id' : 'en'})}
              onChangeText={this._onInputNameChange}
              value={nameInput}
          />
          <TextInput
              style={styles.emailInput}
              placeholder="Email"
              onChangeText={this._onInputEmailChange}
              value={emailInput}
          />
          </View>
          <Button
              onPress={this._buttonSumbitData}
              title={I18n.t('SubmitButtonText', { locale: isIndo ? 'id' : 'en'})}
          />
        </View>
    )
  }
}

const mapStateToProps = state => ({
  isIndo: state.translation
})

const mapDispatchToProps = dispatch => ({
  onSaveContact: (name, email) => {
    dispatch({
      type: 'ADD_CONTACT',
      payload: {
        name,
        email
      }
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

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