import { Card, CardHeader, CardContent } from '@mui/material';
import { Grid } from '@mui/material'

const ExpenseCard = ({ category, goalValue, actualValue }) => {
  return (
    <div>
    <Card body color="info">
      <CardHeader tag="h5">{category}</CardHeader>
      <CardContent>Goal: {goalValue}</CardContent>
      <CardContent>Actual: {actualValue}</CardContent>
    </Card>
    </div>
  )
}

export default ExpenseCard
