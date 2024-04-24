import React from 'react';
import Article from './components/Article';
import logo from './logo.svg';
import "./App.css"
// import './style/App.scss';
import SupportForm from './components/SupportForm';

function App() {
  return (
    <div className="App ">
      <div className="container">
      <Article />
      <hr/>
      <SupportForm/>
      </div>
    </div>
  );
}

export default App;
