import React from 'react';
import './App.css';
import TopBanner from './header';
import MovieList from './movies';

function App() {
  return (
    <div className="App">
      <div>
        <TopBanner title="Joel Hilton Movies!" />
        <MovieList />
      </div>
    </div>
  );
}

export default App;
