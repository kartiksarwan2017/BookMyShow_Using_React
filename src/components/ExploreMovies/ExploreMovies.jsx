import React, { useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import SliderImages from "../SliderImages";
import axios from 'axios';

const API_KEY = "8f708fd09a4addc7173d07c46df205e4";
const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
const imgUrl = "https://image.tmdb.org/t/p/original";

const ExploreMovies = () => {

  const [movies, setMovies] = useState([]);
  const imgPath = `${imgUrl}/`;

  useEffect(() => {

    async function getMoviesList() {

       const {data: {results}} = await axios.get(API_URL);
       setMovies(results);
    }

    getMoviesList();

  }, []);

  return (
    <>
     <SliderImages />

     <Container fluid style={{padding:"5%", background: "pink"}}>

           <h1 style={{color: "black", marginBottom: 20}}>Upcoming Movies</h1>

            <Row style={{textAlign: "center", backgroundColor: "pink"}}>
                {movies.map((mov, index) => 
                <Col id={mov.id} key = {mov.id} xs={6} md={4} lg={3} style={{marginBottom: "2%"}}>
                    <Card style={{height: "550px", width: "300px" , borderRadius: "10px",cursor: "pointer"}} >
                    <Card.Img variant="top" src={`${imgPath}/${mov.poster_path}`} style={{borderRadius: "10px", zIndex: "1"}}/>
                    <Card.Body>
                        <Card.Title>{mov.original_title}</Card.Title>
                        <Card.Text>
                        {mov.release_date}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                )}
                </Row>
            </Container>
    </>
  )
}

export default ExploreMovies;
