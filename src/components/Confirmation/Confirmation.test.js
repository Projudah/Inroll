import React from 'react';
import { shallow } from 'enzyme';
import Confirmation from './Confirmation';

describe('<Confirmation />', () => {
  test('renders', () => {
    const wrapper = shallow(<Confirmation />);
    expect(wrapper).toMatchSnapshot();
  });
});
