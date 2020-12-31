import React from 'react';

/** Hooks */

/** Data */
import { sidebar as sidebarData } from './data';

/** Material ui */
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: '95%',
  },
});

function Sidebar({ user }) {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      <ListItem>
        <img
          src={user.photo}
          alt={user.name}
          style={{ borderRadius: '50%', width: 50, marginRight: 15 }}
        />
        <span style={{ fontSize: '1.2rem', marginRight: 'auto' }}>
          {user.name}
        </span>
      </ListItem>
      {sidebarData.map((item) => (
        <ListItem
          button
          key={item.label}
          component={item.link ? Link : null}
          to={item.link}
        >
          <ListItemIcon>
            <item.icon />
          </ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );
}

export default Sidebar;
