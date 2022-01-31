import { Card, CardTitle, CardText } from 'reactstrap'

const SongCard = ({ title, artist, album }) => {
  return (
    <Card body color="info">
      <CardTitle tag="h5">{title}</CardTitle>
      <CardText>By {artist}</CardText>
      <CardText>Album: {album}</CardText>
    </Card>
  )
}

export default SongCard
