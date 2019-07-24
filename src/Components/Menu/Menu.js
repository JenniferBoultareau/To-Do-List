import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

import './Menu.css';
import switchView from '../../Actions/switchviewAction';

function Menu(props) {
  return(
    <div className="container">
      <div className="menu">
        <Button 
          color='yellow'
          className="ui massive button"
          onClick={() => props.dispatch(switchView('Formulaire'))}
        >
          Créer une TO DO
        </Button>
        <Button 
          color='pink'
          className="ui massive button"
          onClick={() => props.dispatch(switchView('Todo'))}
        >
          Voir les TO DO
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  view: state,
})

export default connect(mapStateToProps)(Menu);