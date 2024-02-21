import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen, RegistrationScreen } from './presentation/pages/page_exports';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element = {<LoginScreen />} />
          <Route path='/login' element = {<LoginScreen />} />
          <Route path='/register' element = {<RegistrationScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


