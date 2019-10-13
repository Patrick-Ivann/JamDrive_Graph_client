import gql from "graphql-tag";

export const PUSH_PROSIT = gql`
mutation ( $nomProsit: String!, $unite:String!, $motsClef:String! ){
    pushProsit(nomProsit: $nomProsit, unite: $unite, motsClef: $motsClef) {
      _id
      motsClef
      promoId
      createdAt
    }
  }
`



