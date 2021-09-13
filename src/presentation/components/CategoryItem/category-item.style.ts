import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        fontSize: '18px',
        '& h3': {
            margin: 0
        }
      },
      media: {
        height: 360,
      },
      price: {
          fontSize: '25px',
          color: '#666',
          display: 'block',
          paddingLeft: '2rem',
      }
}));

export default useStyles;