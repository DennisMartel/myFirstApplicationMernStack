import React from 'react';

//llamando a react-router-dom
import { BrowserRouter as Router, Route} from 'react-router-dom'

//llamando a los compoenetes creados
import Navigation from './components/Navigation'
import CreateNote from './components/CreateNote'
import NotesList from './components/NotesList'
import CreateUser from './components/CreateUser'

//llamando a boostrap
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-3">
        <Route path="/" exact component={NotesList}></Route>
        <Route path="/edit/:id" component={CreateNote}></Route>
        <Route path="/create" component={CreateNote}></Route>
        <Route path="/user" component={CreateUser}></Route>
      </div>
    </Router>
  );
}

export default App;
