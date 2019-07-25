import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import switchView from '../../Actions/switchviewAction';

import './Menu.css';

function Menu(props) {
  return(
    <div className="container">
      <div className="menu">
        <Button 
          color='yellow'
          className="ui massive button menuButton"
          onClick={() => props.dispatch(switchView('Formulaire'))}
        >
          Créer une TO DO
        </Button>
        <Button 
          color='pink'
          className="ui massive button menuButton"
          onClick={() => props.dispatch(switchView('Todo'))}
        >
          Voir les TO DO
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  view: state.view,
});

export default connect(mapStateToProps)(Menu);