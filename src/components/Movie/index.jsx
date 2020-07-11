import React from 'react';
import {Grid} from "@material-ui/core";
import MovieItem from "./MovieItem";
import useStyle from "./styles"
const Movie = ({data,navigate}) =>{
    const classes = useStyle();
    const onShowMovieDetails = (id) =>{
        navigate("/movie/"+id);
    }
    return(
        <Grid container justify="space-between" spacing={2}>
            {
                data.map(item=>(
                    <Grid key={item.id} item sm={4} onClick={()=>onShowMovieDetails(item.id)}><MovieItem {...item}  classes= {{...classes}}/></Grid>
                ))
            }
        </Grid>
    )
}
export default Movie;