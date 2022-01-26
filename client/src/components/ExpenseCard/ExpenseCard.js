import { Card, CardTitle, CardText } from 'reactstrap'

const SongCard = ({ Category, actualValue, goalValue }) => {
  return (
    <Card body color="info">
      <CardTitle tag="h5">{Category}</CardTitle>
      <CardText>Actual: {actualValue}</CardText>
      <CardText>Goal: {goalValue}</CardText>
    </Card>
  )
}

export default SongCard
