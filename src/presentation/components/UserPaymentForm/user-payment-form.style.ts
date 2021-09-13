import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    uppercase: {
        '& input': {
            textTransform: 'uppercase',
        }
    },
    mainCard: {
        '& .card--content': {
            padding: theme.spacing(5),
        }
    }
}));