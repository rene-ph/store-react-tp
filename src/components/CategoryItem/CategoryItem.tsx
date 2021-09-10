import { useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import useStyles  from './categoryitem.style';
import { add } from '../../redux/slice/cart-slice';
import { FC } from 'react';

const CategoryItem: FC<any> = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClickCart = () => {
        dispatch(add({'name': props.name, 
                      'price': props.price, 
                      'imageUrl': props.imageUrl, 
                      'id': props.id,
                      'quantity': 1 }));
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <CardMedia
                    className={classes.media}
                    image={props.imageUrl}
                    title="article"/>
                    <h3>{props.name}</h3>
                <Grid container 
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center">
                    <Grid item xs={12} lg={10}>
                        <b className={classes.price}>${props.price}</b>
                    </Grid>
                    <Grid item xs={12} lg={2}>
                        <CardActionArea>
                            <ShoppingCartTwoToneIcon onClick={handleClickCart}/>
                        </CardActionArea>
                    </Grid>
                </Grid>
             </CardContent>
        </Card>
    )
}

export default CategoryItem;
