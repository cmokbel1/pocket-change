import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { FormControl, InputLabel, Input, Button } from '@mui/material'
import ExpenseContext from '../../utils/ExpenseContext'
import { useContext } from 'react'

const ExpenseForm = () => {
  const {
    category,
    goalValue,
    actualValue,
    handleInputChange,
    handleAddExpense
  } = useContext(ExpenseContext)


  return (
    <>
      <FormControl>
        <div className='mb-3'>
          <InputLabel htmlFor='title'>Category</InputLabel>
          <Input
            type='text'
            className='form-control'
            name='category'
            value={category}
            onChange={handleInputChange}
          />
        </div>
        <div className='mb-3'>
          <InputLabel htmlFor='goal'>Goal</InputLabel>
          <Input
            type='text'
            className='form-control'
            name='goal'
            value={goalValue}
            onChange={handleInputChange}
          />
        </div>
        <div className='mb-3'>
          <InputLabel htmlFor='actual'>Actual</InputLabel>
          <Input
            type='text'
            className='form-control'
            name='goal'
            value={actualValue}
            onChange={handleInputChange}
          />
        </div>
        <Button
          color='primary'
          onClick={handleAddExpense}
        >
          Add Expense
        </Button>
      </FormControl>
    </>
  )
}

export default ExpenseForm
