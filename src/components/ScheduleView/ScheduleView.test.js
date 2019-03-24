import React from 'react';
import { shallow } from 'enzyme';
import ScheduleView from './scheduleView';

describe('<ScheduleView />', () => {
  test('renders', () => {
    const wrapper = shallow(<ScheduleView />);
    expect(wrapper).toMatchSnapshot();
  });
});
