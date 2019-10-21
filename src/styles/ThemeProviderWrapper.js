import { ThemeProvider } from "styled-components";
import React from "react";
import { LOCAL_THEMESTORE_QUERY } from "../graphql/local/localQueries";
import { Query, useQuery } from "react-apollo";

export default function ThemeProviderWrapper(props) {
  const {
    client: localClient,
    data: themeStore,
    error: localError,
    loading: localLoading,
    networkStatus: localNetworkStatus,
    localClient: localCalled
  } = useQuery(LOCAL_THEMESTORE_QUERY);

  let theme = themeStore.themeStore.theme;

  return (
    <ThemeProvider theme={{ mode: theme.toString() }}>
      {props.children}
    </ThemeProvider>
  );
}
