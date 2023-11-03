import React from 'react';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Movies from './components/Movies/Movies';
import SavedMovies from './components/SavedMovies/SavedMovies';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Error404 from './components/Error404/Error404';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const navigate = useNavigate();
  // const [isCheckToken, setIsCheckToken] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isWait, setIsWait] = useState(false);

  function logOut() {
    setLoggedIn(false);
    navigate('/');
  }

  return (
      <Routes>
        <Route path='/signin' element={<Login
          name={'signin'}
          isWait={isWait}
          setIsWait={setIsWait}
        />} />
        <Route path='/signup' element={<Register
          name={'signup'}
          isWait={isWait}
          setIsWait={setIsWait}
        />} />
        <Route path='/profile' element={
          <div className='wrapper'>
            <Header
              name={'profile'}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
            />
            <Profile
              name={'profile'}
              isError={isError}
              setIsError={setIsError}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              logOut={logOut}
              isWait={isWait}
              setIsWait={setIsWait}
            />
          </div>
        } />
        <Route path='/' element={
          <div className='wrapper'>
            <Header
              name={'home'}
              loggedIn={loggedIn}
            />
            <Main />
            <Footer />
          </div>
        } />
        <Route path='/movies' element={
          <div className='wrapper'>
            <Header
              name={'movies'}
              loggedIn={loggedIn}
            />
            <Movies
              isWait={isWait}
              setIsWait={setIsWait}
            />
          </div>
        } />
        <Route path='/saved-movies' element={
          <div className='wrapper'>
            <Header
            name={'saved-movies'}
            loggedIn={loggedIn}
            />
            <SavedMovies
              isWait={isWait}
              setIsWait={setIsWait}
            />
          </div>
        } />
        <Route path='*' element={<Error404 />} />
      </Routes>
  );
}

export default App;
