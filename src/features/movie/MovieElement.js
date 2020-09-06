import React from 'react';
import '../../App.css';
import MovieApi from '../../api/MovieApi';
import defaultImage from '../../images/imagenotfound.png';

let config = require('../../config.json');

class MovieElement extends React.Component{
  constructor(props){
    super(props)
    this.state = {owned:false};
  }

  //when component mounts it should set the current state of
  //ownship to the props value since props should be immutable
  componentDidMount(){
    this.setState({owned:this.props.owned});
  }

  //this checks if the
  handleCheckBox = () =>{
    if(this.state.owned){
      MovieApi.removeUserMovie(this.props.movie,1);
      this.setState({owned:false});
    }else{
      MovieApi.addUserMovie(this.props.movie,1);
      this.setState({owned:true});
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
