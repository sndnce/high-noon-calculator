import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [country, setCountry] = useState("")
  const [city, SetCity] = useState("")

  return (
    <>
    <div className="bg">

    
      <div className="title">
        <h1>High Noon Calculator</h1>
      </div>
        <div>
          <h1>It's high noon in Los Angeles!</h1>

          <p>Welcome to the high noon calculator, your one stop stop for scheduling gun duels* against sworn archenemies. </p>
          <p>Time displayed ehre</p>
          <p>The sun is at it's highest point at Los Angeles, CA!</p>
          <p>The HNC is not responsible for any firearm injuries in shootouts coordinated by the HNC and it's affiliates. Follow state gun safetey laws. </p>
    
          </div>

          <h1>What is high noon anyway? </h1>
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
          

          <h1>High Noon Calculator </h1>
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
              <option value='Japan' />
            </datalist>
            <input 
              type="text"
              placeholder='Please type your city'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              list="countries"
            />
            <datalist id="countries">
              <option value='United States' />
            </datalist>
          </div>
          <button className="button" onClick={() => setCount((count) => count + 1)}>
              Locate Me!
            </button>
      
      <div className="thanks">
        <div className="col1">
          <p>like</p>
          <p>this site?</p>
        </div>
        <div>
          <p>Tip your hat!</p>
          <img className="hat-img" src="hat.png"></img>
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
