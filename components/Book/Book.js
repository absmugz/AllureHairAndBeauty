import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body,  Form, Item, Input, Left, Right, Button, Icon, Title, StyleProvider, Footer } from 'native-base';
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';
export default class Book extends Component {
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
            <Title>Book Now</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Name" />
            </Item>
            <Item>
              <Input placeholder="Email" />
            </Item>
            <Item>
              <Input placeholder="Date" />
            </Item>
              <Item>
              <Input placeholder="Time" />
            </Item>
              <Item last>
              <Input placeholder="Style" />
            </Item>
            <Button full info>
            <Text>Book Now</Text>
          </Button>
          </Form>
        </Content>
      </Container>
        </StyleProvider>  
    );
  }
}

