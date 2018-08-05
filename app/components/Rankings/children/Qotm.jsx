//package dependicies
import React from 'react';
import { Button, Card, Header, Icon, Rating } from 'semantic-ui-react';

//local dependicies
import '../../../index.css';

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
      <Rating icon='heart' defaultRating={0} maxRating={1} />
      <Button circular color='facebook' icon='facebook' size='tiny' />
      <Button circular color='twitter' icon='twitter' size='tiny' />
      <Button circular color='white' icon={<Rating icon='heart' defaultRating={0} maxRating={1} size="tiny" />} size='tiny' inverted={false}/>
      {/* <Icon name='heart outline' circular={true} color="red" /> */}
    </Card.Content>
  </Card>
)

