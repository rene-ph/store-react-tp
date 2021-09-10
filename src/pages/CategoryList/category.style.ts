import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto',
        justifyContent: 'center'
    },
    categoryCard: {
        margin: theme.spacing(2)
    },
    title: {
        margin: theme.spacing(2),
        paddingLeft: theme.spacing(6)
    },
    showMore: {
        cursor: 'pointer',
        "& h2": {
            marginBottom: 0
        }
    }
}));

export default useStyles;