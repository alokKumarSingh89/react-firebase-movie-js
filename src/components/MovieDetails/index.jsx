import React, { useState } from "react";
import { Box, Grid, Typography, Tabs, Tab } from "@material-ui/core";
import DateRange from "@material-ui/icons/DateRange";
import Schedule from "@material-ui/icons/Schedule";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import useStyle from "./styles";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const MovieDetails = ({ id, movies }) => {
  const currentMovies = movies.filter((movie) => movie.id === id).pop();
  const [tabValue, setTabValue] = useState("0");
  const handleChange = (event, newValue) => {
    // console.log(event.target, newValue);
    setTabValue(newValue);
  };
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
      <Box className={classes.ratingcontainer}>
        <Box>
          <Typography className="rating"> Rating: </Typography>
          {new Array(currentMovies.rating).fill(0).map((like, index) => {
            return <FavoriteBorder key={index} color="error" />;
          })}
          {new Array(5 - currentMovies.rating).fill(0).map((like, index) => {
            return <FavoriteBorder key={index} color="disabled" />;
          })}
        </Box>
      </Box>
      <Box className={classes.desc}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="About Movie" value="0" />
          {/* <Tab label="Item Two" value="1" />
          <Tab label="Item Three" value="2" /> */}
        </Tabs>

        <TabPanel value={tabValue} index="0">
          <Box>
            <Typography variant="body1">{currentMovies.sum}</Typography>
          </Box>
          <Box>
            <Typography variant="caption">Like:{currentMovies.like}</Typography>
            <br />
            <Typography variant="caption">
              DisLike:{currentMovies.dislike}
            </Typography>
          </Box>
        </TabPanel>
        {/* <TabPanel value={tabValue} index="1">
          Item Two
        </TabPanel>
        <TabPanel value={tabValue} index="2">
          Item Three
        </TabPanel> */}
      </Box>
    </Box>
  );
};
export default MovieDetails;
