import 'react-native';
import { shallow } from 'enzyme';
import React from 'react';
import ContactForm from '../src/components/ContactForm';

describe('Contact From', () => {
  describe('#onChange', () => {
    it('should return the input based on user typing = Rangga', () => {
      const wrapper = shallow(<ContactForm/>);
      const nameInput = wrapper.find('TextInput').at(0);
      nameInput.props().onChangeText('Rangga');
      wrapper.update();
      expect(wrapper.state().nameInput).toEqual('Rangga');
    });

    it('should return the input based on user typing = Bayu', () => {
      const wrapper = shallow(<ContactForm/>);
      const nameInput = wrapper.find('TextInput').at(0);
      nameInput.props().onChangeText('Bayu');
      wrapper.update();
      expect(wrapper.state().nameInput).toEqual('Bayu');
    });

    it('should return the input based on user typing = rangga@gmail.com', () => {
      const wrapper = shallow(<ContactForm/>);
      const nameInput = wrapper.find('TextInput').at(1);
      nameInput.props().onChangeText('rangga@gmail.com');
      wrapper.update();
      expect(wrapper.state().emailInput).toEqual('rangga@gmail.com');
    });

    it('should return the input based on user typing = bayu@gmail.com', () => {
      const wrapper = shallow(<ContactForm/>);
      const nameInput = wrapper.find('TextInput').at(1);
      nameInput.props().onChangeText('bayu@gmail.com');
      wrapper.update();
      expect(wrapper.state().emailInput).toEqual('bayu@gmail.com');
    });
  });

  describe('#onPress', () => {
    it('should callback the function 1 times', () => {
      const mockFunction = jest.fn();
      const wrapper = shallow(<ContactForm contactFormCallback={mockFunction}/>);
      const buttonSubmit = wrapper.find('Button').at(0);
      buttonSubmit.props().onPress();
      expect(mockFunction).toHaveBeenCalledTimes(1);
    });

    it('should callback the function 2 times', () => {
      const mockFunction = jest.fn();
      const wrapper = shallow(<ContactForm contactFormCallback={mockFunction}/>);
      const buttonSubmit = wrapper.find('Button').at(0);
      buttonSubmit.props().onPress();
      buttonSubmit.props().onPress();
      expect(mockFunction).toHaveBeenCalledTimes(2);
    });
  });
});