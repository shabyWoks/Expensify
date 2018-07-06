import React from 'react';
import Header from '../../components/Header';

// import ReactShallowRenderer from 'react-test-renderer/shallow';
// test('should render Header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// });

import {shallow} from 'enzyme';
// test('should render Header correctly', () => {
//     const wrapper = shallow(<Header />);
//     expect(wrapper.find('h1').text()).toBe('Expensify');
// });

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot(); 
});