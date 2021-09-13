import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cartWrapper: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
    },
    subTotal: {
        fontSize: '18px'
    }
}));

export default useStyles;