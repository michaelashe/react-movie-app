import React, {Component} from 'react';
import axios from 'axios';
import {key} from '../config/keys';
import moment from 'moment';

export default class MovieDetail extends Component {


    state = {
        searchResults: [],
        hasResults: false,
    }

    searchMovieDb = (title) => {
        let formattedTitle = [];

        title.split('').forEach(letter => {
            if (letter !== ' ') {
                formattedTitle.push(letter)
            } else {
                formattedTitle.push('+')
            }
        });
        title = formattedTitle.join('')

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${title}`

        axios.get(url)
        .then(res => this.setState({searchResults: res.data.results, hasResults: true}))
        .catch(err => console.log(err));
    }
    

    render() {

        const {title} = this.props;
        const {hasResults, searchResults} = this.state;

        return(

            <div>
                {!hasResults ? this.searchMovieDb(title) : 

                    <div>
                        {searchResults.map(movie => (

                           <div key={movie.id}><h1>{movie.title}</h1>                          
                           
                           </div>


                        ))}
                    </div>
                } 
            </div>



        )


    }






}