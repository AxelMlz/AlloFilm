import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, Divider, Button, Heading, SimpleGrid } from '@chakra-ui/react'

function MovieInfo() {

  const [movieInfo, setMovieInfo] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { movieId } = useParams();
  console.log(movieId);
  const selectedId = movieId
  console.log(selectedId);
  //   async function getData() {
  //     const res = await axios(`https://api.themoviedb.org/3/movie/${movieId}`);
  //     setMovieInfo(res.data.results)
  // }
  async function getData() {
    const res = await axios(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0d213053b4412c4badf1b0e0e9e5bda2`);
    setMovieInfo(res.data.results)
  };


  const options = {
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_AUTH
    }
  };

  async function getData() {
    axios.get(`https://api.themoviedb.org/3/movie/${selectedId}`, options)
      .then(response => {
        // Handle response
        setSelectedMovie(response.data);

        console.log(response.data);
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }

  console.log(selectedId);
  useEffect(() => {
    getData();
    console.log(movieInfo);
  }, []);



  //   const res = await axios.get(movie.url)
  //   setMovieInfo(res.data.results)
  //   console.pog(movieInfo);
  // }



        // <Card key={selectedMovie.id}

        //   direction={{ base: 'column', sm: 'row' }}
        //   overflow='hidden'
        //   variant='outline'
        // >
        //   <CardHeader>
        //     <Heading size='md'>{selectedMovie.original_title}</Heading>
        //   </CardHeader>

        //   <Image
        //     objectFit='cover'
        //     maxW={{ base: '100%', sm: '200px' }}
        //     src={`https://image.tmdb.org/t/p/w300/${selectedMovie.poster_path}`}
        //     alt={`${selectedMovie.original_title}`}
        //   />

        //   <Stack>
        //     <CardBody>

        //       <Text py='2'>
        //         {selectedMovie.overview}
        //       </Text>
        //     </CardBody>

        //     <CardFooter>

        //     </CardFooter>
        //   </Stack>
        // </Card>
  return (
    <>
      {selectedMovie ? (
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={`https://image.tmdb.org/t/p/w300/${selectedMovie.poster_path}`}
              alt={`${selectedMovie.original_title}`}

        />
      
        <Stack>
          <CardBody>
            <Heading size='md'>{selectedMovie.original_title}</Heading>
      
            <Text py='2'>
            {selectedMovie.overview}
            </Text>
          </CardBody>
      
          <CardFooter>
            <Button variant='solid' colorScheme='blue'>
              Buy Latte
            </Button>
          </CardFooter>
        </Stack>
      </Card>

      ) : (
        <h3>Still filming</h3>
      )}
    </>
  );

}
export default MovieInfo;