import {Route, Redirect} from 'react-router-dom';
import {useAuth} from '../contexts/auth';

function PrivateRoute({children, ...rest}) {
    const auth = useAuth();
    return <Route {...rest} render={({location}) => {
        if(auth.user === null) return <p>Checking authorization access...</p>
        return auth.user ? <Redirect to={{
            pathname: '/dashboard',
            state: { from: location }
        }} /> : children;
    }} />
}

export default PrivateRoute;