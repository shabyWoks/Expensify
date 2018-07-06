import * as filtersF from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
    const action = filtersF.setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = filtersF.setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate set sort by date action object', () => {
    const action = filtersF.sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should generate set sort by amount action object', () => {
    const action = filtersF.sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should generate set text filter default action object', () => {
    const action = filtersF.setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate set text filter action object', () => {
    const action = filtersF.setTextFilter('Shubham');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Shubham'
    });
});
