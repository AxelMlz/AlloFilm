import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Dropdown } from 'primereact/dropdown';
import { Card, CardBody, CardFooter, Image, Stack, Text, Heading, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function MovieGenre() {

    const [categories, setCategories] = useState("");
    // const [categories, setCategories] = useState([]);
    const [movies, setMovies] = useState([]);
    console.log(categories);
    let categorie = [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ];


    const options = {
        params: {
            include_adult: 'false',
            include_video: 'false',
            language: 'en-US',
            page: '1',
            sort_by: 'popularity.desc',
            with_genres: { categories }
        },
        headers: {
            accept: 'application/json',
            Authorization: process.env.REACT_APP_AUTH
        }
    };

    async function getData() {
        axios.get(`https://api.themoviedb.org/3/discover/movie`, options)
            .then(response => {
                setMovies(response.data.results);

                console.log(response.data.results);
            })
            .catch(err => {
                console.error(err);
            });
    }
    useEffect(() => {
        getData();
        // getMovies();
        console.log(categories);
    }, [categories]);


    return (
        <>
            <div>

                <Dropdown value={categories} onChange={(e) => setCategories(e.value)} options={categorie} optionLabel="name" showClear editable placeholder="Select a Categorie" className="w-full md:w-14rem" onClick={getData}/>

            </div>

                    <div>

                {movies ? (
                    <SimpleGrid columns={4} spacingX='40px' spacingY='20px'>
                    {
                        movies.map((movie, index) => {

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

                        })
                    }
</SimpleGrid>
) : (
    <h3>Still filming</h3>
    )}
    </div>
        </>
    )
}

export default MovieGenre;