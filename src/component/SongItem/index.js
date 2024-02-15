import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongItem = props => {
  const {songItem, deleteTrack} = props
  const {id, imageUrl, name, genre, duration} = songItem

  const DeleteSong = () => {
    deleteTrack(id)
  }

  return (
    <li className="list-item">
      <div className="first-container">
        <div>
          <img src={imageUrl} alt="track" className="image" />
        </div>
        <div className="name-container">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-container">
        <p className="duration">{duration}</p>
        <button
          data-testid="delete"
          type="button"
          className="deleteBtn"
          onClick={DeleteSong}
        >
          {' '}
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default SongItem
