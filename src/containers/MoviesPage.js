import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchMovies} from '../actions'

import MoviesList from '../components/MoviesList';

class MoviesPage extends Component {

  componentDidMount(){
    this.props.fetchMovies();
  }

  render(){
    return(
      <div>
        <MoviesList movies={this.props.movies} />
        {this.props.children}
      </div>)
  }
}

function mapStateToProps(state){
  return {
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchMovies: bindActionCreators(fetchMovies, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
