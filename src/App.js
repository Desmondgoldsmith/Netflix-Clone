import './App.css';
import Rows from './Components/Rows';
import request from './request';
function App() {
  return (
    <div className="App">
      <h1>Big head !</h1>
       <Rows title = "Netflix Originals" fetchURL = {request.fetchNetflixOriginals} />
       <Rows title = "Trending Now " fetchURL = {request.fetchTrending}/>
    </div>
  );
}

export default App;

// packages
// npm install axios