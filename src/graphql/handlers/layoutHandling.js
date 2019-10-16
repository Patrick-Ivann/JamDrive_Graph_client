import {
    useMutation
} from "react-apollo-hooks";
import {
    STORE_MUTATION_FILTER, STORE_MUTATION_THEME
} from "../local/localMutation";

export const useLayout = {

    useSubmitFilter: () => {
        const [submitFilterWord] = useMutation(STORE_MUTATION_FILTER);
        return ({
            word
        }) => {
            return submitFilterWord({
                variables: {
                    word
                }
            }).catch((err) => console.log(err));
        }
    },

    useSubmitThemeChange: () => {
        const [submitThemeChange] = useMutation(STORE_MUTATION_FILTER);
        return () => {
            return submitThemeChange().catch((err) => console.warn(err));
        }
    }




}


export const useFilter = () => {
    const [submitFilterWord] = useMutation(STORE_MUTATION_FILTER)
    return ({
        word
    }) => {

        return submitFilterWord({
            variables: {
                word
            },
        }).catch((err) =>  console.error(err));
    }
}


export const useTheme = () =>{
 
    const [submitThemeChange] = useMutation(STORE_MUTATION_THEME);
    return () => {
        return submitThemeChange().catch((err) => console.error(err));
    }
}