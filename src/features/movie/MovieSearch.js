import React from 'react';
import '../../App.css';
import MovieApi from '../../api/MovieApi';
import MovieElement from './MovieElement';
class MovieSearch extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      searchInput:"",
      searchResult:[],
    };
  }


  componentDidMount(){
    //MovieApi.checkUserOwnMovies([{movie_id:99861}],1);
  }
  handleChange = (event) => {
    this.setState({searchInput: event.target.value});
  }
  handleSubmit = (event) => {

    MovieApi.getMovieQuery(this.state.searchInput,(movies)=>{
      this.setState({
          searchResult:movies,
      });
    });

  }


  render(){
    return(
      <div className = "movieBar">
        <div>
          <label >
            <input className = "movieSearchBox" type="text" name="name" placeholder = "search for a movie!"
               value = {this.state.searchInput} onChange = {this.handleChange} />
          </label>
            <input type="button" value="search" onClick = {this.handleSubmit}/>
        </div>

        <div>
          {this.state.searchResult.length >= 0 ?
            this.state.searchResult.map((item, index) =>
              <MovieElement movie = {item} key = {index}/>
            )
            : null}

        </div>

      </div>
    );
  }
}


export default MovieSearch
