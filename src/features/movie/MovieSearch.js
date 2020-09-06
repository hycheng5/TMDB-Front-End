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
      owned:[]
    };
  }


  componentDidMount(){
  }
  handleChange = (event) => {
    this.setState({searchInput: event.target.value});
  }
  handleSubmit = (event) => {

    MovieApi.getMovieQuery(this.state.searchInput,(movies)=>{
      MovieApi.checkUserOwnsMovieList(movies,1,(results)=>{
        console.log(results);
        var ownedList = []
        results.forEach((item, i) => {
          ownedList.push(item.movie_id);
        });

        this.setState({
            searchResult:movies,
            owned:ownedList
        });

      });
    });

  }


  render(){
    return(
      <div className = "movieBar">
        <div>
          <label >
            <input className = "movieSearchBox" type="text" name="name" placeholder = "search movie"
               value = {this.state.searchInput} onChange = {this.handleChange} />
          </label>
            <input type="button" value="search" onClick = {this.handleSubmit}/>
        </div>

        <div>
          {this.state.searchResult.length >= 0 ?
            this.state.searchResult.map((item,index) =>
              <MovieElement movie = {item} key = {item.title} owned = {this.state.owned.includes(item.id)}/>
            )
            : null}

        </div>

      </div>
    );
  }
}


export default MovieSearch
