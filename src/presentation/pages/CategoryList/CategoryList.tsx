
import { useState, useCallback, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import Navbar from '../../components/Navbar/Navbar';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import useStyles from './category.style';
import { getByListOfCategoryById, getListOfCategories } from '../../../domain/redux/selector/categories.selector';

const CategoryList = () => {
    const path: any = useRouteMatch();
    const id = parseInt(path.params.id, 10);
    const category = useSelector(getByListOfCategoryById(id));
    const categoryList = useSelector(getListOfCategories());
    const categoryTitle = categoryList[id -1];
    const classes = useStyles();

    const [showFiveItems, setShowFiveItems] = useState(true);

    useEffect(() => {
        if (category.length <= 5 ) {
            setShowFiveItems(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleShowMore = useCallback(() => {
        setShowFiveItems(false);
    }, []);

    return (
        <>
            <Navbar/>
            <Grid container className={classes.root} >
                { showFiveItems ? (
                    <Grid item xs={12} lg={12} className={classes.title}>
                        <h1> Top 5 Items for {categoryTitle} </h1>
                    </Grid>
                ) :  <Grid item xs={12} lg={12} className={classes.title}>
                        <h1> Category {categoryTitle} </h1>
                    </Grid> }
                { category ? (
                             showFiveItems ?
                             category.slice(0,5)
                                     .map( (item: any, index: number) => {
                                return(
                                    <Grid item xs={12} lg={3} className={classes.categoryCard} key={index}>
                                        <CategoryItem
                                            name = {item.name}
                                            imageUrl = {item.imageUrl}
                                            id={item.item_id}
                                            price = {item.price}
                                        />
                                    </Grid>
                                )})
                            : category.map( (item: any, index: number) => {
                                return(
                                    <Grid item xs={12} lg={3} className={classes.categoryCard} key={index}>
                                        <CategoryItem
                                            name = {item.name}
                                            imageUrl = {item.imageUrl}
                                            id={item.item_id}
                                            price = {item.price}
                                        />
                                    </Grid>
                                )})
                ) : null }
                { showFiveItems ? (
                        <Grid item xs={12} lg={12} alignContent={"center"}> 
                          <div className={classes.showMore}
                               onClick={handleShowMore}>
                              <h2>Show more</h2>
                              <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                          </div>
                        </Grid>
                ) : null}
            </Grid>
        </>
    )
}

export default CategoryList;
