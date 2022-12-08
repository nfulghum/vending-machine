import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Coke from './Coke';
import Cookies from './Cookies';
import Goldfish from './Goldfish';
import VendingMachine from './VendingMachine';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/'>
          <VendingMachine />
        </Route>
        <Route exact path='/coke'>
          <Coke />
        </Route>
        <Route exact path='/cookies'>
          <Cookies />
        </Route>
        <Route exact path='/goldfish'>
          <Goldfish />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
