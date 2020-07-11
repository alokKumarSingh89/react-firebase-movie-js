import { makeStyles, createStyles } from "@material-ui/core";
export default makeStyles((theme) =>
    createStyles({
        flexDisplay: {
            display: "flex",
            "& span ": {
                cursor: "pointer"
            }
        },
        grow: {
            flexGrow: 1
        },
        fullWidth: {
            width: "100%"
        },
        secondaryMenu: {
            color: "rgba(255,255,255,.5)",
            fontSize: 12
        },
        mainMenu: {
            color: "#ccc"
        }
    })
);
