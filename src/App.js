import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import Home from './views/home.js';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import MovieInfo from './views/movieInfo';

function App() {
  return (
    <ChakraProvider>
      {/* <h1>AlloFilm</h1> */}
    <div className="App">
      <Home/>
      <MovieInfo/>
    </div>
  </ChakraProvider>
  );
}

export default App;
