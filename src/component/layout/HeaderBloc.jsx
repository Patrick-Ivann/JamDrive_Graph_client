import React from "react";
import {
  LOCAL_THEMESTORE_QUERY,
  LOCAL_USERSTORE_QUERY
} from "../../graphql/local/localQueries";
import { useQuery } from "react-apollo-hooks";
import Header from "./Header";

export default function HeaderBloc() {
  const {
    client: localClient,
    data: themeStore,
    error: localError,
    loading: localLoading,
    networkStatus: localNetworkStatus,
    localClient: localCalled
  } = useQuery(LOCAL_THEMESTORE_QUERY);

  const {
    client: localUserClient,
    data: userStore,
    error: localUserError,
    loading: localUserLoading,
    networkStatus: localUserNetworkStatus,
    localClient: localUserCalled
  } = useQuery(LOCAL_USERSTORE_QUERY);

  return (
    <div>
      {userStore.userStore.userData && (
        <Header themeStore={themeStore}></Header>
      )}
    </div>
  );
}
