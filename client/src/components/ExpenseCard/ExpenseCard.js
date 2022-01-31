import { Card, CardHeader, CardContent } from '@mui/material';
import { Grid } from '@mui/material'

const ExpenseCard = ({ category, goalValue, actualValue, result }) => {
  return (
    <div>
    <Card body color="info">
      <CardContent tag="h5">Category: {category}</CardContent>
      <CardContent>Goal: {goalValue}</CardContent>
      <CardContent>Actual: {actualValue}</CardContent>
      <CardContent>Result: {result}</CardContent>
    </Card>
    </div>
  )
}

export default ExpenseCard
