import React from 'react'
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({ description, amount, createdAt, dispatch, id }) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button onClick={() => dispatch(removeExpense({ id }))}>Remove</button>
    </div>
)

export default connect()(ExpenseListItem)