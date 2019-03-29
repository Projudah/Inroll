import React from 'react';
import { shallow } from 'enzyme';
import PointButton from './PointButton';

describe('<PointButton />', () => {
  test('renders', () => {
    const wrapper = shallow(<PointButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
