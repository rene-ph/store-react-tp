import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3),
        backgroundColor: 'white',
        backgroundRepeat: 'no-repeat',
        '& a': {
            display: 'block'
        }
    },
    image: {
        height: '360px',
        cursor: 'pointer',
        marginBottom: '1rem'
    }
}));

export default useStyles;