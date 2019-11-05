import gql from "graphql-tag";

export const PROSIT_CREATED_SUBSCRIPTION = gql`
  subscription onPrositCreated {
    prositCreated {
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
    }
  }
`;

export const PROSIT_DELETED_SUBSCRIPTION = gql`
  subscription onPrositDeleted {
    prositDeleted {
      _id
    }
  }
`;

export const ALLER_PROSIT_CREATED_SUBSCRIPTION = gql`
  subscription onAllerCreated {
    allerPrositCreated {
      id
      nom
      title
      path
    }
  }
`;

export const RETOUR_PROSIT_CREATED_SUBSCRIPTION = gql`
  subscription onRetourCreated {
    retourPrositCreated {
      id
      nom
      title
      path
    }
  }
`;
