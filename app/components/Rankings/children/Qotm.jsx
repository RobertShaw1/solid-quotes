//package dependicies
import React from 'react';
import { Card, Header, Icon } from 'semantic-ui-react';

//local dependicies
require('../../../index.css');

const quote = `"I want to change the world but they won’t give me the source code."`;
const attribution = '-Source Obscure';

export default QOTMCard => (
  <Card color="red" centered={true}>
    <Card.Content header='Quote of the Month' /> 
    <Card.Content description={quote} />
    <Card.Meta>
      <span>{attribution}</span>
    </Card.Meta>
    <Card.Content extra>
      <Icon name='heart outline' color="red" inverted={true} />
    </Card.Content>
  </Card>
)

