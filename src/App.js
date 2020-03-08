import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Event from './Event/Event'
import EventList from './EventList/EventList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={EventList} />
        <Route path='/Event/:post_id' component={Event}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
