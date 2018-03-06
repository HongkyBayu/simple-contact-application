import 'react-native';
import { shallow } from 'enzyme';
import React from 'react';
import SearchContact from '../src/components/SearchContact';

describe('Search Contact', () => {
  describe('#onChange', () => {
    it('should callback the function with the input value Neel', () => {
      const mockFunction = jest.fn();
      const wrapper = shallow(<SearchContact searchNameInput={mockFunction}/>);
      const searchBarInput = wrapper.find('TextInput').at(0);
      searchBarInput.props().onChangeText('Neel');
      expect(mockFunction).toHaveBeenCalledWith('Neel');
    });

    it('should callback the function with the input value DP', () => {
      const mockFunction = jest.fn();
      const wrapper = shallow(<SearchContact searchNameInput={mockFunction}/>);
      const searchBarInput = wrapper.find('TextInput').at(0);
      searchBarInput.props().onChangeText('DP');
      expect(mockFunction).toHaveBeenCalledWith('DP');
    });
  });
});