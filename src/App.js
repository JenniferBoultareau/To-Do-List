import React from 'react';
import { connect } from 'react-redux';
import Menu from './Components/Menu/Menu';
import View from './Components/View/View';
import './App.css';

function App() {
  return (
    <div className="background" >
      <p className="title">TO DO LIST</p>
      <Menu />
      <View />       
    </div>
  );
}

const mapStateToProps = state => ({
  view: state,
});

export default connect(mapStateToProps)(App);
