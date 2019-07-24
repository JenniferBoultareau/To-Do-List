import React, {useState, useEffect } from 'react';
import { Card, Button } from 'semantic-ui-react';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';
import modifTodo from '../../Actions/modifTodoAction';
import switchView from '../../Actions/switchviewAction';
import { editTodos} from '../../Actions/addTodoAction';

import './Todo.css';

function Todo(props) {

const [todos, setTodos] = useState([]);
  
useEffect(() => {
  getDatas();
}, []);

const getDatas = () => {
  axios.get('http://localhost:8000/todo')
  .then((result) => {
    setTodos(result.data);
    props.dispatch(editTodos(result.data))
  });
};

const removeTodo = (todo) => {
  axios.delete(`http://localhost:8000/todo/${todo._id}`).then((result) => {
    getDatas()
  });
};

const updateTodo = (index) => {
  props.dispatch(modifTodo(index))
  props.dispatch(switchView('ModifTodo'));
};

  return (
    <div className="container">
    {todos.map((todo, index) => {
      return(
        <div className="allCard">
          <Card fluid color="pink">
            <Card.Content>
              <Card.Header className="header">{todo.todo}</Card.Header>
              <Card.Meta className="meta">{moment(todo.timestamp).format('DD/MM/YYYY')}</Card.Meta>
              <Card.Description className="description">{todo.explication}</Card.Description>
            <Button 
              inverted color='blue'
              size='big'
              onClick={() => updateTodo(index)}
            >
              Modifier
            </Button>
            <Button 
              inverted color='blue'
              size='big'
              onClick={() => removeTodo(todo)}
            >
              Supprimer
            </Button>
            </Card.Content>
          </Card>
        </div>
      )
    })}
    </div>
  );
}

const mapStateToProps = state => ({
  view: state.view,
  body: state.body,
});

export default connect(mapStateToProps)(Todo);