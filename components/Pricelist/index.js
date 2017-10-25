import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Right, Button, Icon, Title, StyleProvider, Footer} from 'native-base';
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';

export default class Pricelist extends Component {
  render() {
    return (
          <StyleProvider style={getTheme(commonColor)}>
      <Container>
      
        <Header hasTabs>
         <Left>
            <Button>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Pricelist</Title>
          </Body>
        </Header>
        
        <Tabs initialPage={1}>
          <Tab heading="Cornrows">
            <Tab1 />
          </Tab>
          <Tab heading="Singles">
            <Tab2 />
          </Tab>
          <Tab heading="Weaves">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
       </StyleProvider>  
    );
  }
}
