import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import DateRange from "@material-ui/icons/DateRange";
import Schedule from "@material-ui/icons/Schedule";
import useStyle from "./styles";
const MovieDetails = ({ id, movies }) => {
  const currentMovies = movies.filter((movie) => movie.id === id).pop();
  const classes = useStyle();
  return (
    <Box>
      <div className={classes.bannerContainer}>
        <div className={classes.banner} />
        <div />
      </div>
      <Box className={classes.contentWrapper}>
        <Grid container>
          <Grid item sm={3}>
            <img src={currentMovies.imgUrl} alt={currentMovies.name} />
          </Grid>
          <Grid item sm={9}>
            <Grid container spacing={2}>
              <Grid sm={12} item>
                <Typography variant="h2" className={classes.title}>
                  {" "}
                  {currentMovies.name}
                </Typography>
              </Grid>
              <Grid sm={12} item>
                <Typography className={classes.language}>
                  {currentMovies.languages}
                </Typography>
              </Grid>
              <Grid item sm={12}>
                {currentMovies.type.map((type) => {
                  return (
                    <Typography
                      key={type}
                      variant="body1"
                      className={classes.movietype}
                    >
                      {type}
                    </Typography>
                  );
                })}
              </Grid>
              <Grid item sm={12}>
                <div className={classes.time}>
                  <DateRange />
                  <Typography>{currentMovies.release_date}</Typography>
                </div>
                <div className={classes.time}>
                  <Schedule />
                  <Typography>{currentMovies.size}</Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.ratingcontainer}></Box>
    </Box>
  );
};
export default MovieDetails;
