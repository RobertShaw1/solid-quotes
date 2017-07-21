//package dependicies
import React from 'react';
import { Card } from 'semantic-ui-react';

//local dependicies
require('../../index.css');
import QotmCard from './children/Qotm.jsx'
import QotyCard from './children/Qoty.jsx'
import BoatCard from './children/Boat.jsx'

export default Rankings => (
  <div className="ui text center aligned container">
    <h2 className="ui center aligned categories-header">Rankings</h2>
    <div>
      <Card.Group>
        <QotmCard />
        <QotyCard />
        <BoatCard />
      </Card.Group>
    </div>
  </div>
)

