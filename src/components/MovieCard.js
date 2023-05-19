import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, Divider, Button, Heading } from '@chakra-ui/react'
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function MovieCard(movie, index) {
  const [poster, setPoster] = useState("");



  useEffect(() => {
    setPoster(`https://image.tmdb.org/t/p/w300/${movie.poster_path}`);
    console.log(movie.poster_path)
  }, [])

    return <Card key = {index}
      
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={poster}
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
{/* <Card maxW='sm' key={index}>
  <CardBody>
    <Image
      src='https://image.tmdb.org/t/p/w300/${movie.poster_path}'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{movie.original_title}</Heading>
      <Text>
      {movie.synopsis}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    
      <Button variant='solid' colorScheme='blue'>
        
        More
      </Button>
    
 
  </CardFooter>
</Card> */}
    //  );
}

export default MovieCard;