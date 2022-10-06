//API  key
const APIKEY = "1238471f17bd019565164523949d6a5d";


const request ={
   fetchTrending : '/trending/all/week?api_key=${APIKEY}&language=en-US',
   fetchNetflixOriginals : '/discover/tv?api_key=${APIKEYS}&with_network=213',
   fetchTopRated : '/movie/top_rated/api_key=${APIKEY}&language=en-US',
   fetchActionMovies : '/discover/movie?api_key=${APIKEY}&with_genres=28',
   fetchComedyMovies : '/discover/movie?api_key=${APIKEY}&with_genres=32',
   fetchHorrorMovies : '/discover/movie?api_key=${APIKEY}&with_genres=27',
   fetchRomanceMovies : '/discover/movie?api_key=${APIKEY}&with_genres=10749',
   fetchDocumentaries : '/discover/movie?api_key=${APIKEY}&with_genres=99',


}

export default request;