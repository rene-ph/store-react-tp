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

const Home = React.lazy(() => import('./pages/Home/Home'));
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
