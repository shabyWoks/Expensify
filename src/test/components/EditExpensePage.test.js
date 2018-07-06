import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import {expenses} from '../fixtures/expenses';

let onSubmit, onClick, history, wrapper;

beforeEach(() => {
    onSubmit = jest.fn();
    onClick = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpensePage onSubmit= {onSubmit} onClick={onClick} history={history} expense={expenses[0]} />);
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle on click', () => {
    wrapper.find('button').prop('onClick')();
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onClick).toHaveBeenLastCalledWith({id: expenses[0].id})
});