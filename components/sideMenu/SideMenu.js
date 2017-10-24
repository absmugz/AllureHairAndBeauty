import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class SideMenu extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem>
              <Text>Book Now!</Text>
            </ListItem>
            <ListItem>
              <Text>Pricelist</Text>
            </ListItem>
            <ListItem>
              <Text>Blog</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}



