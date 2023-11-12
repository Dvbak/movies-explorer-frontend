import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';
import CurrentUserContext from './context/CurrentUserContext';
import ErrorContext from './context/ErrorContext';
import WaitContext from './context/WaitContext';
import mainApi from './utils/MainApi';
import Preloader from './components/Preloader/Preloader';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ProtectedPage from './components/ProtectedPage/ProtectedPage';

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [isError, setIsError] = useState(false);
  const [isWait, setIsWait] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [isLuck, setIsLuck] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isCheckToken, setIsCheckToken] = useState(true);

  useEffect(() => {
    if (localStorage.token) {
      Promise.all([mainApi.getUserData(localStorage.token), mainApi.getMovies(localStorage.token)])
        .then(([userData, dataMovies]) => {
          setSavedMovies(dataMovies.reverse())
          setCurrentUser(userData)
          setLoggedIn(true)
          setIsCheckToken(false)
        })
        .catch((err) => {
          console.error(`Ошибка загрузки страницы- ${err}`)
          setIsCheckToken(false)
          localStorage.clear()
        })
    } else {
      setLoggedIn(false)
      setIsCheckToken(false)
      localStorage.clear()
    }
  }, [loggedIn])

  function handleLogin(email, password) {
    setIsWait(true);
    mainApi.authorization(email, password)
      .then(res => {
        localStorage.setItem('token', res.token);
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch((err) => {
        setIsError(true);
        console.error(`Ошибка авторизации- ${err}`)
      })
      .finally(() => setIsWait(false))
  }

  function handleRegister(username, email, password) {
    setIsWait(true)
    mainApi.registration(username, email, password)
      .then((res) => {
        if (res) {
          // setLoggedIn(false);
          handleLogin(email, password);
        }
      })
      .catch((err) => {
        setIsError(true)
        console.error(`Ошибка регистрации- ${err}`)
      })
      .finally(() => setIsWait(false))
  }

  function handleAddMovie(data) {
    const isAddition = savedMovies.some(item => data.id === item.movieId)
    const currentMovie = savedMovies.filter((movie) => {
      return movie.movieId === data.id
    })
    if (isAddition) {
      handleDeleteMovie(currentMovie[0]._id)
    } else {
      mainApi.addMovie(data, localStorage.token)
        .then(res => {
          setSavedMovies([res, ...savedMovies])
        })
        .catch((err) => console.error(`Ошибка при выборе фильма- ${err}`))
    }
  }

  function handleDeleteMovie(deletMovieId) {
    mainApi.deleteMovie(deletMovieId, localStorage.token)
    .then(() => {
      setSavedMovies(savedMovies.filter(item => { return item._id !== deletMovieId }))
    })
    .catch((err) => console.error(`Ошибка при удалении фильма- ${err}`))
  }

  function logOut() {
    localStorage.clear();
    setLoggedIn(false);
    navigate('/');
  }

  return (
    <>
    {isCheckToken ? <Preloader /> :
    <CurrentUserContext.Provider value={currentUser}>
      <WaitContext.Provider value={isWait}>
        <ErrorContext.Provider value={isError}>
          <Routes>
            <Route path='/signin' element={
            loggedIn ? <Navigate to='/movies' replace /> :
              <Main
                name={'signin'}
                onLogin={handleLogin}
                setIsError={setIsError} />
            } />
            <Route path='/signup' element={
            loggedIn ? <Navigate to='/movies' replace /> :
              <Main
                name={'signup'}
                onRegister={handleRegister}
                setIsError={setIsError} />
            } />
            <Route path='/profile' element={
              <div className='wrapper'>
                <ProtectedRoute
                  element={ProtectedPage}
                  name={'profile'}
                  logOut={logOut}
                  loggedIn={loggedIn}
                  setCurrentUser={setCurrentUser}
                  setIsError={setIsError}
                  setIsWait={setIsWait}
                  isEdit={isEdit}
                  setIsEdit={setIsEdit}
                  isLuck={isLuck}
                  setIsLuck={setIsLuck}
                />
              </div>
            } />
            <Route path='/' element={
              <div className='wrapper'>
                <Header
                  name={'home'}
                  loggedIn={loggedIn}
                />
                <Main name='home'/>
                <Footer />
              </div>
            } />
            <Route path='/movies' element={
              <div className='wrapper'>
                <ProtectedRoute
                  element={ProtectedPage}
                  name='movies'
                  loggedIn={loggedIn}
                  setIsError={setIsError}
                  setIsWait={setIsWait}
                  savedMovies={savedMovies}
                  addMovie={handleAddMovie}
                />
                <Footer />
              </div>
            } />
            <Route path='/saved-movies' element={
              <div className='wrapper'>
                <ProtectedRoute
                  element={ProtectedPage}
                  name='savedmovies'
                  loggedIn={loggedIn}
                  setIsError={setIsError}
                  savedMovies={savedMovies}
                  onDelete={handleDeleteMovie}
                />
                <Footer />
              </div>
            } />
            <Route path='*' element={
              <Main name={'error404'} />
            } />
          </Routes>
        </ErrorContext.Provider>
      </WaitContext.Provider>
    </CurrentUserContext.Provider>
  }
  </>
  );
}

export default App;
