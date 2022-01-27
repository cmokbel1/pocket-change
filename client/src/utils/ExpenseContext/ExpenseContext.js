import { createContext } from "react"

const ExpenseContext = createContext({
  category: '',
  actualValue: '',
  goalValue: '',
  expenses: [],
  handleInputChange: () => { },
  handleAddExpense: () => { }
})

export default ExpenseContext
