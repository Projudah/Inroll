import React from 'react';
import { shallow } from 'enzyme';
import Progress from './Progress';

describe('<Progress />', () => {
  test('renders', () => {
    const wrapper = shallow(<Progress />);
    expect(wrapper).toMatchSnapshot();
  });
});
