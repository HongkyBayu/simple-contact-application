import React, { Component } from 'react';
import { View, Button, TextInput, Text, AlertIOS, StyleSheet } from 'react-native';
//import Animation from 'lottie-react-native';
//import anim from '../../assets/soda_loader.json';

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

//  componentDidMount() {
//    this.animation.play();
//  }

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
          username: '',
          password: '',
          error: '',
        });
        AlertIOS.alert(
            'Authentication Error!',
            'Username and/or Password not match',
        );
    }
  }

  render() {
    const { error, password, username } = this.state;
    return (
        <View style={styles.container}>
          {/*<View>*/}
            {/*<Animation*/}
                {/*ref={animation => {*/}
                  {/*this.animation = animation;*/}
                {/*}}*/}
                {/*style={{*/}
                  {/*width: 80,*/}
                  {/*height: 80*/}
                {/*}}*/}
                {/*loop={true}*/}
                {/*source={anim}*/}
            {/*/>*/}
          {/*</View>*/}
          <Text style={styles.errorMessage}>{error}</Text>
          <TextInput
              style={styles.usernameInput}
              onChangeText={this._onChangeUsernameInput}
              placeholder="Username"
              value={username}
          />
          <TextInput
              style={styles.passwordInput}
              onChangeText={this._onChangePasswordInput}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
          />
          <Button
              title="Sign In"
              onPress={this._onSubmit}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  usernameInput: {
    backgroundColor: '#D4D8D8',
    width: 200,
    height: 30,
    textAlign: 'center',
    borderRadius: 10,
    margin: 10,
  },
  passwordInput: {
    backgroundColor: '#D4D8D8',
    width: 200,
    height: 30,
    textAlign: 'center',
    borderRadius: 10,
  },
  errorMessage: {
    color: 'red',
  },
});