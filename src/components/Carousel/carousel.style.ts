import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '40px',
        overflow: 'hidden',
        '& .slick-slide img': {
            margin: 'auto'
        },
        '& .slick-prev': {
            left: '40px'
        },
        '& .slick-next': {
            right: '40px'
        },
        '& .slick-prev:before, .slick-next:before': {
            color: 'black'
        }
    }
}));

export default useStyles;