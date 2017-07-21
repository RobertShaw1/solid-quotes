//package dependicies
import React from 'react';
import { Card, Header, Icon } from 'semantic-ui-react';

//local dependicies
require('../../../index.css');

const quote = `"I want to change the world but they won’t give me the source code."`;
const attribution = '-Source Obscure';


export const QOTYCard = () => (
  <Card color="red" >
    <Card.Content header='Quote of the Year'/> 
    <Card.Content description={quote}/>
    <Card.Meta>
      <span>{attribution}</span>
    </Card.Meta>
    <Card.Content extra>
      <Icon name='user' />
      4 Friends
    </Card.Content>
  </Card>
)

