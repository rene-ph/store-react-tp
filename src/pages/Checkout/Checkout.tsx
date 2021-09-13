import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CustomizedStepper from "../../components/CustomizedStepper/CustomizedStepper";
import { useStyles } from "./checkout.style";
import { useSelector } from 'react-redux';
import { getAuthData } from "../../redux/selector/auth.selector";

const Checkout = () => {
    const classes = useStyles();
    const history = useHistory();
    const auth = useSelector(getAuthData);

    const handleCheckout = () => {
    }

    useEffect(() => {
        if (!auth.token || !auth.user) {
            history.push({
                pathname: '/login',
                search: '?next=/checkout'
              });
        }
    }, [auth]);

    return (
        <Container maxWidth='md' className={classes.container}>
            <Grid container >
                <Grid item xs={12} lg={12}>
                    <CustomizedStepper checkout={handleCheckout} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Checkout;
