import React from "react";

const MovieList = ({movies}) => <ul>
            {
               movies.map((movie,index) => <li>
                    {movie.title}
                </li>)
            }
        </ul>;

export default MovieList;