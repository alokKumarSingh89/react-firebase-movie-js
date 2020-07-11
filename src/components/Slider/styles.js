import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root:{
        width: '100%',
        overflow: 'hidden',
    },
    container: {
        alignItems: 'center',
        transition: 'transform .5s ease-out',
        flexWrap: 'nowrap',
        margin:10
    },
    cardWith:{
        width:600,
        minWidth:600
    },
    itemPosition:{
        position:'relative',
        transition: 'left .5s ease-out',
        marginRight:10,
    },
    imgPosition:{
        position: 'absolute',
        width: 20,
        height: 20,
        background: '#a09d9dd9',
        bottom: 60,
        borderRadius: '50%',
        cursor: 'pointer',
        textAlign: 'center',
    },
    active:{
        background: '#ccc',
        transform: "scale(1.5)"
    }


}));
export default useStyles;