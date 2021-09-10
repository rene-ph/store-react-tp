import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiGrid-container': {
      alignItems: 'center'
    },
    '& svg': {
      cursor: 'pointer',
    }
  },
  navBar: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    backgroundColor: 'white',
    color: 'black',
  },
  barInfo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& .auth': {
      '& .username':{
        paddingLeft: theme.spacing(1),
        fontWeight: 'bold',
        textTransform: 'lowercase'
      }
    },

    '& button' : {
      borderRadius: 'unset'
    }
  }
}));

export default useStyles;