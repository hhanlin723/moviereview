import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage.js';
import MovieList from './MovieList.js';
import MovieInfoPage from './Pages/MoviePage.js';
import NotFoundPage from './Pages/NotFoundPage.js';

function MyRouter() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movieinfo' element={<MovieInfoPage />} />
        <Route path='/movieindex' element={<MovieList />} />
        <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default MyRouter