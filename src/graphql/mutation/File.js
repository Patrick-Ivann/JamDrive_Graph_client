import gql from "graphql-tag";

export const UPLOAD_ALLER_PROSIT=gql`
mutation ( $file: Upload!, $title:String!, $nom:String!,$prositId:ID! ){
    UploadAllerProsit(file: $file,title:$title, nom:$nom, prositId:$prositId)
        {filename id path title createdAt}    
    
}
`
export const UPLOAD_RETOUR_PROSIT=gql`
mutation($file: Upload!, $title:String!,$nom:String!,$prositId:ID!){
    UploadRetourProsit(file: $file,title:$title,nom:$nom,prositId:$prositId){
        id
        path
        title
        filename
        createdAt
    }

}
`
export const UPLOAD_ELEVE_RESSOURCE=gql`

mutation($file:Upload!, $title:String!,$nom:String!, $prositId:ID!, $unite:String!){
    UploadEleveRessource(file:$file,title:$title,nom:$nom, prositId: $prositId, unite:$unite){
        id
        title
        path
        filename
        createdAt
    }
}

`



export const UPLOAD_PROF_RESSOURCE=gql`

mutation($file:Upload!, $title:String!, $nom:String!,$prositId:ID!, $unite:String!){
    UploadProfRessource(file:$file,title:$title,nom:$nom,prositId: $prositId, unite:$unite){
        id
        title
        path
        filename
        createdAt
    }
}

`