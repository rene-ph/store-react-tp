import { createSelector } from "@reduxjs/toolkit";

export const category = (state:any) => state.storeCategories.categories;

export const loading = (state: any) => state.storeCategories.isLoading;

export const getCategories = createSelector(
    category, 
    (categories: any) => {
        let newArr = [];
        for (let index = 0; index < categories.length; index++) {
            if (newArr.length === 0) {
                newArr.push({title: categories[index].title, url: categories[index].imageUrl, col_id: categories[index].col_id , id: categories[index].item_id  });
            } else {
               if ( newArr.filter( item => item.title === categories[index].title).length === 0 ) {
                   newArr.push({title: categories[index].title, url: categories[index].imageUrl, col_id: categories[index].col_id, id: categories[index].item_id  });
               }
            }
        }
      return newArr;
    }
)

export const getItemByCategoryId = (id: any) => createSelector(
    category,
    (cat:any) => {
        return cat.filter((item:any) => item.item_id === id)[0];
    }
)

export const getByListOfCategoryById = (id:any) => createSelector(
    category, 
    (cat:any) => {
        return cat.filter((item:any) => item.col_id === id);
    }
)

export const getListOfCategories = () => createSelector(
    getCategories,
    (cat:any) => {
         return cat.map( (item:any) => item.title);
    }
)