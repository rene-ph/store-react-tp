import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { default as MaterialAlert } from '@material-ui/lab/Alert';
import { setDisplayModal } from '../../redux/slice/root-slice';
import { getModal } from '../../redux/selector/root.selector';
import useStyles from './alert.style';

const Alert = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const openModal = useSelector(getModal);

    return (
        <Snackbar open={openModal.state} 
            className={classes.root}
            autoHideDuration={openModal.autoHideDuration}
            onClose={() => { dispatch(setDisplayModal({ state: false, text: '', type: '' })) } }
            anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <MaterialAlert severity={openModal.type}>
                    {openModal.text}
                </MaterialAlert>
        </Snackbar>
    )
}

export default Alert;