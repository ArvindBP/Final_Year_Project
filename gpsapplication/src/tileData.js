import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

export const mailFolderListItems = (
  <div>
    <ListItem button component={Link} to="/main">
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} to="/main/IndividualInformation">
      <ListItemText primary="Individual Components" />
    </ListItem>
    <ListItem button component={Link} to="/main/SendQuery/">
      <ListItemText primary="Send a Query" />
    </ListItem>
  </div>
);