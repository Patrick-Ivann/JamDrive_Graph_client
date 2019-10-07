import gql from "graphql-tag";

export const PROSIT_FEED_BY_CLASS = gql`
query{
    prositsByPromo{
        nomProsit
        motsClef
    }
}

`

