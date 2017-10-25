import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Left, Right, Button, Icon, Title, StyleProvider, Footer } from 'native-base';
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';
export default class Blog extends Component {
  render() {
    return (
         <StyleProvider style={getTheme(commonColor)}>
      <Container>
       <Header>
         <Left>
            <Button>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Blog</Title>
          </Body>
        </Header>
        <Content>
          <List>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: '../../img/80x80.png' }} />
              <Body>
                <Text>Know your hair</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
      </StyleProvider>  
    );
  }
}
