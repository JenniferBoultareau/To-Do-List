import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react';
import { connect } from "react-redux";
import { editTodos } from '../../Actions/addTodoAction';

import './Formulaire.css';

function Formulaire(props) {

  const [todo, setTodo] = useState('');
  const [explication, setExplication] = useState('');
  const [todos, setTodos] = useState([]);

  const submitTodo = () => {
    axios.post('http://localhost:8001/todo', {
      todo: todo,
      explication: explication
    }).then((result) => {
    })
    setTodo('');
    setExplication('');
    const temp = { 
      todo: todo,
      explication: explication
    }
    setTodos([...todos, temp]);    
  };

  useEffect(() => {
    props.dispatch(editTodos(todos));
  });

  return (
    <div className="container">
    <div className="allForm">
      <Form className="ui huge form" style={{ width: 700}}>
        <label className="inputLabel">What To Do !</label>
        <Form.Field 
          control='input'
          value={todo}
          onChange={(event) => setTodo(event.target.value)} 
        />
        <label className="inputLabel">What Is It !</label>
        <Form.TextArea  
          value={explication}
          onChange={(event) => setExplication(event.target.value)}
        />
        <Button 
          color='violet'
          className="ui massive button submitButton"
          onClick={submitTodo}
        >
          Enregistrer
        </Button>
      </Form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  body: state
});

export default connect(mapStateToProps)(Formulaire);