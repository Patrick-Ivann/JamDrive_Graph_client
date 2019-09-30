import gql from "graphql-tag";

export const LOCAL_USERSTORE_QUERY = gql `
  query GetUser{
    userStore @client {
      userData
      
    }
  }
`
