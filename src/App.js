import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import './App.css';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
