import React from 'react';
import { Button } from 'semantic-ui-react';

import './Menu.css';

function Menu() {
  return(
    <div className="container">
      <div className="menu">
        <Button 
          color='yellow'
          className="ui massive button"
          href="/create"
        >
          Créer une TO DO
        </Button>
        <Button 
          color='pink'
          className="ui massive button"
          href="/todo"
        >
          Voir les TO DO
        </Button>
      </div>
    </div>
  );
}

export default Menu;