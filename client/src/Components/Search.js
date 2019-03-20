import React, {Component} from 'react';

export default class Search extends Component {

    state = {
        movieData: "",
    }
    
render() {

    const {movieData} = this.state;

    return(

    <div id="search-component">
        <input type='text' onChange={(e) => this.setState({movieData:e.target.value})}></input>
        <input type='submit' onClick={() => this.props.search(movieData)}></input>
    </div>






    )
}








}