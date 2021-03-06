import * as actionTypes from './actionTypes.js'

const mutations = {
    [actionTypes.FETCH_EXPENSES]: (state, expenses) => {
        state.expenses = expenses 
    },
    [actionTypes.CREATE_EXPENSE]: (state, expense) => {
        state.expenses.unshift(expense)
    },
    [actionTypes.UPDATE_EXPENSE]: (state, expense) => {
        const indexOfExpense = state.expenses.indexOf(expense)
        state.expenses.splice(indexOfExpense, 1, expense)
    },
    [actionTypes.DELETE_EXPENSE]: (state, id) => {
        state.expenses = state.expenses.filter(expense => expense._id !== id)
    }
  
}



export default mutations