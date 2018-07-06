import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import moment from 'moment';

let setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount, wrapper, filter;

beforeEach(() => {
    setStartDate= jest.fn();
    setEndDate= jest.fn();
    setTextFilter= jest.fn();
    sortByDate= jest.fn();
    sortByAmount= jest.fn();
    filter = {
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
        text: '',
        sortBy: 'date'
    };
    wrapper = shallow(
    <ExpenseListFilters 
        setStartDate={setStartDate} 
        setEndDate={setEndDate} 
        setTextFilter={setTextFilter} 
        sortByDate={sortByDate} 
        sortByAmount={sortByAmount} 
        filters={filter}
        />
    );
});

test('should render expense list filter correctly', () => {
     expect(wrapper).toMatchSnapshot();
});

test('should on date change execute correctly', () => {
    const value = "New Value";
    wrapper.find('input').simulate('change', {
        target: {value: value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    wrapper.find('select').simulate('change', {
        target: {value: 'date'}
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: {value: 'amount'}
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should change the focus when called', () => {
    const calendarFocused = 'startDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});

test('should render correctly on date change', () => {
    const startDate = moment();
    const endDate = moment();
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});