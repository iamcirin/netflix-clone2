import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <img src={hero_banner} alt='' className='banner-img' />
        <div className='hero-caption'>
          <img src={hero_title} alt='' className='caption-img' />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy
          </p>
          <div className='hero-btns'>
            <button className='btn'>
              <img src={play_icon} alt='' />
              Play
            </button>
            <button className='btn dark-btn'>
              <img src={info_icon} alt='' />
              More Info
            </button>
          </div>
          <TitleCards
            api={
              'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2'
            }
          />
        </div>
      </div>
      <div className='more-cards'>
        <TitleCards
          title={'Blockbuster Movies'}
          api={
            'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=3'
          }
        />
        <TitleCards
          title={'Only on Netflix'}
          api={
            'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
          }
        />
        <TitleCards
          title={'Upcoming'}
          api={
            'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
          }
        />
        <TitleCards
          title={'Top Pics for You'}
          api={
            'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
          }
        />
      </div>
      <Footer />
    </div>
  )
}
export default Home
