import React from 'react'
import { connect } from 'react-redux'
import { AST_PropAccess } from 'terser';

const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        {props.filters.text}
        {props.expenses.length}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseList)