import './App.css';
import Header from './components/Header/Header';
import SliderImages from './components/SliderImages';
import CardsSlider from './components/CardsSlider';
import Premieres from './components/Premieres';
import Footer from './components/Footer/Footer';
import AllMovies from './components/AllMovies';
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
                <AllMovies /> 
                </>
              }
            />
            
            <Route exact path="/"  element={
              <>
            <SliderImages/><CardsSlider/><Premieres/>
              </>}
            /> 
        </Routes>
        <Footer />
    </div>
    </Router>   
  );
}

export default App;
