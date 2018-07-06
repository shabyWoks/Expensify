import filterR from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter value', () => {
    const state = filterR(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should setup sortby to amount', () => {
    const state = filterR(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should setup sortby to date', () => {
    const currState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const state = filterR(currState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('should setup text filter', () => {
    const state = filterR(undefined, {
         type: 'SET_TEXT_FILTER',
         text: 'My Text'
    });
    expect(state.text).toBe('My Text');
});

test('should setup start date', () => {
    const state = filterR(undefined, {
         type: 'SET_START_DATE',
         startDate: moment(0)
    });
    expect(state.startDate).toEqual(moment(0));
});

test('should setup end date', () => {
    const state = filterR(undefined, {
         type: 'SET_END_DATE',
         endDate: moment(0)
    });
    expect(state.endDate).toEqual(moment(0));
});