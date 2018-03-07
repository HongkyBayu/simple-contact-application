import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {
        value: '',
        isExist: false,
      },
      password: {
        value: '',
        isExist: false,
      },
    };

    this._onChangeUsernameInput = this._onChangeUsernameInput.bind(this);
    this._onChangePasswordInput = this._onChangePasswordInput.bind(this);
  }

  _onChangeUsernameInput(text) {
    this.setState({
      username: {
        value: text,
        isExist: text.length !== 0,
      },
    });
  }

  _onChangePasswordInput(text) {
    this.setState({
      password: {
        value: text,
        isExist: text.length !== 0,
      },
    });
  }

  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
              onPress={() => this.props.navigation.navigate('Contact')}
          />
        </View>
    );
  }
}