import 'react-native';
import { mount } from 'enzyme';
import React from 'react';
import Contact from '../src/components/Contact';

describe('Contact', () => {
  describe('#showDataName', () => {
    it('should show data from the props name chetan ', () => {
      const wrapper = mount(<Contact contactName={'chetan'} contactEmail={'chetan@gmail.com'}/>);
      const nameContent = wrapper.find('Text').at(1);
      expect(nameContent.text()).toEqual('chetan');
    });

    it('should show data from the props name neel ', () => {
      const wrapper = mount(<Contact contactName={'neel'} contactEmail={'neel@gmail.com'}/>);
      const nameContent = wrapper.find('Text').at(1);
      expect(nameContent.text()).toEqual('neel');
    });
  });

  describe('#showImageUri', () => {
    it('should show data from the props email chetan@gmail.com', () => {
      const wrapper = mount(<Contact contactName={'chetan'} contactEmail={'chetan@gmail.com'}/>);
      const imageContent = wrapper.find('Image').at(0);
      const imageURI = imageContent.props().source.uri;
      expect(imageURI).toEqual('https://gravatar.com/avatar/f9e2d691518c682722d057e06c29ecee.png?s=200');
    });

    it('should show data from the props email neel@gmail.com', () => {
      const wrapper = mount(<Contact contactName={'chetan'} contactEmail={'neel@gmail.com'}/>);
      const imageContent = wrapper.find('Image').at(0);
      const imageURI = imageContent.props().source.uri;
      expect(imageURI).toEqual('https://gravatar.com/avatar/94edf86d2805e9b0c11a2b8c0eaf3847.png?s=200');
    });
  });
});