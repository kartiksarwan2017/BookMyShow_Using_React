import  Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";


function AllMoviesFetch() {

    const [data, setData] = useState([]);

    useEffect(() => {

        async function getMovies(){

            try {
                const response = await axios.get('https://book-my-show-node-js-express-seven.vercel.app/movies');
                
                console.log(response);
                setData(response.data);
    
            } catch (error) {
                console.error(error);
            }
        }

        getMovies();
        
    }, []);


    return (
        <div>
            <Container fluid style={{padding:"5%", background: "pink"}}>
            <Row style={{textAlign: "center"}}>

                {data.map((movee) => {
                return(
                <Col id={movee._id} key = {movee._id} xs={6} md={4} lg={3} style={{marginBottom: "2%"}}>
                    <Card style={{cursor: "pointer"}} onClick={() => window.location.href="/movies/" + movee._id}>
                    <Card.Img variant="top" src={movee.imageurl}/>
                    <Card.Body>
                        <Card.Title>{movee.title}</Card.Title>
                        <Card.Text>
                        {movee.actor}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                )})}
                </Row>
            </Container>
        </div>
    );
}


export default AllMoviesFetch;

