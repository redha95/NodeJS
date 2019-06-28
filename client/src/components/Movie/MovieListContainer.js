import React from 'react';
import MovieList from './MovieList';


class MovieListContainer extends React.Component {

    state = {
        movies: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/movies",{method: "GET", mode:"cors", headers: {
            "Content-Type": "application/json",
            "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJ1c2VyIiwiaWF0IjoxNTYxNTM1NzYyLCJleHAiOjE1NjE1MzkzNjJ9.2LzcVs5-ZZxA3rREIMF-L6Ev0D8-VGzjhplyrrcEUiY"
        }}).then(response => {
            if(response.status === 200){

            } else {
                throw new Error('Fail to fetch');
            }
        }).catch(error => console.log(error.message));
    }

    render() {
        return <MovieList movies={this.state.movies}></MovieList>;
    }
}

export default MovieListContainer;