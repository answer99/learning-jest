import React from 'react';
import { shallow } from 'enzyme';
import CheckboxWithLabel from '../src/CheckboxWithLabel';


describe('Test Checkbox', () => {
  describe('Rendering', () => {
    test('snapshot test', () => {
      const checkbox = shallow(<CheckboxWithLabel labOn="On" labelOff="Off" />);
      expect(checkbox).toMatchSnapshot('default off checkoutbox');
      
      checkbox.find('input').simulate('change');
      expect(checkbox).toMatchSnapshot('checkoutbox On');

    });
  });

  describe('functional test', () => {
    test('CheckboxWithLabel change the text after click', () => {
      const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

      expect(checkbox.text()).toEqual('Off');

      checkbox.find('input').simulate('change');
    
      expect(checkbox.text()).toEqual('On');

    });
  });
});
