import axios from "axios";
import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { Link, Outlet } from "react-router-dom";
import MovieInfo from "./movieInfo";

import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, Divider, Button, Heading } from '@chakra-ui/react'


function Home() {
const [movies, setMovies] = useState([]);
const [poster, setPoster] = useState();

   async function getData(){
        const res = await axios(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0d213053b4412c4badf1b0e0e9e5bda2`);
        setMovies(res.data.results)
    }

    useEffect(() => {
        getData();
    // setPoster(`https://image.tmdb.org/t/p/w300/${movie.poster_path}`);
        console.log(movies.length);
        console.log(process.env.REACT_APP_API_KEY);

      }, []);

    return ( 
        <>
        
            <Outlet/>
            <h1 style={{textAlign : "center"}}>Film</h1>
           
            {movies.map((movie, index) =>{
                
                // return <div key={index} >
                return <Card key = {index}
      
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
    >
    <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt='${movie.overview}'
    />

    <Stack>
        <CardBody>
        <Heading size='md'>{movie.original_title}</Heading>

        <Text py='2'>
        {movie.overview}
        </Text>
        </CardBody>

        <CardFooter>
        <Button variant='solid' colorScheme='blue'>
        <Link to={`/movie_info/${index + 1}`}>More</Link>
            
        </Button>
        </CardFooter>
    </Stack>
</Card>

                    
                    {/* <div>{movie.original_title}</div>
                    <Link  to={`/movie_info/${movie.original_title}`} >
                       <h2 style={{display: "flex"}}>
                        {movie.original_title}
                       </h2>
                        </Link>
                    

                    <img  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.original_title}/>
                    <p>{movie.overview}</p> */}
                
                // </div>
            })}
           
        </>
     );
}

export default Home;