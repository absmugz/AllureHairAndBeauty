import React from "react";
import { DrawerNavigator } from "react-navigation";

import Book from "../components/Book/Book";
import Blog from "../components/Blog/Blog";

const DrawerExample = DrawerNavigator(
  {
    Book: { screen: Book },
    Blog: { screen: Blog },
  },
  {
    initialRouteName: "Book",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideMenu {...props} />
  }
);

export default DrawerExample;