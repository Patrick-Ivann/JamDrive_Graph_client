import gql from "graphql-tag";

export const LOCAL_USERSTORE_QUERY = gql`
  query GetUser{
    userStore @client {
      userData
      
    }
  }
`

export const LOCAL_FILTERSTORE_QUERY = gql`
query GetFilter{
  filterStore @client{
    filterWord
  }
}

`


export const LOCAL_THEMESTORE_QUERY =gql`
query GetTheme{
  themeStore @client{
    theme
  }
}


`


