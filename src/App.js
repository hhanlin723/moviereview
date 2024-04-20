
import React from 'react';
import './App.css'
import NavBar from './Components/NavBar';
import MyRouter from './Components/MyRouter';

const App = () => {
  return (
    <div className="App-header">
     <NavBar />
            
            <MyRouter  />
            {/* {on ? <MyRouter /> : <h2>Cool</h2>} */}
            {/* {on && <MyRouter />} */}
            
            
            {/* <button onClick={handleClick}>Turn On</button> */}
    </div>
  );
};

export default App;