import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Body from './Component/Body/Body';

function App() {
  return (
    <div className="container-fluid" style={{width:'auto'}}>
      <div><Header></Header></div>
      <div className="body" style={{width:'auto'}}><Body></Body></div>
      
    </div>
  );
}

export default App;
