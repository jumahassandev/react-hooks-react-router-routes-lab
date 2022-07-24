import React from "react";
import { movies } from "../data";
const movieItems = movies.map((movie) =>{
  return(
    <div key={movie.title}>
    <h1>Name: {movie.title}</h1>
     <h3>Time: {movie.time}</h3>
     <h3>Genres</h3>
     <ul>
       {movie.genres.map((gen) =>(
         <li
         key={gen}>
           {gen}
         </li>
       ))}
     </ul>
    

  </div>
  );
  
});

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movieItems}
    </div>
  );
}

export default Movies;
