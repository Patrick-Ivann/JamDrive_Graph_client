import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { LOCAL_USERSTORE_QUERY } from "../../graphql/local/localQueries";
import { useQuery } from "react-apollo-hooks";
export function PrivateRoute(props) {
  const {
    client: localUserClient,
    data: userStore,
    error: localUserError,
    loading: localUserLoading,
    networkStatus: localUserNetworkStatus,
    localClient: localUserCalled
  } = useQuery(LOCAL_USERSTORE_QUERY);
  if (localUserError) console.error(localUserError);

  const [user, setUserState] = useState();

  const { component } = props;
  const Component = component;
  useEffect(() => {
    if (userStore) {
      setUserState(JSON.parse(userStore.userStore.userData));
    }
  }, [userStore]);
  return (
    <Route
      render={props =>
        user ? (
          <Component currentUser={user} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/"
              // state: { from: props.location }
            }}
          />
          // <div>oups</div>
        )
      }
    />
  );
}
