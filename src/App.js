import React from 'react';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
// import Movies from './components/Movies';
// import SavedMovies from './components/SavedMovies';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Error404 from './components/Error404/Error404';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);

  function logOut() {
    setLoggedIn(false);
    navigate('/');
  }

  return (
        <Routes>
          <Route path='/signin' element={<Login
            name={'signin'}
          />} />
          <Route path='/signup' element={<Register
            name={'signup'}
          />} />
          <Route path='/profile' element={
            <div className='wrapper'>
              <Header
                name={'profile'}
              />
              <Profile
                name={'profile'}
                logOut={logOut}
              />
            </div>
          } />
          <Route path='/' element={
            <div className='wrapper'>
              <Header
                name={'home'}
                // loggedIn={'true'}
                loggedIn={loggedIn}
              />
              <Main />
              <Footer />
            </div>
          } />
          {/* <Route path='/movies' element={<Movies />} /> */}
          {/* <Route path='/saved-movies' element={<SavedMovies />} /> */}
          <Route path='*' element={<Error404 />} />
        </Routes>
  );
}

export default App;
