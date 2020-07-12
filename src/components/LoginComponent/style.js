import { makeStyles, createStyles } from "@material-ui/core";
export default makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);
