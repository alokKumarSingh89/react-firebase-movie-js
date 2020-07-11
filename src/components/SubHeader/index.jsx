import React from "react";
import { List, ListItem, ListItemText, Box } from "@material-ui/core";
import { Links } from "../../constant";
import useStyles from "./styles";
import { classname } from "../../utils/utils";

const SubHeader = () => {
    const classes = useStyles();
    return (
        <Box className={classname(classes.flexDisplay, classes.fullWidth)}>
            <List component="nav" className={classes.flexDisplay}>
                {Links.primary.map(menu => (
                    <ListItem key={menu.name}>
                        <ListItemText primary={menu.name} className={classes.mainMenu} />
                    </ListItem>
                ))}
            </List>
            <div className={classes.grow} />
            <List component="nav" className={classes.flexDisplay}>
                {Links.secondary.map(menu => (
                    <ListItem key={menu.name}>
                        <ListItemText
                            primary={menu.name}
                            className={classes.secondaryMenu}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};
export default SubHeader;
