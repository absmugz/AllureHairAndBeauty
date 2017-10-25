/* @flow */

import React from "react";

import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import Drawer from "./Drawer";
import Blog from "../components/Blog/Blog";
import Book from "../components/Book/Book";
import Pricelist from "../components/Pricelist";



const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer },

        Blog: { screen: Blog },
        Book: { screen: Book },
        Pricelist: { screen: Pricelist },
      
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none",
    }
);

export default () =>
    <Root>
        <AppNavigator />
    </Root>;