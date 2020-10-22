import React from 'react'
 
export function MovieList () {
  const Movies =[
    {
      name : "Spiderman" ,
  } , {
     name : "Batman"
  }
  ] 
  return (
    <div>
      <ul>
        {Movies.map((movie) => {
          return (
          <li key={movie.name}>{movie.name}</li>
          )
        })}
      </ul>
    </div>
  )
}