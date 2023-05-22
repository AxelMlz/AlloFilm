import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardFooter, Image, Stack, Text, Heading } from '@chakra-ui/react';

function MovieInfo() {

  const [movieInfo, setMovieInfo] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { movieId } = useParams();
  console.log(movieId);


  const options = {
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_AUTH
    }
  };

  async function getData() {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, options)
      .then(response => {
        setSelectedMovie(response.data);

        console.log(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  console.log(movieId);
  useEffect(() => {
    getData();
    console.log(movieInfo);
  }, []);


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
              {/* <Text> {selectedMovie.genres[0].id} </Text> */}
              {selectedMovie.genres.map((movie) => {
                <Text >{movie.name}</Text>
              })}
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