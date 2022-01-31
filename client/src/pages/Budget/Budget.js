import Navbar from '../../components/NavBar'
import { FormControl, InputLabel, Input, Button, FormHelperText } from '@mui/material'
import ExpenseCard from '../../components/ExpenseCard'
import axios from 'axios'
import { React, useState } from 'react'
import ReactDOM from 'react-dom'
import { Grid } from '@mui/material'
import { categoryResult, calcSumTotal } from '../../utils/CategoryResult'
import { TextField } from '@mui/material'

const Budget = () => {

  const [expenseState, setExpenseState] = useState({
    category: '',
    goalValue: 0,
    actualValue: 0,
    result: 0,
    expenses: []
  })
  
  // by building out the states in the budget page we have negated the need to use an expenseContext and import it, removing confusion. doing this also allows us to compile the functions that we need to use to handle changes in the form.
  const handleAddExpense =  (category, actualValue, goalValue) => {
    let result = categoryResult(actualValue, goalValue);
    const expenses = JSON.parse(JSON.stringify(expenseState.expenses))

    expenses.push({ category, goalValue, actualValue, result })
    setExpenseState({ ...expenseState, result, expenses });
  }


  const handleInputChange = ({ target: { name, value } }) => setExpenseState({ ...expenseState, [name]: value })


 /// this is basically the expenseform from the components folder but i circumvented the necessity to import it by building it out on the budget page.

  return (
    <>
      <Navbar />
      <hr />
      <FormControl>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
          <Grid item xs={2}>
            <Input name="category" aria-describedby="expense category" value={expenseState.category} onChange={handleInputChange} />
            <FormHelperText >expense category</FormHelperText>
          </Grid>
          <Grid item xs={2}>
            <Input type="number" name="actualValue" aria-describedby="actual value" value={expenseState.actualValue} onChange={handleInputChange} />
            <FormHelperText >actual expense</FormHelperText>
          </Grid>
          <Grid item xs={2}>
            <Input type="number" name="goalValue" aria-describedby="goal value" value={expenseState.goalValue} onChange={handleInputChange} />
            <FormHelperText >goal expense</FormHelperText>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={
              () => {
                handleAddExpense(expenseState.category, expenseState.actualValue, expenseState.goalValue)
              }}>Add</Button>
          </Grid>
        </Grid>
      </FormControl>
      <h1>This is the Budget Page</h1>
      {
        expenseState.expenses.map(expense => (
          <ExpenseCard category={expense.category} goalValue={expense.goalValue} actualValue={expense.actualValue} result={expense.result} />
        )
        )
      
      }
    </>
  )}

export default Budget

