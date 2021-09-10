import { useCallback } from "react";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import {
    Box,
    CardContent,
    Container,
    Card,
    Grid,
    Button
} from "@material-ui/core";
import Cart from '../../components/Cart/Cart';
import Navbar from '../../components/Navbar/Navbar';
import useStyles from './shoppingcart.style';
import { getCart, getCartTotal } from "../../redux/selector/cart.selector";

const ShoppingCart = () => {
    const classes = useStyles();
    const history = useHistory();

    const cart = useSelector(getCart);
    const totalCart = useSelector(getCartTotal);
    
    const handleCheckout = () => {
        history.push('/checkout');
    }

    const hasItemsInCart = useCallback(() => {
        return cart.length > 0;
    }, [cart]);

    return (
        <>
            <Navbar />
            <Container maxWidth='md' className={classes.cartWrapper}>
                <h2>Shopping Cart</h2>
                <Box mb={4}>
                    <Card>
                        <CardContent>
                            {hasItemsInCart() ? (
                                <Grid container direction="row" spacing={3}>
                                    <Grid item lg={6} align="center">
                                        <h3>PRODUCT</h3>
                                    </Grid>
                                    <Grid item lg={2} align="center">
                                        <h3>QUANTITY</h3>
                                    </Grid>
                                    <Grid item lg={2} align="center">
                                        <h3>PRICE</h3>
                                    </Grid>
                                    <Grid item lg={2} align="center">
                                        <h3>REMOVE</h3>
                                    </Grid>
                                </Grid>) : null}
                            <Grid container direction="column">
                                <Grid item xs={12}>
                                    {hasItemsInCart() ? (
                                        cart.map((item, index) => {
                                            return (
                                                <Cart
                                                    key={index}
                                                    imageUrl={item.imageUrl}
                                                    name={item.name}
                                                    id={item.id}
                                                    quantity={item.quantity}
                                                    price={item.price}
                                                />
                                            )
                                        })
                                    ) : (
                                        <Grid item align="center">
                                            <h2>Your cart is empty </h2>
                                        </Grid>)}
                                </Grid>
                                {hasItemsInCart() ? (
                                    <Grid container item xs={12} lg={12}
                                        direction='row'
                                        alignItems='center'
                                        justifyContent='center'>
                                        <Grid item xs={8} lg={8}></Grid>
                                        <Grid item xs={3} lg={3}>
                                            <p className={classes.subTotal}>Total  <b>${totalCart}</b></p>
                                        </Grid>
                                    </Grid>
                                ) : null}
                            </Grid>
                        </CardContent>
                    </Card>
                </Box>
                {hasItemsInCart() ? (
                    <Grid container>
                        <Grid item xs={12} lg={12} align='end'>
                            <Button color="primary"
                                variant="contained"
                                onClick={handleCheckout}>Checkout Now</Button>
                        </Grid>
                    </Grid>
                ) : null}
            </Container>
        </>);
}

export default ShoppingCart;
