import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './spinner.style';

const Spinner = () => {
    const classes = useStyles();

    return(
        <Backdrop   open={true} 
                    className={classes.backdrop}
                    >
            <CircularProgress color="inherit" />
        </Backdrop> 
    )
}

export default Spinner;