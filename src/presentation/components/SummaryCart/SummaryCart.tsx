import { useCallback } from "react";
import { CardContent, 
    Card,
    Grid
     } from "@material-ui/core";
    
import { useSelector } from 'react-redux';
import useStyles from './summary-cart.style';
import Cart from '../../components/Cart/Cart';    
import { getCart, getCartTotal } from "../../../domain/redux/selector/cart.selector";

const SummaryCart = () => {
    const classes = useStyles();
    const cart = useSelector(getCart);
    const totalCart = useSelector(getCartTotal);

    const hasItemsInCart = useCallback(() => {
        return cart.length > 0;
    }, [cart]);

    return (<> 
              <h2>Your order</h2>
              <Card>
                  <CardContent>
                  { hasItemsInCart() ? (
                      <>
                        <Grid container direction="row" spacing={3}>
                            <Grid container item lg={6} justifyContent="center">
                                <h3>PRODUCT</h3>
                            </Grid>
                            <Grid container item lg={2} justifyContent="center">
                                <h3>QUANTITY</h3>
                            </Grid>
                            <Grid container item lg={2} justifyContent="center">
                                <h3>PRICE</h3>
                            </Grid>
                        </Grid> 
                        <Grid container direction="column">
                            <Grid item xs={12}>
                            {  cart.map( (item: any, index: number) => {
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
                            }) } 
                            </Grid> 
                        </Grid>
                        <Grid container item xs={12} lg={12}
                                    direction='row'
                                    alignItems='center' 
                                    justifyContent='center'>
                                    <Grid item xs={8} lg={8}></Grid>
                                    <Grid item xs={3} lg={3}>
                                        <p className={classes.subTotal}>Total  <b>${totalCart}</b></p>
                                    </Grid>
                            </Grid>
                      </> )  :  null }
                  </CardContent>
              </Card>
            </>)
}

export default SummaryCart;