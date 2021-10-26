import React from 'react';
import 'normalize.css';
import "./App.css";
import Header from "./Header/Header";
import MainContent from './MainContent/MainContent';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
};

export default App;
