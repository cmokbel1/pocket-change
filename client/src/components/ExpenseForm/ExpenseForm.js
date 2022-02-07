import { React, useContext } from 'react';

import ExpenseContext from '../../utils/ExpenseContext'

import { FormControl, InputLabel, Input, Button } from '@mui/material'



const ExpenseForm = () => {
  const {
    category,
    goalValue,
    actualValue,
    handleInputChange,
    handleAddExpense,
  } = useContext(ExpenseContext)


  return (
    <>
    <FormControl>
      <div className="mb-3">
        <InputLabel htmlFor="title">Category</InputLabel>
        <Input
          type="text"
          className="form-control"
          name="category"
          value={category}
          onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <InputLabel htmlFor="goal">Goal</InputLabel>
        <Input
          type="text"
          className="form-control"
          name="goal"
          value={goalValue}
          onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <InputLabel htmlFor="actual">Actual</InputLabel>
        <Input
          type="text"
          className="form-control"
          name="goal"
          value={actualValue}
          onChange={handleInputChange} />
      </div>
      <Button
        variant="outlined"
        onClick={handleAddExpense} >
        Add Expense
      </Button>
    </FormControl>
    </>
  )
}

export default ExpenseForm
