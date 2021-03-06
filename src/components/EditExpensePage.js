import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';
import { dirname } from 'path';

export class EditExpensePage extends React.Component{
  onSubmit = (expense) => {
    this.props.onSubmit(this.props.expense.id, expense);
    this.props.history.push('/');
  }
  onClick = () => {
    this.props.onClick({ id: this.props.expense.id });
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={ this.onSubmit }
        />
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (id, expense) => dispatch(editExpense(id, expense)),
    onClick: ({id}) => dispatch(removeExpense({id}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
