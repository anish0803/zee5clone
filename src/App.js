import React from 'react'
import Header from './components/Header'

import ImageSlider from './components/ImageSlider'
import {SliderData} from "./components/SliderData"
import MovieDetails from './components/MovieDetails'

function App() {
  return (
    <div>
      <Header />
      
     
     <ImageSlider slides={SliderData} />

     <MovieDetails />

    

      
    </div>
  )
}

export default App
