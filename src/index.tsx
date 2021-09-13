import React,  { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import AppTheme from './theme/AppTheme';
import { ErrorBoundary } from 'react-error-boundary'
import Spinner from './components/Spinner/Spinner';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

import reportWebVitals from './reportWebVitals';

const CategoryList = React.lazy(() => import('./pages/CategoryList/CategoryList'));
const Checkout = React.lazy(() => import('./pages/Checkout/Checkout'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const PublicRoute = React.lazy(() => import('./components/PublicRoute/PublicRoute'))
const SignUp = React.lazy(() => import('./pages/SignUp/SignUp'));
const SignIn = React.lazy(() => import('./pages/SignIn/SignIn'));
const ShoppingCart = React.lazy(() => import('./pages/ShoppingCart/ShoppingCart'));
const ErrorFallback = React.lazy(() => import('./components/ErrorFallback/ErrorFallback'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <AppTheme>
          <Suspense fallback={<Spinner />}> 
            <ErrorBoundary FallbackComponent={ErrorFallback}> 
            <Router>
              <Switch>
                <PublicRoute path='/login' name='LogIn' component={SignIn} restricted />
                <PublicRoute path='/register' name='SignUp' component={SignUp} restricted />
                <Route path='/directory/:id' component={CategoryList} />
                <Route path='/viewcart' component={ShoppingCart} />
                <Route path='/checkout' component={Checkout} />
                <Route exact path='/' component={Home} />
              </Switch>
            </Router>
            </ErrorBoundary>
          </Suspense>
        </AppTheme>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
