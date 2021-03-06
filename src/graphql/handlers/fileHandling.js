import {
  UPLOAD_ALLER_PROSIT,
  UPLOAD_RETOUR_PROSIT,
  UPLOAD_ELEVE_RESSOURCE,
  UPLOAD_PROF_RESSOURCE
} from "../mutation/File";
import { useMutation } from "react-apollo";
import to, {
  fileNameExtractor,
  isFileProsit,
  isFunction,
  isFilePrositAller,
  isFileRessourceEleve,
  isFileRelevant,
  isFileTypeValid
} from "../../utils/helpers";
import { PUSH_PROSIT, ZIP_PROSIT, ZIP_UNITE } from "../mutation/Prosit";

/**
 * Custom Hook to upload a file using graphQl Mutaion, returns a function to pass Parameters to
 * @returns {Function} submitPrositAller
 */

//TODO ADD SUPPORT FOR MASS UPLOAD
export const useUpload = () => {
  const [
    submitPrositCreation,
    { loading: submitPrositCreationLoading, error: submitPrositCreationError }
  ] = useMutation(PUSH_PROSIT);
  const [
    submitPrositAller,
    { loading: submitPrositAllerLoading, error: submitPrositAllerError }
  ] = useMutation(UPLOAD_ALLER_PROSIT);
  const [
    submitPrositRetour,
    { loading: submitPrositRetourLoading, error: submitPrositRetourError }
  ] = useMutation(UPLOAD_RETOUR_PROSIT);
  const [
    submitRessourceEleve,
    { loading: submitRessourceEleveLoading, error: submitRessourceEleveError }
  ] = useMutation(UPLOAD_ELEVE_RESSOURCE);
  const [
    submitRessouceProf,
    { loading: submitRessouceProfLoading, error: submitRessouceProfError }
  ] = useMutation(UPLOAD_PROF_RESSOURCE);

  /**
   * @param {File} file
   * @param {String} title
   * @param {Function} callback
   */

  return async (
    { file, title, nomProsit, unite, motsClef, prositId },
    callback,hide
  ) => {
    //TODO EXTRACT FILE TITLE FROM FILE VARIABLE
    //TODO EXTRACT FILE TYPE(ALLER || RETOUR || RESSOURCE)FROM TITLE

    if (motsClef) {
      let err, prositData;
      [err, prositData] = await to(
        submitPrositCreation({
          variables: {
            nomProsit,
            unite,
            motsClef
          }
        })
      );
      if (err) console.log(err);
      console.log(prositData);
      console.log(file);
      if (
        isFileRelevant(title) &&
        isFileTypeValid(title) &&
        !err &&
        prositData
      ) {
        const { clef, nom, spec } = fileNameExtractor(title);
        if (isFileProsit(clef)) {
          if (isFilePrositAller(spec)) {
            return submitPrositAller({
              variables: {
                file: file,
                title,
                nom,
                prositId: prositData.data.pushProsit._id
              }
            })
              .then(result => {
                console.table(result.data);
                hide();
              })
              .catch(e => {
                console.error(e);
                if (!!callback && isFunction(callback)) callback(e);
              });
          }
        }
      }
    }
    if (isFileRelevant(title) && isFileTypeValid(title)) {
      const { clef, nom, spec } = fileNameExtractor(title);
      if (isFileProsit(clef)) {
        if (!isFilePrositAller(spec)) {
          return submitPrositRetour({
            variables: {
              file,
              title,
              nom,
              prositId: prositId
            }
          })
            .then(result => {
              console.table(result.data);
            })
            .catch(e => {
              console.error(e);
              if (!!callback && isFunction(callback)) callback(e);
            });
        }
      }

      if (isFileRessourceEleve(spec)) {
        return submitRessourceEleve({
          variables: {
            file,
            title,
            nom,
            prositId: prositId,
            unite: unite
          }
        })
          .then(result => {
            console.table(result.data);
          })
          .catch(e => {
            console.error(e);
            if (!!callback && isFunction(callback)) callback(e);
          });
      }
      return submitRessouceProf({
        variables: {
          file,
          title,
          nom,
          prositId: prositId,
          unite
        }
      })
        .then(result => {
          console.table(result);
        })
        .catch(e => {
          console.error(e);
          if (!!callback && isFunction(callback)) callback(e);
        });
    }
  };
  // irrevelant file throw error
};

export const useDownload = () => {
  const [
    submitZipProsit,
    { loading: submitZipPrositLoading, error: submitZipPrositError }
  ] = useMutation(ZIP_PROSIT);

  const [
    submitZipUnite,
    { loading: submitZipUniteLoading, error: submitZipUniteError }
  ] = useMutation(ZIP_UNITE);

  return async ({ unite, prositId }, callback) => {
    //TODO EXTRACT FILE TITLE FROM FILE VARIABLE
    //TODO EXTRACT FILE TYPE(ALLER || RETOUR || RESSOURCE)FROM TITLE

    if (prositId) {
      submitZipProsit({
        variables: {
          prositId
        }
      })
        .then(result => {
          const link = document.createElement("a");
          link.href = `${process.env.REACT_APP_COMPRESS_API_LINK}/compressed/${result.data.filePathZippedByPrositId}`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch(err => {
          console.error(err);
        });
    }

    if (unite) {
      submitZipUnite({
        variables: {
          unite
        }
      })
        .then(result => {
          const link = document.createElement("a");
          console.log(result.data)
          link.href = `${process.env.REACT_APP_COMPRESS_API_LINK}/compressed/${result.data.filePathZippedByUnite}`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch(err => {
          console.error(err);
        });
    }
  };
};
