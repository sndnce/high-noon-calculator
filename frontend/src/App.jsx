import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [date, setDate] = useState("")

  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style={{ position: 'absolute' }}>
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#72CBF9" />
          <stop offset="100%" stopColor="#004EFF" />
        </linearGradient>
      </defs>
    </svg>

    <div className="bg">

    
      <div className="title">
        <h1>High Noon Calculator</h1>
      </div>
      
        <div>
          <h1 >It's high noon in Los Angeles!</h1>
          <p className="header-like">00:00</p>

          <p>Welcome to the high noon calculator, your one stop stop for scheduling gun duels* against sworn archenemies. </p>
          <p>Time displayed ehre</p>
          <p>The sun is at it's highest point at Los Angeles, CA!</p>
          <p>The HNC is not responsible for any firearm injuries in shootouts coordinated by the HNC and it's affiliates. Follow state gun safetey laws. </p>
    
          </div>

          <p className="header-this">What is high noon anyway? </p>
          <p>I'm so glad you asked! You might have heard high noon described as preciuesely noon, or when the sun reaches it's highest point in the sky, 
            or maybe(if you like westerns like me...) know it as being the a climactic showdown between two revolver-weilding outlaws! 
            To calculate the High nooons for this website, I have chosen to use the 2nd definiton, of whje the sun is the highest in the sky. 
            <button className="button">
              <a href="https://gml.noaa.gov/grad/solcalc/" target="_blank" rel="noopener noreferrer">
    Source.
              </a>
            </button>
            I have used react for the frontend and python for the backend in fetching correct times, because I wanted to improve my understanding of python!
            Source code can be found on my github repository here: 
          <button className="button">
            <a href="https://github.com/sndnce" target="_blank" rel="noopener noreferrer">
    Github.
            </a>
          </button>
          </p>
          

          <p className="header-this">High Noon Calculator </p>
          <p>Press 'Calculate' to find time until high noon at your location.</p>
          <div classname="submit-boxes"> 
            <input 
              type="text"
              placeholder='Please type your country...'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              list="countries"
            />
            <datalist id="countries">
              <option value='United States' />
            </datalist>
            <input 
              type="text"
              placeholder='Please type your city'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              list="us_cities"
            />
            <datalist id="us_cities">
              <option value='Anchorage' />
              <option value='Atlanta' />
              <option value='Bismark' />
              <option value='Boston' />
              <option value='Chicago' />
              <option value='Dallas' />
              <option value='Denver' />
              <option value='Detroit' />
              <option value='Honolulu' />
              <option value='Los Angeles' />
              <option value='Miami' />
              <option value='New Orleans' />
              <option value='New York' />
              <option value='Omaha' />
              <option value='Portland' />
              <option value='Raleigh' />
              <option value='Saint Paul' />
              <option value='Salt Lake City' />
              <option value='San Francisco' />
              <option value='Seattle' />
              <option value='Phoenix' />
              <option value='Washington' />
            </datalist>
          </div>
          <button className="button" onClick={() => setCount((count) => count + 1)}>
              Locate Me!
          </button>
          <div className="Invite">
            <p>Coordinate a Duel!</p>
            <p>Put in your second, or your oponent's email adress and we will send them an email: you've been invitied to a duel! </p>
            <input 
              type="text"
              placeholder='email address'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              list="countries"
            />
            <input 
              type="text"
              placeholder='select date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              list="dates"
            />
            <datalist id="dates">
              <option value='Today' />
              <option value='Tomorrow' />
            </datalist>
            <input 
              type="text"
              placeholder='Please type your city'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              list="us_cities"
            />
          </div>
          <button className="button" onClick={() => setCount((count) => count + 1)}>
              Send Email
            </button>
      
      <div className="thanks">
        <div className="header-l">
          <p className="header-like">like</p>
          <p className="header-this">this site?</p>
        </div>
        <div>
          <p className="header-tip">Tip your hat!</p>
          <img className="hat" src="hat.png"></img>
          <div>
              <button className="button" onClick={() => setCount((count) => count + 1)}>
                Hat Tips {count}
              </button>
          </div>
        </div>

      </div>

      <div className="footer">
        <p className="footer-quote">“You’all can go to hell. I am going to Texas.”</p>
        <p className="footer-desc"> Davy Crockett after serving three terms as a Tennessee congressman.</p>
      </div>

      </div>
    </>
  )
}

export default App
