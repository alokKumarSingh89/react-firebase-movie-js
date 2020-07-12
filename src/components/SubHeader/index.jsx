import React from "react";
import { List, ListItem, ListItemText, Box } from "@material-ui/core";
import { Link, useLocation } from "@reach/router";

import { Links } from "../../constant";
import useStyles from "./styles";
import { classname } from "../../utils/utils";

const SubHeader = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <Box className={classname(classes.flexDisplay, classes.fullWidth)}>
      <List component="nav" className={classes.flexDisplay}>
        {Links.primary.map((menu) => (
          <ListItem key={menu.name}>
            <ListItemText className={classes.mainMenu}>
              <Link to={menu.link}>{menu.name}</Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <div className={classes.grow} />
      <List component="nav" className={classes.flexDisplay}>
        {Links.secondary.map((menu) => (
          <ListItem key={menu.name}>
            <ListItemText
              primary={menu.name}
              className={classes.secondaryMenu}
            />
          </ListItem>
        ))}
        <ListItem>
          <ListItemText className={classes.mainMenu}>
            <Link to={"/login-for-admin"}>Signin</Link>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};
export default SubHeader;
