import ReactGA from 'react-ga';
import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Body from './Component/Body/Body';

const TRACKING_ID = "G-ELMNEBP4ZG"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

ReactGA.event({
  category: 'User',
  action: 'Button click for add sum'
});

ReactGA.exception({
  description: 'An error ocurred',
  fatal: true
});


function App() {
  return (
    <div className="container-fluid" style={{width:'auto'}}>
      <div><Header></Header></div>
      <div className="body" style={{width:'auto'}}><Body></Body></div>
      
    </div>
  );
}

export default App;
