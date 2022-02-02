import { Grid, Button, Input, TextField } from '@mui/material'
import axios from 'axios'
import {useState} from 'react'


const ExpenseCard = ({ category, goalValue, actualValue, result, _id }) => {
  const [cardState, setCardState] = useState(true)
  const [editState, setEditState] = useState({
    actual: '',
    goal: ''
  })
  const handleRemoveExpense = (id) => {
  axios.delete(`/api/categories/${id}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('user')}`
    }
  }).then(res => { console.log(res) 
    setCardState(false)
  })

} 
  const handleEditActual = (id) => {
    let updatedActual = {
      actualValue: editState.actual
    }
    axios.put(`/api/categories/${id}`, updatedActual, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('user')}`
      }
    }).then(res => {
      console.log(res)
    })

  } 
  const handleEditGoal = (id) => {
    let updatedGoal = {
      goalValue: editState.goal
    }
    axios.put(`/api/categories/${id}`, updatedGoal, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('user')}`
      }
    }).then(res => {
      console.log(res)
    })

  } 
  const handleInputChange = ({ target: { name, value } }) => {
    setEditState({ ...editState, [name]: value })
  }
  return (
    <>
    { cardState ? 
      <Grid container rowSpacing = { 1 } columnSpacing = {{ xs: 12 } } >
      <Grid item xs={2}><h6 tag>Category: {category}</h6></Grid>
      <Grid item xs={2}><TextField name= "actual" onChange= {handleInputChange} defaultValue= {actualValue} label= "Actual" ></TextField></Grid>
      <Grid item xs={2}><TextField name="goal" onChange={handleInputChange} defaultValue={goalValue} label= "Goal"></TextField></Grid>
      <Grid item xs={2}><span>Result: {result}</span></Grid>
      <Grid item xs={2}><Button variant="outlined" onClick={() => handleEditActual(_id)}>Update Actual</Button></Grid>
      <Grid item xs={2}><Button variant="outlined" onClick={() => handleEditGoal(_id)}>Update Goal</Button></Grid>
      <Grid item xs={2}><Button variant="outlined" onClick = {() => handleRemoveExpense(_id)}>Remove Expense</Button></Grid>
    </Grid >
    : null }
    </> 
  )


}

export default ExpenseCard