import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Right, Button, Icon, Title, StyleProvider, Footer, Body} from 'native-base';
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';


import TabOne from './tabOne';
import TabTwo from './tabTwo';
import TabThree from './tabThree';


export default class Pricelist extends Component {
  render() {
    return (
          <StyleProvider style={getTheme(commonColor)}>
      <Container>
      
        <Header hasTabs>
         <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Pricelist</Title>
          </Body>
        </Header>
        

        
        <Tabs>
					<Tab heading="Cornrows">
						<TabOne />
					</Tab>
					<Tab heading="Singles">
						<TabTwo />
					</Tab>
					<Tab heading="Weaves">
						<TabThree />
					</Tab>
				</Tabs>
				
      </Container>
       </StyleProvider>  
    );
  }
}
