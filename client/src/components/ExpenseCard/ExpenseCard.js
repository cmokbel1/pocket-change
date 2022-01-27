import { Card, CardTitle, CardText } from 'reactstrap'

const ExpenseCard = ({ category, goalValue, actualValue }) => {
  return (
    <Card body color="info">
      <CardTitle tag="h5">{category}</CardTitle>
      <CardText>Goal: {goalValue}</CardText>
      <CardText>Actual: {actualValue}</CardText>
    </Card>
  )
}

export default ExpenseCard
