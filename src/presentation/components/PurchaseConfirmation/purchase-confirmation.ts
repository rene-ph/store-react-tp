import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(6),
    },
    content:{
        padding: theme.spacing(5),
        '& h4':{
            textAlign: 'center'
        }

    },
    wrapperBtn: {
        marginTop: theme.spacing(3)
    }
}));