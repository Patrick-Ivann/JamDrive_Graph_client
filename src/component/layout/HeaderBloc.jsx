import React from 'react'
import { LOCAL_THEMESTORE_QUERY } from '../../graphql/local/localQueries';
import { useQuery } from 'react-apollo-hooks';
import Header from './Header';

export default function HeaderBloc() {

    const { client: localClient,
        data: themeStore,
        error: localError,
        loading: localLoading,
        networkStatus: localNetworkStatus,
        localClient: localCalled } = useQuery(LOCAL_THEMESTORE_QUERY);
    return (
        <div>
            <Header themeStore={themeStore} ></Header>
        </div>
    )
}
