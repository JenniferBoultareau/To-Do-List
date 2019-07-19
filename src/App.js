import React from 'react';
import Formulaire from './Components/Formulaire/Formulaire';
import Menu from './Components/Menu/Menu';
import Card from './Components/Card/Card';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <div className="background">
        <p className="title">TO DO LIST</p>
        <Menu />
        <Route path="/create" exact component={Formulaire} />
        <Route path="/card" exact component={Card} />
      </div>
    </div>
  );
}

export default App;
