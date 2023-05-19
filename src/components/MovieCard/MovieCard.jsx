import "./MovieCard.scss";
import React from 'react';

const styles = {
  width: "200px",
  margin: "0.3rem",
  cursor: "pointer",
  transition: "transform 0.5s"
}

const MovieCard = ({img}) => {
  return (
    <>
      <img style={styles} src={img} alt="cover" />
   </>
  )
}

export default MovieCard;
