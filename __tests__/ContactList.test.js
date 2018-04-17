import 'react-native';
import React from 'react';
import ContactList from '../src/containers/ContactList.container';
import { shallow } from 'enzyme';

describe('ContactList', () => {
  describe('#showData', () => {
    it('should show data based on input state', () => {
      const wrapper = shallow(<ContactList/>);
      wrapper.setState({
        contactData: [
          {
            name: 'Rangga',
            email: 'rangga@gmail.com',
            image: 'rangga.png',
          },
        ],
      });
      const expectedOutput = [
        {
          name: 'Rangga',
          email: 'rangga@gmail.com',
          image: 'rangga.png',
        } ];
      expect(wrapper.state().contactData).toEqual(expectedOutput);
    });

    it('should show data based on input state', () => {
      const wrapper = shallow(<ContactList/>);
      wrapper.setState({
        contactData: [
          {
            name: 'Rangga',
            email: 'rangga@gmail.com',
            image: 'rangga.png',
          },
          {
            name: 'Bayu',
            email: 'Bayu@gmail.com',
            image: 'bayu.png',
          },
        ],
      });
      const expectedOutput = [
        {
          name: 'Rangga',
          email: 'rangga@gmail.com',
          image: 'rangga.png',
        },
        {
          name: 'Bayu',
          email: 'Bayu@gmail.com',
          image: 'bayu.png',
        }, ];
      expect(wrapper.state().contactData).toEqual(expectedOutput);
    });
  });

  describe('#filterList', () => {
    it('should filter the list based on search input from user "Rang"', () => {
      const wrapper = shallow(<ContactList/>);
      wrapper.setState({
        searchInput: 'Rang',
        contactData: [
          {
            name: 'Rangga',
            email: 'rangga@gmail.com',
            image: 'rangga.png',
          },
          {
            name: 'Bayu',
            email: 'Bayu@gmail.com',
            image: 'bayu.png',
          },
        ],
      });
      const expectedOutput = [
        {
          name: 'Rangga',
          email: 'rangga@gmail.com',
          image: 'rangga.png',
        } ];
      const childElemet = wrapper.find('FlatList');
      const childProperty = childElemet.props().data;
      expect(childProperty).toEqual(expectedOutput);
    });

    it('should filter the list based on search input from user "Bay"', () => {
      const wrapper = shallow(<ContactList/>);
      wrapper.setState({
        searchInput: 'Bay',
        contactData: [
          {
            name: 'Rangga',
            email: 'rangga@gmail.com',
            image: 'rangga.png',
          },
          {
            name: 'Bayu',
            email: 'Bayu@gmail.com',
            image: 'bayu.png',
          },
        ],
      });
      const expectedOutput = [
        {
          name: 'Bayu',
          email: 'Bayu@gmail.com',
          image: 'bayu.png',
        } ];
      const childElemet = wrapper.find('FlatList');
      const childProperty = childElemet.props().data;
      expect(childProperty).toEqual(expectedOutput);
    });
  });
});


