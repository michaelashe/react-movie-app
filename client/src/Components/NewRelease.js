import React, {Component} from 'react';
import {key} from '../config/keys';
import axios from 'axios';
import moment from 'moment';

export default class NewRelease extends Component {

    state = {
        newMovies:[]
    }

    componentDidMount() {
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`
        axios.get(url)
            .then(res => {
                this.setState({newMovies:res.data.results}) 
                console.log(this.state.newMovies)
            })
            .catch(err => console.log(err));
        }
            

    render() {
        const {newMovies} = this.state;
        
        return (
            <div className="main">
            <h1>New Releases</h1>
            <div id="movie-wheel">
                {newMovies.map(({id, title, poster_path, release_date}) => (
                    <div id="title-card" key={id}>
                        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
                        <h5>{title}</h5>
                        <h6>{moment(release_date).format('MMM DD YYYY')}</h6>
                    </div>
                ))}
            </div>
            </div>
        )
    }



}