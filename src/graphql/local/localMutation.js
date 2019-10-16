import gql from "graphql-tag";

export const storeMutation = gql`
  mutation setStore($field: String!, $anotherField: String) {
    setStore(
      field: $field
      anotherField: $anotherField
    ) @client
  }
` 
export const STORE_MUTATION_USER = gql `mutation setConnection( $user: String) {
  setConnection(
      user: $user
    ) @client
  }
  `
export const STORE_MUTATION_FILTER =gql`

mutation setFilterWord($word:String){

  setFilterWord(
    word:$word
  )@client
}
`

export const STORE_MUTATION_THEME=gql`

mutation setTheme{
  setTheme@client
}

`




