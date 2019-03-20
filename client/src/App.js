import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NewRelease from './Components/NewRelease';
import AppNavbar from './Components/AppNavbar';
import TVShows from './Components/TVshows';
import Search from './Components/Search';
import MovieDetail from './Components/MovieDetail';

class App extends Component {

  state = {
    movieTitle:"",
  }

  render() {
    return (
      <div className="App">
          <AppNavbar />
          <Search search={(title)=> this.setState({movieTitle:title})}/>
          <NewRelease />
          <TVShows />
          {this.state.movieTitle && <MovieDetail title={this.state.movieTitle}/>}
      </div>
    );
  }
}

export default App;
