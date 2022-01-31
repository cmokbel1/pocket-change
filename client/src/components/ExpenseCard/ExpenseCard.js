import { Card, CardHeader, CardContent } from '@mui/material';
import { Grid } from '@mui/material'

const ExpenseCard = ({ category, goalValue, actualValue, result }) => {
  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
        <Card body color="info">
          <h6 tag="h5">Category: {category}</h6>
          <CardContent>Goal: {goalValue}</CardContent>
          <CardContent>Actual: {actualValue}</CardContent>
          <CardContent>Result: {result}</CardContent>
        </Card>
      </Grid>
    </div>
  )
}

export default ExpenseCard
