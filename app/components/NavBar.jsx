//package dependicies
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

//NavBar Component
export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: 'Quote of the Day',
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    return (
      <Menu color="red" inverted widths={3}>
        <Menu.Item as={Link} to="/" name="Quote of the Day" active={activeItem === 'Quote of the Day'} onClick={this.handleItemClick} />

        <Menu.Item as={Link} to="/categories" name="Categories" active={activeItem === 'Categories'} onClick={this.handleItemClick} />

        <Menu.Item as={Link} to="/rankings" name="Rankings" active={activeItem === 'Rankings'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}
