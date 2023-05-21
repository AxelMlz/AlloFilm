import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieInfo() {

    const [movieInfo, setMovieInfo] = useState(null);

    const{movieId} = useParams

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {query: `${movieId}`, include_adult: 'false', language: 'en-US', page: '1'},
        headers: {
          accept: 'application/json',
          Authorization: `${process.env.REACT_APP_AUTH}`
        }
      };
      async function getData(){
        console.log(options)
        const res = await axios(options);
        setMovieInfo(res.data.results[0]);
      }
     
    useEffect(() => {
        getData();
        // setPoster();

      }, []);

    return ( 
        <>
        {movieInfo ? (
        <div>

            <a>{movieInfo.original_title}</a>
            <img src={`https://image.tmdb.org/t/p/w300/${movieInfo.poster_path}`} alt={movieInfo.original_title}/>
            <a>{movieInfo.overview}</a>
        </div>
            ): (
                <h2> ON LOAD</h2>
                )}
            </>
    );
}

export default MovieInfo;