import { POP_PROSIT } from "../mutation/Prosit";
import { useMutation } from "react-apollo-hooks";

export const useDelete = () => {
  const [
    submitPopProsit,
    { loading: submitPopPrositLoading, error: submitPopPrositError }
  ] = useMutation(POP_PROSIT);

  return async ({ unite, prositId }, callback) => {
    if (prositId) {
      submitPopProsit({
        variables: {
          id: prositId
        }
      })
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
};
