import React from 'react';
import { shallow } from 'enzyme';
import DashBoardPage from '../../components/DashBoardPage';


test('should render Expense Dashboard ', () => {
    const wrapper = shallow(<DashBoardPage />)

    expect(wrapper).toMatchSnapshot();


})