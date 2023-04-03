import React, { useState } from 'react';
import data from './MovieData.json';

const MD = data.MovieData;

function MovieList() {
  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {MD.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Category}</td>
                <td>{m.Rating}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
