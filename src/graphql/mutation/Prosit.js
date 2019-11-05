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

export const POP_PROSIT = gql`
mutation($id:ID!){
  popProsit(id:$id)
}

`



export const ZIP_PROSIT = gql`
mutation requestZipProsit($prositId:String!){
  filePathZippedByPrositId(prositId: $prositId)
}
`

export const ZIP_UNITE = gql`
mutation requestZipUnite($unite:String!){
  filePathZippedByUnite(unite: $unite)
}
`