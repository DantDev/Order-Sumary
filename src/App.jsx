import React from 'react'
import imgHero from './assets/illustration-hero.svg'
import musicIcon from './assets/icon-music.svg'

function App() {

  return (
      <div className='container'>
          <img className='hero-image' src={imgHero} />
          <div className='info-container'>
          <h1 className='hero-title'>Order Summary</h1>
          <p className='hero-text'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
          <div className='music-container'>
              <img className='music-icon' src={musicIcon} />
              <div className='music-price'>
                <p className='music-price-text'>Annual Plan</p>
                <p className='music-price-value'>$59.99/year</p>
              </div>
              <button className='music-change'>Change</button>
          </div>
          <button className='hero-button'>Proceed to Payment</button>
          <button className='hero-cancel-button'>Cancel Order</button>
          </div>
      </div>
  )
}

export default App
