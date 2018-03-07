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
      expect(wrapper.state().username.value).toEqual('Rangga');
    });

    it('should change the component state based on user input username = Bayu', () => {
      const wrapper = shallow(<LoginPage/>);
      const usernameTextInput = wrapper.find('TextInput').at(0);
      usernameTextInput.props().onChangeText('Bayu');
      expect(wrapper.state().username.value).toEqual('Bayu');
    });

    it('should change the component state based on user input password = Rangga30', () => {
      const wrapper = shallow(<LoginPage/>);
      const passwordElement = wrapper.find('TextInput').at(1);
      passwordElement.props().onChangeText('Rangga30');
      expect(wrapper.state().password.value).toEqual('Rangga30');
    });

    it('should change the component state based on user input password = Bayu30', () => {
      const wrapper = shallow(<LoginPage/>);
      const passwordElement = wrapper.find('TextInput').at(1);
      passwordElement.props().onChangeText('Bayu30');
      expect(wrapper.state().password.value).toEqual('Bayu30');
    });
  });
});