import {
  CURRENT_USER_QUERY
} from '../queries/Auth';
import {
  useMutation,
  useApolloClient
} from 'react-apollo-hooks';
import {
  useQuery
} from 'react-apollo';
import {
  LOGIN_MUTATE,
  LOGOUT_MUTATE
} from '../mutation/Auth';
import {
  STORE_MUTATION_USER
} from '../local/localMutation';
import {
  isFunction
} from 'util';
import history from '../../utils/history';
import { defaults } from '../local/defaultState';

/**
 * Custom Hook to request login using graphQl Mutaion, returns a function to pass Parameters to
 * @returns {Function} submitLogin
 */
export const useLogin = () => {
  const [submitLogin] = useMutation(LOGIN_MUTATE)
  const [setUser] = useMutation(STORE_MUTATION_USER)
  /**
   * @param {String} password
   * @param {Function} callback
   */
  return ({
    password
  }, callback) => {

    return submitLogin({
      variables: {
        password
      }

    }).then((res) => {
      localStorage.setItem(process.env.REACT_APP_LOCAL_TOKEN, res.data.loginUser.token)
      localStorage.setItem(process.env.REACT_APP_LOCAL_REFRESH_TOKEN, res.data.loginUser.refreshToken)
      setUser({
        variables: {
          user: res.data.loginUser.user
        }
      }).catch((err) => {
        console.warn(err)
      });


      //TODO check for res.data.loginUser.user.role to push to the right route
      history.push("/feed")
    }).catch(e => {
      console.error(e)
      if (!!callback && isFunction(callback)) callback(e)
    })
  }
}

/**
 * Custom Hook to request login using graphQl Mutaion, returns a function to pass Parameters to
 * @returns {Function} submitLogin
 */
export const useLogout = () => {
  const [submitLogOut] = useMutation(LOGOUT_MUTATE)
  const client = useApolloClient()
  /**
   * @param {Function} callback
   */
  return (callback, {
    cacheOnly = false
  } = {}) => {

    return submitLogOut().then((result) => {
      localStorage.removeItem(process.env.REACT_APP_LOCAL_TOKEN)
      localStorage.removeItem(process.env.REACT_APP_LOCAL_REFRESH_TOKEN)

      client.clearStore().then(() =>   client.cache.writeData({data : defaults })).catch((err)=> console.log(err));

      console.log(client)
      client.onClearStore(()=>{
          console.log("sdhjsgd")  
        client.cache.writeData({data : defaults });
        console.log(client);
        });
      
      
    
     /*  console.log(result)
      if (cacheOnly) {
        client.clearStore()
      } else {
        client.resetStore()
      } */
      if (callback && isFunction(callback)) {
        callback(null, 'success')
      } else history.push('/')
    }).catch((err) => {
      console.warn(err);
      if (!!callback && isFunction(callback)) callback(err)

    });

  }
}