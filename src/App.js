import './App.css';
import Header from './components/Header/Header';
import SliderImages from './components/SliderImages';
import CardsSlider from './components/CardsSlider';
import Premieres from './components/Premieres';
import Footer from './components/Footer/Footer';
// import AllMovies from './components/AllMovies';
import AllMoviesFetch from './components/AllMoviesFetch';
// import SingleMovie from './components/SingleMovie';
import SingleMovieFetch from './components/SingleMovieFetch';
import Registration from './components/Registration/Registration';
import ExploreMovies from "./components/ExploreMovies/ExploreMovies";
import ExploreStream from "./components/ExploreStream/ExploreStream";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (


    <Router>
      <div>
        <Header />  
       
        <Routes>
    
            <Route exact path="/movies" 
              element={
                <>
                <AllMoviesFetch />
                </>
              }
            />

            <Route exact path="/movies/:movid" 
              element = {
                <>
                <SingleMovieFetch />
                </>
              }
            />
            
            <Route exact path="/"  element={
              <>
            <SliderImages/><CardsSlider/><Premieres/>
              </>}
            /> 

            <Route exact path="/register" element={<Registration />}/>

            <Route exact path= "/explore/movies" element={<ExploreMovies />} />

            <Route exact path="/explore/stream" element= {<ExploreStream />} />
            
        </Routes>
        <Footer />
    </div>
    </Router>   
  );
}

export default App;
