import { Grid, Button } from '@mui/material'


const ExpenseCard = ({ category, goalValue, actualValue, result }) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 12 }}>
      <Grid item xs={2}><h6 tag>Category: {category}</h6></Grid>
      <Grid item xs={2}><span>Actual: {actualValue}</span></Grid>
      <Grid item xs={2}><span>Goal: {goalValue}</span></Grid>
      <Grid item xs={2}><span>Result: {result}</span></Grid>
      <Grid item xs={2}><Button>Remove Expense</Button></Grid>
    </Grid>
  )
}

export default ExpenseCard