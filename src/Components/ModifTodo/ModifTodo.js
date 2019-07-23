import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';

function ModifTodo(props) {

  const [newTodo, setNewTodo] = useState('');
  const [newExplication, setNewExplication] = useState('');

  useEffect(() => {
    props.body.length > 0 && setNewTodo(props.body[0].todo);
    props.body.length > 0 && setNewExplication(props.body[0].explication);
  }, [props])

  // const submitNewTodo = () => {
  //   axios.put('/todo/:id', {
  //     todo: newTodo,
  //     explication: newExplication
  //   }).then((result) => {
  //     console.log(result);
  //   })
  // }

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
          // onClick={submitNewTodo}
        >
          Enregistrer
        </Button>
      </Form>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  body: state,
})

export default connect(mapStateToProps)(ModifTodo);