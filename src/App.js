import React from 'react'
import Header from './components/Header'

import ImageSlider from './components/ImageSlider'
import {SliderData} from "./components/SliderData"
import MovieDetails from './components/MovieDetails'
import Channels from './components/Channels'



function App() {
  return (
    <div>
      <Header />
      
     
     <ImageSlider slides={SliderData} />

     <MovieDetails />
     <Channels />

    

      
    </div>
  )
}

export default App
