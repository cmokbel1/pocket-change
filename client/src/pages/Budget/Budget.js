import Navbar from '../../components/NavBar'
import { FormControl, InputLabel, Input, Button, FormHelperText } from '@mui/material'
import ExpenseCard from '../../components/ExpenseCard'
import axios from 'axios'
import { React, useState } from 'react'
import ReactDOM from 'react-dom'
import { Grid } from '@mui/material'
import { categoryResult, calcSumTotal } from '../../utils/CategoryResult'

const Budget = () => {
  const [ categoriesToAdd, setCategoriesToAdd] = useState(0);
  const [ committedCategoriesToAdd, setCommittedCategoriesToAdd] = useState(0);
  const [ renderCardsAdded, setRenderCardsAdded] = useState({
    category: '',
    actualValue: 0,
    goalValue: 0,
    result: 0
  });
  
  // by building out the states in the budget page we have negated the need to use an expenseContext and import it, removing confusion. doing this also allows us to compile the functions that we need to use to handle changes in the form.
  const handleAddExpense =  (category, actualValue, goalValue) => {
    let result = categoryResult(actualValue, goalValue);
    setRenderCardsAdded({...renderCardsAdded, category: category, actualValue, goalValue, result });
  }

  const renderTheCard = () => {
    document.getElementById('renderhere').innerText = 
    <ExpenseCard category={renderCardsAdded.category} actualValue={renderCardsAdded.actualValue} goalValue={renderCardsAdded.goalValue} result={renderCardsAdded.result} />
  }
  const handleInputChange = ({ target: { name, value } }) => setExpenseState({ ...expenseState, [name]: value })

  const [ expenseState, setExpenseState ] = useState({ 
    category: ' ',
    goalValue: 0,
    actualValue: 0,
  })


 /// this is basically the expenseform from the components folder but i circumvented the necessity to import it by building it out on the budget page.
  const CategoryForm = () => [
  

    <FormControl>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
        <Grid item xs={2}>
          <Input name="category" aria-describedby="expense category" value={expenseState.category} onChange={handleInputChange}/>
          <FormHelperText id="my-helper-text-1">expense category</FormHelperText>
        </Grid>
        <Grid item xs={2}>
          <Input type="number" name="actualValue" aria-describedby="actual value" value={expenseState.actualValue} onChange={handleInputChange}/>
          <FormHelperText id="my-helper-text-2">actual expense</FormHelperText>
        </Grid>
        <Grid item xs={2}>
          <Input type="number" name="goalValue" aria-describedby="goal value" value={expenseState.goalValue} onChange={handleInputChange}/>
          <FormHelperText id="my-helper-text-3">goal expense</FormHelperText>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={
            () => {
            handleAddExpense(expenseState.category, expenseState.actualValue, expenseState.goalValue)
            renderTheCard()}}>Add</Button>
        </Grid>
      </Grid>
    </FormControl>
  ]
  return (
    <>
      <Navbar />
      <hr />
      <CategoryForm />
      {/* <FormControl>
        <InputLabel htmlFor="numCategories">Categories</InputLabel>
        <Input name="categories" value={categoriesToAdd} type="number" aria-describedby="number of categories" onChange={(e) =>
          setCategoriesToAdd(
            parseInt(e.currentTarget.value))} />
        <FormHelperText id="my-helper-text">How Many Categories Would You Like to Use</FormHelperText>
        <Button
          onClick={
            () => {
            setCommittedCategoriesToAdd(
              categoriesToAdd
            );
          }}
        >Confirm</Button>
      </FormControl>
      <div id="renderedCategories">
      {[...Array(committedCategoriesToAdd)].map((value: undefined, index: number) => (
        <CategoryForm id={index + 1} key={index} />))}
        </div> */}
      <h1>This is the Budget Page</h1>
      <div id="renderhere"></div>
    </>

  )
}

export default Budget

