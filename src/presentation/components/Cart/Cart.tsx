import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
         CardMedia,
         Grid,
         Divider, 
         TextField,
         } from "@material-ui/core";

import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './cart.style';
import { remove, updateCartById } from '../../../domain/redux/slice/cart-slice';
import { getItemByCategoryId } from '../../../domain/redux/selector/categories.selector';

const Cart: FC<any> = (props) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const item = useSelector(getItemByCategoryId(props.id));

    const handleDeleteCart = () => {
        dispatch(remove({id: props.id}));
    }
    const handleChangeQty = (ev: any) => {
        if (ev.target.value > 0) {
            dispatch(updateCartById({
                id: props.id,
                prop: 'quantity',
                value: parseInt(ev.target.value, 10)
            }));
            dispatch(updateCartById({
                id: props.id,
                prop: 'price',
                value: ((item.price * parseInt(ev.target.value, 10)))
            }));
        }
    }

    return (
        <>
            <Divider/>
                <Grid container 
                      alignItems='center'
                      spacing={3}
                      >
                    <Grid item xs={12} lg={2}>
                        <CardMedia
                            className={classes.media}
                            image={props.imageUrl}
                            title="article"/>
                    </Grid>
                    <Grid item xs={12} lg={4} >
                        <p>{props.name}</p>
                    </Grid>
                    <Grid item container xs={12} lg={2} justifyContent='center'>
                        <TextField label="Quantity" 
                                   variant="outlined"
                                   type="number" 
                                   disabled={props.readOnly}
                                   onChange={handleChangeQty}
                                   value={props.quantity} >
                        </TextField>
                    </Grid>
                    <Grid item container xs={12} lg={2} justifyContent="center">
                        <p>${props.price}</p>
                    </Grid>
                    { !props.readOnly ? (
                        <Grid item container xs={12} lg={2} justifyContent="center">
                            <DeleteIcon onClick={handleDeleteCart}/>
                        </Grid>
                    ) : null}
      
                </Grid>
            <Divider/>
        </>
    )
}

export default Cart;