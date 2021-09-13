import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router";
import Container from '@material-ui/core/Container';
import { useStyles } from "./purchase-confirmation";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Cart from '../Cart/Cart';
import Button from '@material-ui/core/Button';
import { getCheckoutInfo } from '../../redux/selector/checkout.selector'
import { getCart, getCartTotal } from "../../redux/selector/cart.selector";

const PurchaseConfirmation = () => {
    const history = useHistory();
    const classes = useStyles();
    const user = useSelector(getCheckoutInfo)
    const cart = useSelector(getCart);
    const totalCart = useSelector(getCartTotal);

    return (
        <Container maxWidth="md" className={classes.container}>
            <Paper className={classes.content}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box justifyContent="center">
                            <Box display="flex" justifyContent="center" >
                                <CheckCircleOutlineIcon style={{ color: green[500], fontSize: 60 }} />
                             </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" gutterBottom>
                            We've received your order
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            <Box fontFamily="Monospace" fontWeight="fontWeightBold" fontStyle="oblique">
                                Delivery details
                            </Box>
                        </Typography>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" gutterBottom>
                                    <Box fontWeight="fontWeightBold">
                                        Contact information
                                    </Box>
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {`${user.user.first_name} ${user.user.last_name}`}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {user.user.email}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Box fontWeight="fontWeightBold">
                                    Address
                                </Box>
                                <Typography variant="body1" gutterBottom>
                                    {user.user.address}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {user.user.city}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider light />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            <Box fontFamily="Monospace" fontWeight="fontWeightBold" fontStyle="oblique">
                                Payment Information
                            </Box>
                        </Typography>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" gutterBottom>
                                    <Box fontWeight="fontWeightBold">
                                        Credit card
                                    </Box>
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {user.payment.name_on_card}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Ending in {user.payment.card_number.slice(11)}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Expires {user.payment.expiration}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            <Box fontFamily="Monospace" fontWeight="fontWeightBold" fontStyle="oblique">
                                Order summary
                            </Box>
                        </Typography>
                        <Grid container direction="row" >
                            <Grid container direction="column">
                                <Grid item xs={12}>
                                    {cart.map((item: any, index: number) => {
                                        return (
                                            <Cart
                                                key={index}
                                                readOnly={true}
                                                imageUrl={item.imageUrl}
                                                name={item.name}
                                                id={item.id}
                                                quantity={item.quantity}
                                                price={item.price}
                                            />
                                        )
                                    })}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} lg={12}
                            direction='row'
                            alignItems='center'
                            justifyContent='center'>
                            <Grid item xs={8} lg={8}></Grid>
                            <Grid item xs={3} lg={3}>
                                <p>Total  <b>${totalCart}</b></p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <Box display="flex" justifyContent="flex-end">
                <div className={classes.wrapperBtn}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => history.push('/')}
                     
                    >
                        Go back home
                    </Button>
                </div>
            </Box>
        </Container>
    )
}

export default PurchaseConfirmation;
