import React from 'react';
import {Card,CardActionArea,CardMedia} from '@material-ui/core'
const SliderItem = ({img,cardWith}) =>{
    return(
        <Card className={cardWith}>
            <CardActionArea>
                <CardMedia component="img"
                           alt="Slider Imag"
                           height="300"
                           image={img}
                           title="Contemplative Reptile"/>
            </CardActionArea>
        </Card>
    )
}
export default  SliderItem;