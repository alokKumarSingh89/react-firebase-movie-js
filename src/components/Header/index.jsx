import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    InputBase
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles";
import OptionSelection from "../Location";
import SubHeader from "../SubHeader";

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar className={classes.header}>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Cinema Hall
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <OptionSelection type="Location" />
                    <OptionSelection type="Language" />
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                <Toolbar className={classes.subHeader}>
                    <SubHeader />
                </Toolbar>
            </AppBar>
        </div>
    );
}
