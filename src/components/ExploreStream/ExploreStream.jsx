import React, { useEffect, useState } from 'react';
import "./ExploreStream.css";
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import Card from "react-bootstrap/Card";
import {AiFillHeart} from "react-icons/ai";
import Row from '../Row/Row';


const topRated = "top_rated";
const popular = "popular";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const API_KEY = "8f708fd09a4addc7173d07c46df205e4";
const API_URL = `https://api.themoviedb.org/3/movie`;
const imgUrl = "https://image.tmdb.org/t/p/original";

const ExploreStream = () => {

    const [popularmovie, setPopularMovie] = useState([]);
    const [upcomingmovie, setUpcomingMovie] = useState([]);
    const [topratedmovie, setTopRatedMovie] = useState([]);
    const [nowplayingmovie, setNowPlayingMovie] = useState([]);


    const imgPath = `${imgUrl}/`;

    useEffect(() => {

       const topRatedMovies = async () => {
            const {data: {results}} = await axios.get(`${API_URL}/${topRated}?api_key=${API_KEY}`);
            setTopRatedMovie(results);

        }

        topRatedMovies();


      const popularMovies = async () => {
          const {data: {results}} = await axios.get(`${API_URL}/${popular}?api_key=${API_KEY}`);
          setPopularMovie(results);

      }

      popularMovies();

      const upcomingMovies = async () => {
        const {data: {results}} = await axios.get(`${API_URL}/${upcoming}?api_key=${API_KEY}`);
        setUpcomingMovie(results);

    }

    upcomingMovies();


    const nowPlayingMovies = async () => {
      const {data: {results}} = await axios.get(`${API_URL}/${nowPlaying}?api_key=${API_KEY}`);
      setNowPlayingMovie(results);

  }

  nowPlayingMovies();
  
  }, []);

  return (
    <>
      <Carousel fade indicators={false} variant= "dark" style={{height: "480px", width: "100%"}}>
      {
        topratedmovie.map((mov, index) => {
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

    <Row mov={upcomingmovie} title={"Upcoming"} />
    <Row mov={nowplayingmovie} title={"Now Playing"} />
    <Row mov={popularmovie} title={"Popular"} />
    <Row mov={topratedmovie} title={"Top Rated"} />

    </>
  )
}

export default ExploreStream;
