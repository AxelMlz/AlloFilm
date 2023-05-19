import axios from "axios";
import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

function Home() {
const [movies, setMovies] = useState([]);
const [poster, setPoster] = useState();

   async function getData(){
        const res = await axios(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0d213053b4412c4badf1b0e0e9e5bda2`);
        setMovies(res.data.results)
    }

    useEffect(() => {
        getData();
        // setPoster();
        console.log(movies.length);
        console.log(process.env.REACT_APP_API_KEY);

      }, []);

    return ( 
        <>
            {/* return <MovieCard key ={index} /> */}
            <h1>Film</h1>
            {/* <a>{movies[0].title}</a> */}
     

            {movies.map((movie, index) =>{
                 return <div key={index}>
                    
                    {/* <div>{movie.original_title}</div> */}
                    <Link to={`/movie_info/${index + 1}`}>{movie.original_title}</Link>

                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.original_title}/>
                    <a>{movie.overview}</a>
                
                </div>
            })}
           
        </>
     );
}

export default Home;