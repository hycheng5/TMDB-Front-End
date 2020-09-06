import React from 'react';
import '../../App.css';
import MovieApi from '../../api/MovieApi';
let config = require('../../config.json');

class MovieElement extends React.Component{
  constructor(props){
    super(props)
    this.state = {owned:false};
  }

  //add api call to check if use has this spicific movie
  componentDidMount(){
    MovieApi.checkUserOwnsMovie(this.props.movie.id,1,(isOwned) =>{
      if(isOwned == true){
        this.setState({owned:true});
      }
    });
  }
  handleCheckBox = () =>{
    if(this.state.owned){
      MovieApi.removeUserMovie(this.props.movie,1)
      this.setState({owned:false})
    }else{

      MovieApi.addUserMovie(this.props.movie,1)
      this.setState({owned:true})
    }
  }

  render(){
    return(
      <div className = "movieElementContainer">

        <div>
          <h1>
            {this.props.movie.original_title +" "}
            ({this.props.movie.release_date})
          </h1>
          <b>
            Overview:
          </b>
          <h5>
            {this.props.movie.overview}
          </h5>
        </div>
        <div>
          <img
            className = "moviePoster"
            src = {config.moviePoster+this.props.movie.poster_path}>
          </img>
          <div className = "ownedCheckBoxContainer">
            <h1>
              Owned

            </h1>
            <input
              id = "movieCheckBox"
              className = "ownedCheckBox"
              type = "checkbox"
              onClick = {this.handleCheckBox}
              checked = {this.state.owned}
              ></input>
          </div>

        </div>

      </div>
    );
  }
}

export default MovieElement;
