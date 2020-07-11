import React, {useEffect, useState} from 'react';
import {Grid,Box} from "@material-ui/core";
import useStyle from "./styles"
import SliderItem from "./SliderItem";
import Position from "./Position"

const Slider = ({data}) => {
    const classes = useStyle();
    const [position,setPosition] = useState(0);
    let p;
    const onPostionUpdate = () =>{
        p = setTimeout(()=>{
            let pos = position >= (data.length-1)?0:(position+1);
            setPosition(pos);
            clearTimeout(p);
        },3000);
    }
    const onPosition = index =>{
        const pos = index === data.length-1?data.length-1:index;
        setPosition(pos);
        if(pos !== position)clearTimeout(p);
    }

    useEffect(()=>{
        onPostionUpdate();
    },[position]);


    const sliderItem = (item) => (<Grid item className={classes.itemPosition}  key={item.id}>
        <SliderItem {...item} {...classes} />
    </Grid>)
    return(<Box className={classes.root}>
        <Grid className={classes.container} container style={{transform: `translate3d(${-(position*473)}px, 0, 0)`}}>
            {data.map(item=>{return sliderItem(item);})}
        </Grid>
        <Position total={data.length} {...classes} onPosition={onPosition} current={position}/>
    </Box>)
}
export default  Slider;