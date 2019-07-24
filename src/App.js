import React from 'react';
import { connect } from 'react-redux';
import Formulaire from './Components/Formulaire/Formulaire';
import Menu from './Components/Menu/Menu';
import Todo from './Components/Todo/Todo';
import View from './Components/View/View';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="background" >
      <div>
        <p className="title">TO DO LIST</p>
        <Menu />
        <View />

      </div>        
    </div>
  );
}

const mapStateToProps = state => ({
  view: state,
});

export default connect(mapStateToProps)(App);
