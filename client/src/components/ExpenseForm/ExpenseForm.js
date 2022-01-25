import { Form, Label, Input, Button } from 'reactstrap'
import { useContext } from 'react'
import SongContext from '../../utils/SongContext'

const SongForm = () => {
  const {
    title,
    artist,
    album,
    handleInputChange,
    handleAddSong
  } = useContext(SongContext)

  return (
    <Form>
      <div className="mb-3">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          className="form-control"
          name="title"
          value={title}
          onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <Label htmlFor="artist">Artist</Label>
        <Input
          type="text"
          className="form-control"
          name="artist"
          value={artist}
          onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <Label htmlFor="album">Album</Label>
        <Input
          type="text"
          className="form-control"
          name="album"
          value={album}
          onChange={handleInputChange} />
      </div>
      <Button
        color="primary"
        onClick={handleAddSong} >
        Add Song
      </Button>
    </Form>
  )
}

export default SongForm
