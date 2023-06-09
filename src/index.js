import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './views/root';
import Home from './views/home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieInfo from './views/movieInfo';
import MovieGenre from './components/movieGenres';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/populaire",
        element: <Home />,
      },
      {
        path: "/movie_info/:movieId",
        element: <MovieInfo />,
      },
      {
        path: "/categories",
        element: <MovieGenre />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();