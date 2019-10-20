import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/tailwind.css"
import App from './App';
// import * as serviceWorker from './serviceWorker';
import {
    InMemoryCache,
    ApolloClient
} from 'apollo-boost';
import {
    persistCache
} from 'apollo-cache-persist';

import {
    ApolloProvider
} from 'react-apollo';
import {
    ApolloProvider as ApolloHooksProvider
} from 'react-apollo-hooks';
import { resolvers } from './graphql/local/localResolvers';
import { defaultLocalAppoloState, defaults } from "./graphql/local/defaultState";
import { terminalLink } from './apolloLink';


require('dotenv').config()


const apolloCache = new InMemoryCache({
    dataIdFromObject: e => `${e.__typename}_${e.id}` || null, // eslint-disable-line no-underscore-dangle

})


persistCache({
    cache: apolloCache,
    storage: window.localStorage,
});

// defaultLocalAppoloState(apolloCache)
const client = new ApolloClient({
    cache: apolloCache,
    resolvers: resolvers,
    link: terminalLink,
    dataIdFromObject: o => o.id,
    // defaultHttpLink: false,
    request: async operation => {
        console.log(operation)
        operation.setContext({
            fetchOptions: {
                credentials: 'include'
            }
        });
    },
    /*  fetchOptions: {
         credentials: 'include',
       }, */
    connectToDevTools: true,
    name: "WebClient",
    version: "1.0.1"

});

apolloCache.writeData({ data: defaults });

//initLocalState(apolloCache)





ReactDOM.render(
    <ApolloProvider client={client}>
        <ApolloHooksProvider client={
            client
        }>
            <App />
        </ApolloHooksProvider> </ApolloProvider>, document.getElementById('root'));
