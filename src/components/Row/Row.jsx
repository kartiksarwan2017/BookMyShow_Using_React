import "./Row.scss";
import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
const imgUrl = "https://image.tmdb.org/t/p/original";

const Row = ({mov = [], title}) => {
  return (
    <>
      <div className='row'>

        <h2>{title}</h2>

        <div>
            {mov.map((movie, index) => 
 
                <MovieCard key={index} img={`${imgUrl}/${movie.poster_path}`} />
       
            )}
        </div>
      </div>
    </>
  )
}

export default Row;
