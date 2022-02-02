import axios from 'axios'


const ExpenseActualAPI = {
  getExpensesActual: async function () {
    const { data: expensesActual } = await axios.get('/api/actuals')
    return expensesActual;
  },
  createExpense: async function (data) {
    const { data: expense } = await axios.post('/api/actuals', data.actualValue, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('user')}`
      }
    })
    return expense;
  }
}

module.exports = ExpenseActualAPI