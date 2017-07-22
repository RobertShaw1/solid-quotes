//package dependicies
import React from 'react';
import { Grid, Label } from 'semantic-ui-react';

//local dependicies
require('../../index.css');

export default Categories => (
  <div className="categories container">
    <div className="main-categories container">
      <Grid>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Label circular color='red'>1</Label>
        <h3 className="single-category-header">My Header</h3>
        <p>This is some text that will describe the theme of the category.  It should give the user a general idea what the category of quotes should be about.</p>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Label circular color='red'>2</Label>
        <h3 className="single-category-header">My Header</h3>
        <p>This is some text that will describe the theme of the category.  It should give the user a general idea what the category of quotes should be about.</p>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Label circular color='red'>3</Label>
        <h3 className="single-category-header">My Header</h3>
        <p>This is some text that will describe the theme of the category.  It should give the user a general idea what the category of quotes should be about.</p>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Label circular color='red'>4</Label>
        <h3 className="single-category-header">My Header</h3>
        <p>This is some text that will describe the theme of the category.  It should give the user a general idea what the category of quotes should be about.</p>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Label circular color='red'>5</Label>
        <h3 className="single-category-header">My Header</h3>
        <p>This is some text that will describe the theme of the category.  It should give the user a general idea what the category of quotes should be about.</p>
      </Grid.Column>
    </Grid>
    </div>
  </div>
)

