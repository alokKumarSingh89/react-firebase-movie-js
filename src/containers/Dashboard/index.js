import React from "react";
import {Grid, Box, Typography} from '@material-ui/core'
import { withFirebase } from "../../firebase/firebaseContext";
import Slider from "../../components/Slider";
import Data from "../../test";
import Container from "../../components/Container";
import RecentSearch from "../../components/RecentSearch"
import Movie from "../../components/Movie";

const MoviesContainer = props => {
    return <Grid container>
        <Grid item sm={12}>
            <Slider data={Data.slider}/>
        </Grid>
        <Grid item sm={12}>
            <Container>
                <Grid container justify="space-between">
                    <Grid item sm={3}>
                        <RecentSearch data={Data.resentSearch}/>
                    </Grid>
                    <Grid item sm={8}>
                        <Typography variant="h5" gutterBottom> Movies</Typography>
                        <Movie data={Data.movies} {...props}/>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    </Grid>;
};

export default withFirebase(MoviesContainer);
