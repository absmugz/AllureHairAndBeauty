/* @flow */

import React from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import Book from "../components/Book/Book";
import Pricelist from "../components/Pricelist";
import SideBar from "../components/sidebar";

const DrawerExample = DrawerNavigator(
  {
    Home: { screen: Home },
    Blog: { screen: Blog },
    Book: { screen: Book },
    Pricelist: { screen: Pricelist }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default DrawerExample;