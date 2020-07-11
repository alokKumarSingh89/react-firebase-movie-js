import React from 'react';
import {Box,List,ListItem,ListItemText,Typography} from '@material-ui/core'
import useStyle from "./styles"
const RecentSearch = ({data}) =>{
    const classes = useStyle();
    return(
        <Box >
            <Typography variant="h5" gutterBottom className={classes.primary}>Trending Searches</Typography>
            <List component="div" disablePadding>
                {
                    data.map(item=>(<ListItem button key={item.name} className={classes.root}>
                        <ListItemText>
                            <Typography variant="body1" className={classes.primary}>{item.name}</Typography>
                            <Typography variant="caption" className={classes.secondary}>{item.type}</Typography>
                        </ListItemText>
                    </ListItem>))
                }
            </List>
        </Box>
    )
}

export default  RecentSearch;