import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import { Card, CardBody, CardFooter, Image, Stack, SimpleGrid } from '@chakra-ui/react';


function Home() {
    const [movies, setMovies] = useState([]);

    async function getData() {
        const res = await axios(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0d213053b4412c4badf1b0e0e9e5bda2`);
        setMovies(res.data.results)
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Outlet />
            <h1 style={{ textAlign: "center" }}>Film</h1>
            <SimpleGrid columns={4} spacingX='40px' spacingY='20px'>

                {movies.map((movie, index) => {

                    return <Card key={index}

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


                            </CardBody>

                            <CardFooter>

                            </CardFooter>
                        </Stack>
                    </Card>

                })}
            </SimpleGrid>

        </>
    );
}

export default Home;