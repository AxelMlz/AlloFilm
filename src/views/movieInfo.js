import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, Divider, Button, Heading, SimpleGrid } from '@chakra-ui/react'

function MovieInfo(movie) {

    const [movieInfo, setMovieInfo] = useState(null);

    let {movieId} = useParams();

    // const options = {
    //     method: 'GET',
    //     url: 'https://api.themoviedb.org/3/search/movie',
    //     params: {query: `${movieId}`, include_adult: 'false', language: 'en-US', page: '1'},
    //     headers: {
    //       accept: 'application/json',
    //       Authorization: `${process.env.REACT_APP_AUTH}`
    //     }
    //   };
    //   async function getData(){
    //     console.log(options)
    //     const res = await axios(options);
    //     setMovieInfo(res.data.results[0]);
    //   }
     
    // useEffect(() => {
    //     getData();
    //     // setPoster();

    //   }, []);

    return ( 
        <>
       
        <div>
        <Card key = {movie.id}
      
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
  >
<Link to={`/movie_info/${movie.id}`}>
  <Image
      objectFit='cover'
      maxW={{ base: '100%', sm: '200px' }}
      src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
      alt={`${movie.original_title}`}
      />
      </Link>

  <Stack>
      <CardBody>

      {/* <Text py='2'>
      {movie.overview}
  </Text> */}
      </CardBody>

      <CardFooter>
  <Heading size='md'>{movie.original_title}</Heading>
      {/* <Button variant='solid' colorScheme='blue'>
      <Link to={`/movie_info/${index}`}>More</Link>
      
      </Button> */}
      </CardFooter>
  </Stack>
</Card>
</div>
</>
    );
}

export default MovieInfo;