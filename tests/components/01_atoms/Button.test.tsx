import Button from '../../../src/components/01_atoms/button';
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';


describe('<Button />', () => {
  const props = {
    label: 'my input placeholder',
  }
  const wrapper = mount(<Button {...props} />);
  it('should mount', () => {
    expect(wrapper.find('button').first().exists()).to.equal(true);
  });
  it('should have a label', () => {
    expect(wrapper.props().label).to.equal(props.label);
  });
});