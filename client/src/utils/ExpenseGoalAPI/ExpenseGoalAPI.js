import axios from 'axios'


const ExpenseGoalAPI = {
  getExpensesGoal: async function () {
    const { data: expensesGoal } = await axios.get('/api/goals')
  },
  createExpense: async function (data) {
    const { data: expense } = await axios.post('/api/goals', expense.goalValue, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('user')}`
      }
      return expense;
    })
  }
}

export default ExpenseGoalAPI
