import 'react-native';
import { mount } from 'enzyme';
import React from 'react';
import Contact from '../src/components/Contact';
import renderer from 'react-test-renderer';

describe('Contact', () => {
  describe('#showData', () => {
    it('should render the matching snapshot correctly', () => {
      const app = renderer.create(<Contact/>).toJSON();
      expect(app).toMatchSnapshot();
    });

    it('should show data from the props name chetan email chetan@mail.com image chetan.png', () => {
      const wrapper = mount(<Contact contactName={'chetan'} contactEmail={'chetan@mail.com'} imageURL={'chetan.png'}/>)
      const nameContent = wrapper.find('Text').at(1);
      const emailContent = wrapper.find('Text').at(2);
      expect(nameContent.text()).toEqual('chetan');
      expect(emailContent.text()).toEqual('chetan@mail.com');
    });

    it('should show data from the props name neel email neel@mail.com image chetan.png', () => {
      const wrapper = mount(<Contact contactName={'neel'} contactEmail={'neel@mail.com'} imageURL={'chetan.png'}/>)
      const nameContent = wrapper.find('Text').at(1);
      const emailContent = wrapper.find('Text').at(2);
      expect(nameContent.text()).toEqual('neel');
      expect(emailContent.text()).toEqual('neel@mail.com');
    });
  });
});