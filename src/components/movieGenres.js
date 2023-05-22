import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState, useEffect } from "react";

function MovieGenre() {

    const [categories, setCategories] = useState([]);

    const options = {
      method: 'GET',
      url : 'https://api.themoviedb.org/3/genre/movie/list', 
      params: {language: 'en'},
      headers: {
        accept: 'application/json',
        Authorization: `${process.env.REACT_APP_AUTH}`
      }
    };

    // async function getData(){
    //     const res = await axios({url : 'https://api.themoviedb.org/3/genre/movie/list', options});
    //     setCategories(res.data.genres)
    // };

    async function getData(){

        await axios
        .request(options)
      .then(function (res) {
        setCategories(res.data.genres)

        console.log(res.data.genres);
        console.log(res.data.genres);
      })
      .catch(function (error) {
        console.error(error);
      });
    }

    useEffect(() => {
        getData();
        console.log(categories);
      }, []);
      
      
    return ( 
        <>
        <div>
        </div>
                    <Tabs isManual variant='enclosed'>
                        <TabList>
            {categories.map((categorie) =>{
                        return    <Tab key = {categorie.id}>{categorie.name}</Tab>
                        })}
                        </TabList>
                        <TabPanels>
                            
                        <TabPanel>
                            <p>one!</p>
                        </TabPanel>
                        
                        </TabPanels>
                    </Tabs>
        </>
    )   
}

export default MovieGenre;