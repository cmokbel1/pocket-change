import { Grid, Button } from '@mui/material'
import axios from 'axios'


const ExpenseCard = ({ category, goalValue, actualValue, result, _id }) => {
  const handleRemoveExpense = (id) => {
  axios.delete(`/api/categories/${id}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('user')}`
    }
  }).then(res => { console.log(res) })
} 
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 12 }}>
      <Grid item xs={2}><h6 tag>Category: {category}</h6></Grid>
      <Grid item xs={2}><span>Actual: {actualValue}</span></Grid>
      <Grid item xs={2}><span>Goal: {goalValue}</span></Grid>
      <Grid item xs={2}><span>Result: {result}</span></Grid>
      <Grid item xs={2}><Button onClick = {() => handleRemoveExpense(_id)}>Remove Expense</Button></Grid>
    </Grid>
  )
}

export default ExpenseCard