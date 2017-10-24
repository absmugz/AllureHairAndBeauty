/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, StyleProvider, Content, Footer, FooterTab, Drawer} from 'native-base';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';
import SideMenu from './components/sideMenu/SideMenu';
import DrawerExample from "./js/Drawer";


/**
import Blog from "./components/blog/Blog.js";
import Book from "./components/book/Book.js";
 */


import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



export default class App extends Component<{}> {

     closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
    
  
  render() {
    

    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideMenu navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >
        
      <StyleProvider style={getTheme(commonColor)}>
      <Container>
        <Header>
         <Left>
            <Button
            onPress={() => this.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Allure Hair & Beauty</Title>
          </Body>
        </Header>
        
         <Content />
        
         <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
        </StyleProvider>  
        </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
