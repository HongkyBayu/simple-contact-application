import React, { Component } from 'react';
import { View, Button, TextInput, Text, AlertIOS } from 'react-native';

const credential = {
  username: 'Ahong',
  password: 'Hongky',
};

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this._onChangeUsernameInput = this._onChangeUsernameInput.bind(this);
    this._onChangePasswordInput = this._onChangePasswordInput.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this._isPasswordEmpty = this._isPasswordEmpty.bind(this);
    this._isUsernameEmpty = this._isUsernameEmpty.bind(this);
    this._isCredentialValid = this._isCredentialValid.bind(this);
  }

  _onChangeUsernameInput(text) {
    this.setState({
      username: text,
    });
  }

  _onChangePasswordInput(text) {
    this.setState({
      password: text,
    });
  }

  _isUsernameEmpty() {
    const { username } = this.state;
    return username.length === 0;
  }

  _isPasswordEmpty() {
    const { password } = this.state;
    return password.length === 0;
  }

  _isCredentialValid() {
    const { username, password } = this.state;
    return username === credential.username && password === credential.password;
  }

  _onSubmit() {
    switch (true) {
      case (this._isPasswordEmpty() && this._isUsernameEmpty()):
        this.setState({
          error: 'Username and Password required',
        });
        break;
      case (this._isUsernameEmpty()):
        this.setState({
          error: 'Username required',
        });
        break;
      case (this._isPasswordEmpty()):
        this.setState({
          error: 'Password required',
        });
        break;
      case (this._isCredentialValid()):
        this.props.navigation.navigate('ContactList');
        break;
      default:
        this.setState({
          error: '',
        });
        AlertIOS.alert(
            'Authentication Error!',
            'Username and/or Password not match',
        );
    }
  }

  render() {
    const { error } = this.state;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>{error}</Text>
          <TextInput
              onChangeText={this._onChangeUsernameInput}
              placeholder="Username"
          />
          <TextInput
              onChangeText={this._onChangePasswordInput}
              placeholder="Password"
          />
          <Button
              title="Contact"
              onPress={this._onSubmit}
          />
        </View>
    );
  }
}