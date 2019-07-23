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
    axios.post('http://localhost:8000/todo', {
      todo: todo,
      explication: explication
    }).then((result) => {
      // console.log(result);
    })
    setTodo('');
    setExplication('');
    const temp = { 
      todo: todo,
      explication: explication
    }
    setTodos([...todos, temp]);    
  }

  useEffect(() => {
    props.dispatch(editTodos(todos));
  });

  return (
    <div className="container">
    <div className="allForm">
      <Form className="ui huge form" style={{ width: 700}}>
        <Form.Field 
          label='To Do' 
          control='input' 
          className="inputTitle"
          value={todo}
          onChange={(event) => setTodo(event.target.value)} 
        />
        <Form.TextArea 
          label='What is it!' 
          value={explication}
          onChange={(event) => setExplication(event.target.value)}
        />
        <Button 
          color='violet'
          className="ui massive button"
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