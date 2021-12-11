import React from 'react';
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
// Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import TvShow from './components/TvShow';
import NotFound from './components/NotFound';
import Empty from './components/Empty';

// Styles
import { GlobalStyle } from "./GlobalStyle"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:movieId" element={<Movie />} />
        <Route path="tv/:tvId" element={<TvShow />} />
        <Route path="bsiua523hntv2.txt" element={<Empty />}/>
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  ); 
}

export default App;
