import { Card, CardTitle, CardText } from 'reactstrap'

const ExpenseCard = ({ title, goalValue, actualValue }) => {
  return (
    <Card body color="info">
      <CardTitle tag="h5">{title}</CardTitle>
      <CardText>Goal: {goalValue}</CardText>
      <CardText>Actual: {actualValue}</CardText>
    </Card>
  )
}

export default ExpenseCard
