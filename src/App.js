import React from 'react';
import { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';
import CurrentUserContext from './context/CurrentUserContext';
import ErrorContext from './context/ErrorContext';
import WaitContext from './context/WaitContext';

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [isError, setIsError] = useState(false);
  const [isWait, setIsWait] = useState(false);
  // const [isCheckToken, setIsCheckToken] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  function logOut() {
    setLoggedIn(false);
    navigate('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <WaitContext.Provider value={isWait}>
        <ErrorContext.Provider value={isError}>
          <Routes>
            <Route path='/signin' element={
            loggedIn ? <Navigate to='/movies' replace /> :
              <Main
                name={'signin'}
                setIsError={setIsError}
                setIsWait={setIsWait} />
            } />
            <Route path='/signup' element={
            loggedIn ? <Navigate to='/movies' replace /> :
              <Main
                name={'signup'}
                setIsError={setIsError}
                setIsWait={setIsWait} />
            } />
            <Route path='/profile' element={
              <div className='wrapper'>
                <Header
                  name={'profile'}
                  isEdit={isEdit}
                  setIsEdit={setIsEdit}
                />
                <Main
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
                <Main name='home'/>
                <Footer />
              </div>
            } />
            <Route path='/movies' element={
              <div className='wrapper'>
                <Header
                  name={'movies'}
                  loggedIn={loggedIn}
                />
                <Main
                  name={'movies'}
                  isWait={isWait}
                  setIsWait={setIsWait}
                  isError={isError}
                  setIsError={setIsError}
                />
                <Footer />
              </div>
            } />
            <Route path='/saved-movies' element={
              <div className='wrapper'>
                <Header
                name={'saved-movies'}
                loggedIn={loggedIn}
                />
                <Main
                  name={'savedmovies'}
                  isWait={isWait}
                  setIsWait={setIsWait}
                  isError={isError}
                  setIsError={setIsError}
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
  );
}

export default App;
