import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/auth";

function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) => {
          console.log('aSasa', auth.user)
        if (auth.user === null) return <p>Checking authorization access...</p>;
        if (!auth.user.isEmailVerified && location.pathname !== "/verify")
          return (
            <Redirect
              to={{
                pathname: "/verify",
                state: { from: location },
              }}
            />
          );
        return auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
