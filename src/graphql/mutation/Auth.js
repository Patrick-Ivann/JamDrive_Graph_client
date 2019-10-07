import gql from "graphql-tag";

// REMOTE
export const LOGIN_MUTATE = gql` 
mutation ( $password: String!){
loginUser(
    motDePasse: $password
    ){ user {
      _id
      promoId
      role
    }
    token
    refreshToken
  }
}`


export const LOGOUT_MUTATE = gql`
mutation{signOut}
`

