const APIKEY = "9427fe043a3825f28e9ad442c7e9847c";
export const baseUrl = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,

  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,

  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,

  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,

  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,

  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,

  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};
export default requests;
