import React from 'react';
import './App.css';
import Home from './pages/Home.js';
import Rooms from './pages/Rooms.js';
import SingleRoom from './pages/SingleRoom.js';
import Error from './pages/Error.js';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/" exact component={Rooms} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
