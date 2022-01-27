import { Card, CardTitle, CardText } from 'reactstrap'

const ExpenseCard = ({ category, goalValue, actualValue }) => {
  return (
    <div>
    <Card body color="info">
      <CardTitle tag="h5">{category}</CardTitle>
      <CardText>Goal: {goalValue}</CardText>
      <CardText>Actual: {actualValue}</CardText>
    </Card>
    </div>
  )
}

export default ExpenseCard
