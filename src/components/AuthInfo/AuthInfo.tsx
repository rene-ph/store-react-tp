import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { setToken, setUser, signOut } from "../../redux/slice/auth-slice";
import { getAuthData } from "../../redux/selector/auth.selector";
import { 
    getLocalToken, 
    getLocalUser, 
    removeLocalToken, 
    removeLocalUser
} from "../../utils/utils";
import { useHistory } from "react-router-dom";

const AuthInfo = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [loggedIn, setLoggedIn] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const authData = useSelector(getAuthData);

    const handleMenu = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuClick = () => {
        history.push("/login")
    };

    const handleClickLogout = () => {
        clearLoggedUser();
        setLoggedIn(true);
    };

    const clearLoggedUser = () => {
        dispatch(signOut());
        removeLocalToken();
        removeLocalUser();
    }

    useEffect(() => {
        let logged = false;

        if (!authData.user && !authData.token) {
            var token = getLocalToken();
            var user = getLocalUser();

            if (token && user) {
                dispatch(setToken(token));
                dispatch(setUser(user));
                logged = true;
            } else {
                logged = false;
                clearLoggedUser();
            }
        } else {
            logged = true;
        }

        setLoggedIn(logged);
    // eslint-disable-next-line 
    }, [authData, dispatch])


    return (
        <div className="auth">
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={loggedIn ? handleMenu : handleMenuClick}
                color="inherit"
            >
                <AccountCircle />
                <Typography variant="button" display="block" className="username">
                    {loggedIn && authData.user ? `${authData.user.displayName}` : 'Login'}
                </Typography>
            </IconButton>
            {loggedIn &&
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClickLogout}><ExitToAppIcon />Logout</MenuItem>
                </Menu>
            }
        </div>
    );
};

export default AuthInfo;
