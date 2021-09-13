import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import {
    AppBar,
    Badge,
    Grid,
    Toolbar
} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { getCartQuantity } from '../../../domain/redux/selector/cart.selector';
import AuthInfo from "../AuthInfo/AuthInfo";
import Alert  from '../Alert/Alert';
import useStyles from './navbar.style';

const Navbar = () => {
    const classes = useStyles();
    const history = useHistory();
    
    const quantity = useSelector(getCartQuantity);

    const handleBackHome = () => {
        history.push('/');
    }

    const handleCart = () => {
        history.push('/viewcart');
    }

    return (
        <>
            <div className={classes.root}>
                <Alert />
                <AppBar position="static" className={classes.navBar}>
                    <Toolbar>
                        <Grid container>
                            <Grid item xs={6} lg={6}>
                                <h2 onClick={handleBackHome}>ReactEShop</h2>
                            </Grid>
                            <Grid item xs={6} lg={6}>
                                <div className={classes.barInfo}>
                                    <IconButton aria-label="show current added products" color="inherit">
                                        <Badge badgeContent={quantity}
                                            color="primary"
                                            >
                                            <ShoppingCartIcon onClick={handleCart} />
                                        </Badge>
                                    </IconButton>
                                  <AuthInfo/>
                                </div>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
}

export default Navbar;