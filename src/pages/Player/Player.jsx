import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: '',
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjkzODJlYzZlZGQ0ZTAxOWM2Njc4Mzg0YjRhOGEyNCIsIm5iZiI6MTcyNDUzMjIxNC43ODU0NTYsInN1YiI6IjYyMTNkODg4NDRhNDI0MDA2YzZjMjY1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GNmlHpfc3yQ_uIwLeoBIuVOcJA_v8BGDr-enmv_g41k',
    },
  }
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt='' onClick={() => navigate(-2)} />
      <iframe
        width='90%'
        height='90%'
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer'
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <div className='player-info'>
        <p>{apiData.published_at.substring(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}
export default Player
