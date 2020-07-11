import React, { useEffect, useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: "11%",
    fontSize: 40,
    fontWeight: "bold",
    textShadow: "-21px 23px 16px #ccc",
    color: "#b1b0b0",
    fontFamily: "cursive",
  },
}));
const PageNotFound = () => {
  const classes = useStyles();
  const [page, showPage] = useState(false);
  useEffect(() => {
    setTimeout(() => showPage(true), 1000);
  }, []);
  return (
    <CSSTransition in={page} timeout={300} unmountOnExit>
      <Box className={classes.root}>Page Not Found</Box>
    </CSSTransition>
  );
};

export default PageNotFound;
