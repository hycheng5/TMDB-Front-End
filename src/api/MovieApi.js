import axios from 'axios';


let config = require('../config.json');

class MovieApi{

  //Recieves the given word and uses the search api provided by The Movie Database

  static getMovieQuery(input,callback){
    var url = config.movieDbSearchStart + input + config.movieDbSearchEnd;
    axios({
      method:'get',
      url: url

    }).then(res=>{
      var results = res.data.results.slice(0,10);

      callback(results);
    })
  }

  static checkUserOwnsMovie(movieId,userId,callback){
    console.log("checking");

    var url = config.apiUrl+'check_user_owns_movie';
    axios({
      method:'post',
      url: url,
      params: {
        'movie_id':movieId,
        'user_id': userId
      }
    }).then(res=>{
      console.log(res.data);
      callback(res.data);
    })
  }

  //add movie to users owned list
  static addUserMovie(movie,userId){
    var url = config.apiUrl+'add_movie';
    axios({
      method:'post',
      url: url,
      params: {
        "movie_id":movie.id,
        "overview":movie.overview,
        "releaseDate":movie.release_date,
        "title":movie.original_title,
        "user_id": userId
      }
    }).then(res=>{
      var results = res;
    })
  }
  static removeUserMovie(movie,userId){
    var url = config.apiUrl+'remove_movie';
    axios({
      method:'post',
      url: url,
      params: {
        "movie_id":movie.id,
        user_id:userId

      }
    }).then(res=>{
      console.log(res)
    }) }


}


export default MovieApi;