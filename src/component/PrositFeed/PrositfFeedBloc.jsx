import React, { useEffect } from 'react'
import { PROSIT_FEED_BY_CLASS } from '../../graphql/queries/Prosit';
import PrositFeedIndex from './PrositFeedIndex';
import { useQuery } from 'react-apollo-hooks';
import { LOCAL_FILTERSTORE_QUERY } from '../../graphql/local/localQueries';

export default function PrositfFeedBloc() {

    const { client,
        data,
        error,
        loading,
        networkStatus,
        called } = useQuery(PROSIT_FEED_BY_CLASS, { fetchPolicy: "network-only" });


    const { client: localClient,
        data: filterStore,
        error: localError,
        loading: localLoading,
        networkStatus: localNetworkStatus,
        localClient: localCalled } = useQuery(LOCAL_FILTERSTORE_QUERY)
    if (localLoading) return <div>fqsdfsdfsd</div>






    return (
        <>
            <PrositFeedIndex data={data} error={error} loading={loading} filterStore={filterStore ? filterStore : ""} ></PrositFeedIndex>
        </>
    )
}
