import { combineReducers } from "redux"
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import authReducer from './slice/auth-slice';
import cartReducer from './slice/cart-slice';
import checkoutReducer from './slice/checkoutform-slice';
import categoriesReducer from './slice/categories-slice';
import { persistStore, persistReducer } from "redux-persist"
import rootReducer from './slice/root-slice';
import rootSaga from "./sagas/index";
import storage from "redux-persist/lib/storage"


const sagaMiddleware = createSagaMiddleware();

const mainReducer = combineReducers({
    storeCart: cartReducer,
    storeAuth: authReducer,
    storeCheckout: checkoutReducer,
    storeCategories: categoriesReducer,
    storeRoot: rootReducer,
  });
  
  const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ['storeCart', 'storeCategories'], //persisted reducer
    blacklist: []
  }

const persistedReducer = persistReducer(persistConfig, mainReducer)

export const store = configureStore({
    devTools: true,
    reducer: persistedReducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
