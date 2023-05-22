import './App.css';
import Home from './views/home.js';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import MovieInfo from './views/movieInfo';
import MovieGenre from './components/movieGenres';
function App() {
  return (
    <ChakraProvider>
      <MovieGenre/>
      {/* <h1>AlloFilm</h1> */}
    <div className="App">
      <Home/>
      <MovieInfo/>
    </div>
  </ChakraProvider>
  );
}


export default App;
