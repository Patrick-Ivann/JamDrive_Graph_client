import gql from "graphql-tag";

export const PROSIT_FEED_BY_CLASS = gql`
query{
    prositsByPromo{
        _id
        nomProsit
        motsClef
        unite
        allerFichier {
            id
            nom
            title
            path
          }
          retourFichier {
            id
            path
            title
            nom
          }
          ressourceEleve {
            id
            nom
            path
          }
    }
}

`

