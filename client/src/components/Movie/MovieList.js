import React from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

class MovieList extends React.Component {

    render() {

        return <ul>
            {
                this.props.movies.map((movie,index) => <li>
                    {movie.title}
                </li>)
            }
        </ul>;
    };
}

export default MovieList;