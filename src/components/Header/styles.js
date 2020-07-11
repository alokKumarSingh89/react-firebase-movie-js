import {
    fade,
    makeStyles,
    Theme,
    createStyles
} from "@material-ui/core/styles";
import Color from "../../themes/Color";

export default makeStyles((theme) =>
    createStyles({
        header: {
            backgroundColor: Color.main,
            padding: "0 5vw"
        },
        subHeader: {
            backgroundColor: "#1f2533",
            padding: "0 5vw"
        },
        grow: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            display: "none",
            [theme.breakpoints.up("sm")]: {
                display: "block"
            }
        },
        search: {
            position: "relative",
            borderRadius: theme.shape.borderRadius,
            cursor: "pointer",
            color: "#000",
            backgroundColor: fade(theme.palette.common.white, 1),
            "&:hover": {
                backgroundColor: fade(theme.palette.common.white, 0.25)
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(3),
                width: "auto"
            }
        },
        searchIcon: {
            width: theme.spacing(7),
            height: "100%",
            position: "absolute",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        inputRoot: {
            color: "inherit"
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 7),
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("md")]: {
                width: 200
            }
        },
        sectionDesktop: {
            display: "none",
            [theme.breakpoints.up("md")]: {
                display: "flex"
            }
        },
        sectionMobile: {
            display: "flex",
            [theme.breakpoints.up("md")]: {
                display: "none"
            }
        }
    })
);
