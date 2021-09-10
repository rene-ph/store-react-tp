import { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../../utils/utils';

const PublicRoute: FC<any> = ({ component: Component, restricted, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            isLoggedIn() && restricted ?
                <Redirect to="/" />
            : <Component {...props} />
        )} />
    )
}

export default PublicRoute;
