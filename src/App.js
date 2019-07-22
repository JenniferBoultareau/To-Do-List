import React from 'react';
import Formulaire from './Components/Formulaire/Formulaire';
import Menu from './Components/Menu/Menu';
import Todo from './Components/Todo/Todo';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="background" >
      <div>
        <p className="title">TO DO LIST</p>
        <Menu />
        <Route path="/create" exact component={Formulaire} />
        <Route path="/todo" exact component={Todo} />
      </div>
    </div>
  );
}

export default App;
