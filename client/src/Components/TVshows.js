import React, {Component} from 'react';
import {key} from '../config/keys';
import axios from 'axios';
import moment from 'moment';

export default class NewRelease extends Component {

    state = {
        newShows:[]
    }

    componentDidMount() {
        const url = `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`
        axios.get(url)
            .then(res => {
                this.setState({newShows:res.data.results}) 
                console.log(this.state.newShows)
            })
            .catch(err => console.log(err));
        }
            

    render() {
        const {newShows} = this.state;
        
        return (
            <div className="main">
            <h1>Popular TV</h1>
            <div id="movie-wheel">
                {newShows.map(({id, name, poster_path, release_date}) => (
                    <div id="title-card" key={id}>
                        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
                        <h5>{name}</h5>
                        <h6>{moment(release_date).format('MMM DD YYYY')}</h6>
                    </div>
                ))}
            </div>
            </div>
        )
    }



}