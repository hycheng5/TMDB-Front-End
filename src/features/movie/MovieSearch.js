import React from 'react';
import '../../App.css';
import MovieApi from '../../api/MovieApi';
import MovieElement from './MovieElement';
import searchButtonIcon from '../../images/icons8-search-64.png';
class MovieSearch extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      searchInput:"",
      searchResult:[],
      owned:[],
      resultSize:0
    };
  }


  componentDidMount(){
  }
  handleChange = (event) => {
    this.setState({searchInput: event.target.value});
  }
  handleSubmit = (event) => {
    if(this.state.searchInput === ""){
      this.setState({searchResult:[]});
      return;
    }
    MovieApi.getMovieQuery(this.state.searchInput,(movies)=>{
      MovieApi.checkUserOwnsMovieList(movies.results,1,(results)=>{
        var ownedList = []
        results.forEach((item, i) => {
          ownedList.push(item.movie_id);
        });
        this.setState({
            searchResult:movies.results,
            owned:ownedList,
            resultSize:movies.resultSize
        });
      });
    });

  }


  render(){
    return(
      <div className = "movieBar">

        <div >
          <label >
            <input className = "movieSearchBox" type="text" name="name" placeholder = "search movie"
               value = {this.state.searchInput} onChange = {this.handleChange} />
          </label>
          <div className = "movieSearchButton">
            <img
              src = {searchButtonIcon}
              alt = "search button Icon"
              onClick = {this.handleSubmit}/>
          </div>

        </div>

        <div>
          {this.state.searchResult.length > 0 ?
            this.state.searchResult.map((item,index) =>
              <MovieElement movie = {item} key = {item.id} owned = {this.state.owned.includes(item.id)}/>
            )
            :
            <div className ="emptyResult">
              No Search Results...
            </div>
          }
        </div>
        <h2>
          Total Results:
          {" "+this.state.resultSize}
        </h2>
      </div>
    );
  }
}


export default MovieSearch
