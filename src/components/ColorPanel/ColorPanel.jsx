import React, { Component } from 'react'
import { Sidebar, Menu, Divider, Button } from 'semantic-ui-react';

export default class ColorPanel extends Component {
  render() {
    return (
      <Sidebar as={Menu} inverted vertical visible icon='labeled' width='very thin'>
        <Divider />
        <Button icon='add' size='small' color='blue' />
      </Sidebar>

    )
  }
}
