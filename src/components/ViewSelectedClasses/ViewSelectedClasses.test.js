import React from 'react';
import { shallow } from 'enzyme';
import ViewSelectedClasses from './ViewSelectedClasses';

describe('<ViewSelectedClasses />', () => {
  test('renders', () => {
    const wrapper = shallow(<ViewSelectedClasses />);
    expect(wrapper).toMatchSnapshot();
  });
});
