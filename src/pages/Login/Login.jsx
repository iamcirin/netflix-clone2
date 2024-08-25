import './Login.css'
import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react'
import { auth, signup, login } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  const [signState, setSignState] = useState('Sign In')
  const [loading, setLoading] = useState(false)

  const [user, setUser] = useState({
    name: '',
    password: '',
    email: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser((prev) => ({ ...prev, [name]: value }))
    console.log(user)
  }

  const user_auth = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (signState == 'Sign In') {
      await login(user.email, user.password)
    } else {
      await signup(user.name, user.email, user.password)
    }
    setLoading(false)
  }
  return loading ? (
    <div className='login-spinner'>
      <img src={netflix_spinner} alt='' />
    </div>
  ) : (
    <div className='login'>
      <img src={logo} alt='' className='login-logo' />
      <div className='login-form'>
        <h1>{signState}</h1>
        <form>
          {signState === 'Sign Up' ? (
            <input
              type='text'
              placeholder='Your name'
              onChange={handleChange}
              value={user.name}
              name='name'
            />
          ) : (
            <></>
          )}

          <input
            type='email'
            placeholder='Email'
            onChange={handleChange}
            value={user.email}
            name='email'
          />
          <input
            type='password'
            placeholder='Password'
            onChange={handleChange}
            value={user.password}
            name='password'
          />
          <button onClick={user_auth} type='submit'>
            {signState}
          </button>
          <div className='form-help'>
            <div className='remember'>
              <input type='checkbox' />
              <label htmlFor=''>Remember Me</label>
            </div>
            <p>Need help ?</p>²
          </div>
        </form>
        <div className='form-switch'>
          {signState === 'Sign In' ? (
            <p>
              New to Netflix ?{' '}
              <span onClick={() => setSignState('Sign Up')}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have account ?{' '}
              <span onClick={() => setSignState('Sign In')}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
export default Login
