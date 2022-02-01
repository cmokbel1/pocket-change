import Navbar from '../../components/NavBar'
import { FormControl, InputLabel, Input, Button, FormHelperText } from '@mui/material'
import { ExpenseCard, ResultCard } from '../../components/ExpenseCard'
import axios from 'axios'
import { React, useState } from 'react'
import { Grid } from '@mui/material'
import { categoryResult, calcSumTotal } from '../../utils/CategoryResult'
import { calcAvail } from '../../utils/AvailableExpendatures'
import './Budget.css'

const Budget = () => {

  const [expenseState, setExpenseState] = useState({
    category: '',
    goalValue: 0,
    actualValue: 0,
    result: 0,
    sum: 0,
    expenses: []
  })

  const [cashFlowState, setCashFlowState] = useState({
    cashFlow: 0,
    goalSavings: 0,
    result: 0,
    available: []
  })
  // by building out the states in the budget page we have negated the need to use an expenseContext and import it, removing confusion. doing this also allows us to compile the functions that we need to use to handle changes in the form.
  const handleAddExpense = (category, actualValue, goalValue) => {
    const expenses = JSON.parse(JSON.stringify(expenseState.expenses))
    let result = categoryResult(actualValue, goalValue);
    expenses.push({ category, goalValue, actualValue, result })
    setExpenseState({ ...expenseState, result, expenses });
  }

  const addAvailableCash = (cashFlow, goalSavings) => {
    const available = JSON.parse(JSON.stringify(cashFlowState.available))
    let result = calcAvail(cashFlow, goalSavings)
    available.push(cashFlow, goalSavings, result)
    setCashFlowState({ ...cashFlowState, result, available })
  }


  const handleInputChange = ({ target: { name, value } }) => setExpenseState({ ...expenseState, [name]: value })
  const handleInputChange2 = ({ target: { name, value } }) => setCashFlowState({ ...cashFlowState, [name]: value })

  /// this is basically the expenseform from the components folder but i circumvented the necessity to import it by building it out on the budget page.

  return (
    <>
      <Navbar />
      <hr />
      <div className='container'>
        <div id="rightAlign">
          <Grid rowSpacing={1} columnSpacing={{ xs: 1 }}>
            <h1>Calculate Cash for Expenses</h1>
            <FormControl>
              <Input name="cashFlow" value={cashFlowState.cashFlow} onChange={handleInputChange2} />
              <FormHelperText>Expendable Income</FormHelperText>
              <Input name="goalSavings" value={cashFlowState.goalSavings} onChange={handleInputChange2} />
              <FormHelperText>% To Save(i.e 15% = 15)</FormHelperText>
              <br />
              <Button disabled={cashFlowState.cashFlow < 1} onClick={() => { addAvailableCash(cashFlowState.cashFlow, cashFlowState.goalSavings) }}>Calculate Available Cash</Button>
              <h6>Available for Expenses: {cashFlowState.result}</h6>
            </FormControl>
          </Grid>
        </div>
        <br></br>
        <div id="leftAlign">
          <h1>Create Your Expense Report</h1>
          <FormControl>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 8 }}>
              <Grid item xs={2}>
                <Input name="category" className="Input" aria-describedby="expense category" value={expenseState.category} onChange={handleInputChange} />
                <FormHelperText >expense category</FormHelperText>
              </Grid>
              <Grid item xs={2}>
                <Input type="number" name="actualValue" className="Input" aria-describedby="actual value" value={expenseState.actualValue} onChange={handleInputChange} />
                <FormHelperText >actual expense</FormHelperText>
              </Grid>
              <Grid item xs={2}>
                <Input type="number" name="goalValue" className="Input" aria-describedby="goal value" value={expenseState.goalValue} onChange={handleInputChange} />
                <FormHelperText >goal expense</FormHelperText>
              </Grid>
              <Grid item xs={2}>
                <Button onClick={
                  () => {
                    handleAddExpense(expenseState.category, expenseState.actualValue, expenseState.goalValue)
                  }} disabled={expenseState.category < 1 | expenseState.goalValue < 1}>Add</Button>
              </Grid>
            </Grid>
          </FormControl>
          <hr />
          <br />
          <br />
          <Grid container>
            {
              expenseState.expenses.map(expense => (
                <ExpenseCard category={expense.category} goalValue={expense.goalValue} actualValue={expense.actualValue} result={expense.result} />
              ))
            }
          </Grid>
          <Button>Budget Summary</Button>

        </div>
      </div>
    </>
  )
}

export default Budget
