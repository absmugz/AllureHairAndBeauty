import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Text>Blog</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}