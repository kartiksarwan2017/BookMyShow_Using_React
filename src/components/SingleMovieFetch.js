import { useEffect, useState } from "react";
import { useParams } from "react-router";
import  Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";
import React from "react";

function SingleMovieFetch() {

    const {movid} = useParams();
    const [singleData, setSingleData] = useState([]);
  
    useEffect(() => {
        
        const getSingleMovies = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/movie/${movid}`);

                // console.log(getSpecificMovies);

                setSingleData([response.data]);
    
                // console.log([getSpecificMovies]);
    
            } catch (error) {
                console.error(error);
            }
        }

        getSingleMovies();

    }, [movid]);

    console.log(singleData);


    return (
        <div>
            <Container  fluid style={{padding:"5%", background:"pink"}}>
                <Row style={{textAlign:"center"}}>
                    {singleData.map((mov, index) => {
                        return (
                            <Col id={mov._id} key={index} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                                <Card>
                                    <Card.Img variant="top" src={mov.imageurl} />
                                    <Card.Body>
                                    <Card.Title>{mov.title}</Card.Title>
                                    <Card.Text>{mov.actor}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )                   
                    })}
                </Row>
            </Container>
        </div>
    );
}


export default SingleMovieFetch;

