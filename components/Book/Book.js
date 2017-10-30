import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body,  Form, Item, Input, Left, Right, Button, Icon, Title, StyleProvider, Footer } from 'native-base';
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';

import styles from "./styles";

export default class Book extends Component {

state = {
      name: '',
   }
   handleName = (text) => {
      this.setState({ name: text })
   }
   
   login = (name) => {
      alert('Name: ' + name)
   }
  render() {
    return (
       <StyleProvider style={getTheme(commonColor)}>
       <Container style={styles.container}>
         <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Book Now</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Name" onChangeText = {this.handleName} />
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
            <Button full style={{ backgroundColor: "#f78f76", alignSelf: "center" }}
            onPress = {
                  () => this.login(this.state.name)
               }
               >
            <Text>Book Now</Text>
          </Button>
          </Form>
        </Content>
      </Container>
        </StyleProvider>  
    );
  }
}

