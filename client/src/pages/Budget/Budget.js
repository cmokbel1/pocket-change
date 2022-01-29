import Navbar from '../../components/NavBar'
import { FormControl, InputLabel, Input, Button, FormHelperText } from '@mui/material'
import ExpenseCard from '../../components/ExpenseCard'
import axios from 'axios'
import { React, useState } from 'react'
import { Grid } from '@mui/material'
import { categoryResult, calcSumTotal } from '../../utils/CategoryResult'

const Budget = () => {
  const [ categoriesToAdd, setCategoriesToAdd ] = useState(0);
  const [ committedCategoriesToAdd, setCommittedCategoriesToAdd] = useState(0);
  
  const [ expenseState, setExpenseState ] = useState({ 
    category: '',
    goalValue: 0,
    actualValue: 0,
    handleAddExpense: (actualValue, goalValue) => {
      return categoryResult(actualValue, goalValue)
    },
    handleInputChange: ({ target: { name, value } }) => setExpenseState({ ...expenseState, [name]: value }), 
  })



  const CategoryForm = () => [
  

    <FormControl>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
        <Grid item xs={2}>
          <Input name="category" aria-describedby="expense category" value={expenseState.category} onChange={expenseState.handleInputChange}/>
          <FormHelperText id="my-helper-text">expense category</FormHelperText>
        </Grid>
        <Grid item xs={2}>
          <Input type="number" name="actualValue" aria-describedby="actual value" value={expenseState.actualValue} onChange={expenseState.handleInputChange}/>
          <FormHelperText id="my-helper-text">actual expense</FormHelperText>
        </Grid>
        <Grid item xs={2}>
          <Input type="number" name="goalValue" aria-describedby="goal value" value={expenseState.goalValue} onChange={expenseState.handleInputChange}/>
          <FormHelperText id="my-helper-text">goal expense</FormHelperText>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={expenseState.handleAddExpense}>Add</Button>
        </Grid>
      </Grid>
    </FormControl>
  ]
  return (
    <>
      <Navbar />
      <hr />
      <FormControl>
        <InputLabel htmlFor="numCategories">Categories</InputLabel>
        <Input name="categories" value={categoriesToAdd} type="number" aria-describedby="number of categories" onChange={(e) =>
          setCategoriesToAdd(
            parseInt(e.currentTarget.value))} />
        <FormHelperText id="my-helper-text">How Many Categories Would You Like to Use</FormHelperText>
        <Button
          onClick={() => {
            setCommittedCategoriesToAdd(
              categoriesToAdd
            );
          }}
        >Confirm</Button>
      </FormControl>
      {[...Array(committedCategoriesToAdd)].map((value: undefined, index: number) => (
        <CategoryForm id={index + 1} key={index} />))}
      <h1>This is the Budget Page</h1>
    </>
  )
}

export default Budget

