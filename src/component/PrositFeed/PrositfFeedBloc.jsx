import React, { useEffect, useState } from "react";
import { PROSIT_FEED_BY_CLASS } from "../../graphql/queries/Prosit";
import PrositFeedIndex from "./PrositFeedIndex";
import { LOCAL_FILTERSTORE_QUERY } from "../../graphql/local/localQueries";
import { useQuery } from "react-apollo";
import {
  PROSIT_DELETED_SUBSCRIPTION,
  PROSIT_CREATED_SUBSCRIPTION,
  ALLER_PROSIT_CREATED_SUBSCRIPTION,
  RETOUR_PROSIT_CREATED_SUBSCRIPTION
} from "../../graphql/subscription/subscription";

export default function PrositfFeedBloc() {
  const {
    client,
    data,
    error,
    loading,
    networkStatus,
    subscribeToMore,
    refetch,
    fetchMore
  } = useQuery(PROSIT_FEED_BY_CLASS, { fetchPolicy: "network-only" });

  const {
    client: localClient,
    data: filterStore,
    error: localError,
    loading: localLoading
  } = useQuery(LOCAL_FILTERSTORE_QUERY);
  if (localError) console.error(localError);
  const [dataState, setStateData] = useState();

  useEffect(() => {
    if (data) {
      setStateData(data.prositsByPromo);
    }

    let unsubscribePrositDeleted = subscribeToMore({
      document: PROSIT_DELETED_SUBSCRIPTION,

      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        refetch()
          .then(result => {
            console.log(result);
            setStateData(result.data.prositsByPromo);
          })
          .catch(err => {
            console.error(err);
          });
      }
    });
    let unsubscribePrositCreated = subscribeToMore({
      document: PROSIT_CREATED_SUBSCRIPTION,

      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        refetch()
          .then(result => {
            console.log(result);
          })
          .catch(err => {
            console.error(err);
          });
      }
    });
    let unsubscribeAllerPrositCreated = subscribeToMore({
      document: ALLER_PROSIT_CREATED_SUBSCRIPTION,

      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        console.log(subscriptionData);
        refetch()
          .then(result => {
            console.log(result);
            setStateData(result.data.prositsByPromo);
          })
          .catch(err => {
            console.error(err);
          });
      }
    });
    let unsubscribeRetourPrositCreated = subscribeToMore({
      document: RETOUR_PROSIT_CREATED_SUBSCRIPTION,

      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        refetch()
          .then(result => {
            console.log(result);
            setStateData(result.data.prositsByPromo);
          })
          .catch(err => {
            console.error(err);
          });
      }
    });

    if (unsubscribeRetourPrositCreated) return unsubscribeRetourPrositCreated;
    if (unsubscribeAllerPrositCreated) return unsubscribeAllerPrositCreated;
    if (unsubscribePrositCreated) return unsubscribePrositCreated;
    if (unsubscribePrositDeleted) return unsubscribePrositDeleted;
  }, [data, dataState]);

  if (loading) return <div> loading </div>;

  if (!dataState) return <div> Pas de prosit </div>;
  if (dataState.length < 1) return <div> Pas de prosit </div>;
  return (
    <>
      <PrositFeedIndex
        // data={dataState ? dataState : data}
        prosits={dataState}
        error={error}
        loading={loading}
        filterStore={filterStore ? filterStore : ""}
      ></PrositFeedIndex>
    </>
  );
}
