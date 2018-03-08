import 'react-native';
import { shallow } from 'enzyme';
import React from 'react';
import LoginPage from '../src/login/LoginPage';

describe('Login Page', () => {
  describe('#render', () => {
    it('should render the username text input ', () => {
      const wrapper = shallow(<LoginPage/>);
      const usernameTextElement = wrapper.find('TextInput').at(0);
      expect(usernameTextElement.length).toEqual(1);
    });

    it('should render the password input ', () => {
      const wrapper = shallow(<LoginPage/>);
      const passwordElement = wrapper.find('TextInput').at(1);
      expect(passwordElement.length).toEqual(1);
    });

    it('should render the button input ', () => {
      const wrapper = shallow(<LoginPage/>);
      const buttonElement = wrapper.find('Button');
      expect(buttonElement.length).toEqual(1);
    });
  });

  describe('#onChange', () => {
    it('should change the component state based on user input username = Rangga', () => {
      const wrapper = shallow(<LoginPage/>);
      const usernameTextInput = wrapper.find('TextInput').at(0);
      usernameTextInput.props().onChangeText('Rangga');
      expect(wrapper.state().username).toEqual('Rangga');
    });

    it('should change the component state based on user input username = Bayu', () => {
      const wrapper = shallow(<LoginPage/>);
      const usernameTextInput = wrapper.find('TextInput').at(0);
      usernameTextInput.props().onChangeText('Bayu');
      expect(wrapper.state().username).toEqual('Bayu');
    });

    it('should change the component state based on user input password = Rangga30', () => {
      const wrapper = shallow(<LoginPage/>);
      const passwordElement = wrapper.find('TextInput').at(1);
      passwordElement.props().onChangeText('Rangga30');
      expect(wrapper.state().password).toEqual('Rangga30');
    });

    it('should change the component state based on user input password = Bayu30', () => {
      const wrapper = shallow(<LoginPage/>);
      const passwordElement = wrapper.find('TextInput').at(1);
      passwordElement.props().onChangeText('Bayu30');
      expect(wrapper.state().password).toEqual('Bayu30');
    });
  });

  describe('#onSubmit', () => {
    it('should return the error message when user did not type in the username field', () => {
      const wrapper = shallow(<LoginPage/>);
      const buttonElement = wrapper.find('Button').at(0);
      wrapper.setState({
        password: 'Rangga30'
      });
      buttonElement.props().onPress();
      expect(wrapper.state().error).toEqual('Username required')
    });

    it('should return the error message when user did not type in the password field', () => {
      const wrapper = shallow(<LoginPage/>);
      const buttonElement = wrapper.find('Button').at(0);
      wrapper.setState({
        username: 'Rangga'
      });
      buttonElement.props().onPress();
      expect(wrapper.state().error).toEqual('Password required')
    });

    it('should return the error message when user did not type in the password field and username field', () => {
      const wrapper = shallow(<LoginPage/>);
      const buttonElement = wrapper.find('Button').at(0);
      buttonElement.props().onPress();
      expect(wrapper.state().error).toEqual('Username and Password required')
    });

    it('should return the proper navigation when the credential is valid', () => {
      const mockFunction = jest.fn();
      const wrapper = shallow(<LoginPage navigation={{navigate: mockFunction}}/>);
      wrapper.setState({
        username: 'Ahong',
        password: 'Hongky',
      });
      const buttonElement = wrapper.find('Button').at(0);
      buttonElement.props().onPress();
      expect(mockFunction).toHaveBeenCalledTimes(1);
      expect(mockFunction).toHaveBeenCalledWith('ContactList');
    });
  });
});