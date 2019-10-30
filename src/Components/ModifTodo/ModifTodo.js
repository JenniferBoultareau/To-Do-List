import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';

function ModifTodo(props) {

  const [newTodo, setNewTodo] = useState('');
  const [newExplication, setNewExplication] = useState('');
  const [newId, setNewId] = useState(undefined);

  useEffect(() => {
    props.body.length > 0 && setNewTodo(props.body[props.index].todo);
    props.body.length > 0 && setNewExplication(props.body[props.index].explication);
    props.body.length > 0 && setNewId(props.body[props.index]._id);
  },[props.index]);


  const submitNewTodo = (todo, explication, id) => {
    axios.put(`http://localhost:8001/todo/${id}`, {
      todo: todo,
      explication: explication
    }).then((result) => {
      console.log(result);
    });
  };

  return (
    <div className="container">
    <div className="allForm">
      <Form className="ui huge form" style={{ width: 700}}>
        <Form.Field 
          label='To Do' 
          control='input' 
          className="inputTitle"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)} 
        />
        <Form.TextArea 
          label='What is it!' 
          value={newExplication}
          onChange={(event) => setNewExplication(event.target.value)}
        />
        <Button 
          color='violet'
          className="ui massive button"
          onClick={() => submitNewTodo(newTodo, newExplication, newId)}
        >
          Enregistrer
        </Button>
      </Form>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  body: state.body,
  index: state.index,
})

export default connect(mapStateToProps)(ModifTodo);