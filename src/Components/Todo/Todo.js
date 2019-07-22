import React, {useState, useEffect } from 'react';
import { Card, Button } from 'semantic-ui-react'
import './Todo.css';
import axios from 'axios';
import moment from 'moment';

function Todo() {

const [todos, setTodos] = useState([]);
  
useEffect(() => {
  getDatas();
}, []);

const getDatas = () => {
  axios.get('http://localhost:8000/todo')
  .then((result) => {
    setTodos(result.data);
  })
}

const removeTodo = (todo) => {
  axios.delete(`http://localhost:8000/todo/${todo._id}`).then((result) => {
    getDatas()
  })
}

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

export default Todo;