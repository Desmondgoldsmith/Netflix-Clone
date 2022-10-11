import './App.css';
import Banner from './Components/Banner';
import Rows from './Components/Rows';
import request from './request';
function App() {
  return (
    <div className="App">
      <Banner />
       <Rows title = "Netflix Originals" fetchURL = {request.fetchNetflixOriginals}   
        isLargeRow />
       <Rows title = "Trending Now " fetchURL = {request.fetchTrending}/>
       <Rows title = "Top Rated " fetchURL = {request.fetchNetflixOriginals}/>
       <Rows title = "Action Movies " fetchURL = {request.fetchActionMovies}/>
       <Rows title = "Comedy Movies " fetchURL = {request.fetchComedyMovies}/>
       <Rows title = "Horror Moivies " fetchURL = {request.fetchHorrorMovies}/>
       <Rows title = "Romance Moivies " fetchURL = {request.fetchRomanceMovies}/>
       <Rows title = "Documentaries " fetchURL = {request.fetchDocumentaries}/>
    </div>
  );
}

export default App;

// packages
// npm install axios