import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { useEffect, useRef, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

const TitleCards = ({ title, api }) => {
  const [apiData, setApiData] = useState([])
  const cardsRef = useRef()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjkzODJlYzZlZGQ0ZTAxOWM2Njc4Mzg0YjRhOGEyNCIsIm5iZiI6MTcyNDQ0NTE1MC4zMjU1NTYsInN1YiI6IjYyMTNkODg4NDRhNDI0MDA2YzZjMjY1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.54G30aYdW8u3v7zmnxu24bknYApru_X5adtih8_oVM4',
    },
  }

  const handleWheel = (e) => {
    e.preventDefault()
    cardsRef.current.scrollLeft += e.deltaY
  }
  useEffect(() => {
    fetch(api, options)
      .then((response) => response.json())
      .then((response) => {
        setApiData(response.results)
        console.log(response.results)
      })
      .catch((err) => console.error(err))
    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className='title-cards'>
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className='card-list' ref={cardsRef}>
        {apiData.map((card) => {
          return (
            <Link to={`/player/${card.id}`} className='card' key={card.id}>
              <img
                src={'https://image.tmdb.org/t/p/w500' + card.backdrop_path}
                alt=''
              />
              <p>{card.original_title}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default TitleCards
