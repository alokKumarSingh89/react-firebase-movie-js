import {
    makeStyles,
    createStyles
} from "@material-ui/core/styles";


export default makeStyles((theme) =>
    createStyles({
        root:{
            backgroundColor:"#fff",
            margin:4
        },
        primary:{
          color: "#333"
        },
        secondary:{
            color:"#999"
        }
    })
);
