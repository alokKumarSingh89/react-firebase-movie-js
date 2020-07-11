//@ts-check
import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import ThumbUp from "@material-ui/icons/ThumbUp";
const MovieItem = ({ classes, imgUrl, like, name, languages }) => {
  console.log("");
  return (
    <Card className={classes.card} raised>
      <CardActionArea>
        <CardMedia className={classes.media} image={imgUrl} />
        <CardContent className={classes.content}>
          <Grid container justify={"space-between"}>
            <Grid item sm={4} className={classes.icon}>
              <ThumbUp color={"inherit"} />
              <Typography variant="body2" className={classes.voting}>
                {like} Votes
              </Typography>
            </Grid>
            <Grid item sm={7}>
              <Typography variant="subtitle1">{name}</Typography>
              <Typography variant="body2" className={classes.voting}>
                {languages}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default MovieItem;
