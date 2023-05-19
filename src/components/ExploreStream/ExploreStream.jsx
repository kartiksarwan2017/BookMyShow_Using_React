import React, { useEffect, useState } from 'react';
import "./ExploreStream.css";
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import Card from "react-bootstrap/Card";
import {AiFillHeart} from "react-icons/ai";

const API_KEY = "8f708fd09a4addc7173d07c46df205e4";
const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
const imgUrl = "https://image.tmdb.org/t/p/original";

const ExploreStream = () => {

    const [movies, setMovies] = useState([]);
    const imgPath = `${imgUrl}/`;

    useEffect(() => {

       const getMovies = async () => {
            const {data: {results}} = await axios.get(API_URL);
            setMovies(results);

        }

        getMovies();

    }, []);

  return (
    <>
      <Carousel fade indicators={false} variant= "dark" style={{height: "480px", width: "100%"}}>
      {
        movies.map((mov, index) => {
    return (
        <Carousel.Item 
           key={index} 
           style={{background: `url(${imgPath}/${mov.poster_path})`, backgroundSize: "cover", zIndex: "-3", height: "480px",  backgroundFilter: "blur(1px)"}}>
              <Card 
                 style={{width: "250px" , borderRadius: "10px", cursor: "pointer", position: "relative", top: 54, left: 30}} >
               <Card.Img variant="top" src={`${imgPath}/${mov.poster_path}`} 
               style={{borderRadius: "10px", zIndex: 4}}/>
              </Card>
        <Carousel.Caption>
          <div className='details_container'>
              <h3>{mov.original_title}</h3>
               <p className='rating'>
                <span>
                <AiFillHeart style={{color: "red"}} size={30}/> &nbsp;
                </span>
                {mov.vote_average}
                </p>
               <p>{mov.overview}</p>
          </div>
        </Carousel.Caption>
       </Carousel.Item>
    )
        })
      }
    </Carousel>
    </>
  )
}

export default ExploreStream;
