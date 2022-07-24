import React from "react";
import { directors } from "../data";

function Directors() {
  const directorList = directors.map((director) =>{
    return(
      <div 
      key={director.name}
      >
        <h1>Name: {director.name}</h1>
        <h3>Movies</h3>
        <ul>
          {director.movies.map((d) =>(
            <li 
            key={d}>
              {d}
            </li>
          ))}
        </ul>
      </div>
    );
  });
  return(
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  );
}

export default Directors;
