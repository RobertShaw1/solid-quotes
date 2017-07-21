//package dependicies
import React from 'react';
import { Card, Divider } from 'semantic-ui-react';

//local dependicies
require('../../index.css');
import QotmCard from './children/Qotm.jsx'
import QotyCard from './children/Qoty.jsx'
import BoatCard from './children/Boat.jsx'

export default Rankings => (
  <div className="rankings container">
    <h2 className="ui center aligned rankings-header">Rankings</h2>
    <div className="main-rankings container">
      *Central Content*
    </div>
    <Divider className="rankings divider" horizontal>Popular Quotes</Divider>
    <Card.Group>
      <QotmCard />
      <QotyCard />
      <BoatCard />
    </Card.Group>
  </div>
)

