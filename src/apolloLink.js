import {
    getMainDefinition
  } from 'apollo-utilities';
  import {
    split,
    ApolloLink
  } from 'apollo-link';
  import {
    WebSocketLink
  } from 'apollo-link-ws';
  import {
    HttpLink
  } from 'apollo-link-http';
  import {
    onError
  } from 'apollo-link-error';
  import {
    setContext
  } from 'apollo-link-context';
import history from './utils/history';
  
  require('dotenv').config()
  const wsLink = new WebSocketLink({
    uri: process.env.REACT_APP_WEBSOCKET_LINK,
    options: {
      reconnect: true,
      timeout: 30000,
      inactivityTimeout: 3000,
      lazy:true,
      connectionParams: {
  
      authorization: localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN) ? `Bearer ${localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN)}` : null,
      }
    }
  });
  
  
  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_HTTP_LINK,
    // credentials: 'same-origin'
  });
  
  const errorLink = onError(({
    graphQLErrors,
    networkError
  }) => {
  
    console.log(graphQLErrors);
    if (graphQLErrors && graphQLErrors.filter(e => e).length > 0) {
      graphQLErrors.map(({
        message = '',
        status = 200
      }) => {
        console.log(message);
        alert(message)
        if ("UNAUTHORIZED" === message || status === 401) {
          console.warn(`access indisponible`)
          if (
            history &&
            history.location &&
            history.location.pathname !== '/login'
          ) {
            history.push('/register')
          }
        }
        if ("FORBIDDEN" === message || status === 403) {
          console.warn(`Action indisponible`)
          history.push(`/error-page/403`)
        }
        return null
      })
    }
    if (networkError && networkError.statusCode === 401) {
      // eslint-disable-next-line
      history.push('/login');
      console.warn("UNAUTHORIZED")
    }
    if (networkError && networkError.statusCode === 403) {
      console.warn("FORBIDDEN")
    }
    if (networkError && networkError.statusCode >= 500) {
      console.warn('SERVER ERROR');
      history.push(`/error-page/${networkError.statusCode}`)
    }
  
  
  
    if (graphQLErrors) {
 
      console.error(graphQLErrors);
    }
  
    if (networkError) {  
      console.error(networkError);
    }
  });
  
  
  const afterwareLink = new ApolloLink((operation, forward) => {
    return forward(operation).map(response => {
      const context = operation.getContext();
      const {
        response: {
          headers
        }
      } = context;
  
      if (headers) {
        const token = headers.get("token");
        const refreshToken = headers.get("refreshToken")
  
        if (token) {
          localStorage.setItem("token", token);
        }
  
        if (refreshToken) {
          localStorage.setItem("refreshToken", refreshToken)
        }
  
      }
      return response;
    });
  });
    
  const authLink = setContext((_, {
    headers
  }) => {
    return {
      headers: {
        ...headers,
        authorization: localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN) ? `Bearer ${localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN)}` : null,
        refreshAuthorization: localStorage.getItem('refreshToken') || null
  
      }
    }
  })
  
  const httpErrorLink = ApolloLink.from([afterwareLink, authLink, errorLink, httpLink]);
  
  
  const requestLink = split(
    ({
      query
    }) => {
      const {
        kind,
        operation
      } = getMainDefinition(query)
  
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    httpErrorLink
  )
  
  
  
  
  export const terminalLink = ApolloLink.from([errorLink, requestLink]);