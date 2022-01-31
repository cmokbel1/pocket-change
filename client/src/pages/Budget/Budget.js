import Navbar from '../../components/NavBar'
import { FormControl, InputLabel, Input, Button, FormHelperText } from '@mui/material'
import ExpenseCard from '../../components/ExpenseCard'
import axios from 'axios'
import React from 'react'
import  useState  from 'react'

const Budget = () => {
  const [
    categoriesToAdd,
    setCategoriesToAdd,
  ] = React.useState(1);
  const [
    committedCategoriesToAdd,
    setCommittedCategoriesToAdd,
  ] = React.useState(0);

  const addExpense = () => {
    console.log('yepp')
  }

  const CategoryForm = () => [
    <FormControl>
      <Input name="category" aria-describedby="expense category" />
      <FormHelperText id="my-helper-text">expense category</FormHelperText>
      <Input type="number" name="actualValue" aria-describedby="actual value" />
      <FormHelperText id="my-helper-text">actual expense</FormHelperText>
      <Input type="number" name="goalValue" aria-describedby="goal value" />
      <FormHelperText id="my-helper-text">goal expense</FormHelperText>
      <Button onClick={addExpense}>Add</Button>
    </FormControl>
  ]
  return (
    <>
    <Navbar/>
      <hr />
      <FormControl>
        <InputLabel htmlFor="numCategories">Categories</InputLabel>
        <Input name="categories" value={categoriesToAdd} type="number" aria-describedby="number of categories" onChange={(e) =>
          setCategoriesToAdd(
            parseInt(e.currentTarget.value, 10))} />
        <FormHelperText id="my-helper-text">How Many Categories Would You Like to Use</FormHelperText>
        <Button
          onClick={() => {
            setCommittedCategoriesToAdd(
              categoriesToAdd
            );
          }}
        >Confirm</Button>
      </FormControl>
      <div className="container">
        {[...Array(committedCategoriesToAdd)].map((value: undefined, index: number) => (
        <CategoryForm id={index + 1} key={index} />))}
      </div>
      <h1>This is the Budget Page</h1>
    </>
  )
}

export default Budget
