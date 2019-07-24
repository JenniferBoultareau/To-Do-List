import React from 'react';
import { connect } from 'react-redux';
import Formulaire from '../Formulaire/Formulaire';
import Todo from '../Todo/Todo';
import ModifTodo from '../ModifTodo/ModifTodo';

function View(props) {
  return(
    <div>
      {props.view === 'ModifTodo' && <ModifTodo />}
      {props.view === 'Todo' && <Todo />}
      {props.view === 'Formulaire' && <Formulaire />}
    </div>
  );
}

const mapStateToProps = state => ({
  view: state.view
});

export default connect(mapStateToProps)(View);