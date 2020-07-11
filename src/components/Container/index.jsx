import React from 'react';
import {Box} from '@material-ui/core'

import useStyle from "./styles";
const Container = ({children}) =>{
    const classes = useStyle();
    return(
        <Box className={classes.root}>
            {children}
        </Box>
    )
}
export default  Container;