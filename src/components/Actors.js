import React from "react";
import { actors } from "../data";

function Actors() {
  const actorList = actors.map((actor) =>{
    return(
      <div 
      key={actor.name}>
        <h1>{actor.name}</h1>
        <h3>Movies</h3>
        <ul>
          {actor.movies.map((mov) =>(
            <li
            key={mov}>
              {mov}
            </li>
          ))}
        </ul>
      </div>
    );
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>
  );
}

export default Actors;