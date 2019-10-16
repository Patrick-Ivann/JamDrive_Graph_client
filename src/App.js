import React,{useEffect} from 'react';
import { Router, Route, Switch } from "react-router-dom";



import './App.css';
// import PrivateRoute from './component/common/PrivateRoute';
import { graphql } from 'react-apollo';
import { CURRENT_USER_QUERY } from './graphql/queries/Auth';
import LoginIndex from './component/Login/LoginIndex';
import Page from './component/common/ErrorPage';
import history from './utils/history';

import jwt_decode from "jwt-decode";
import PrositfFeedBloc from './component/PrositFeed/PrositfFeedBloc';
import HeaderBloc from './component/layout/HeaderBloc';




function App({ client,
  data,
  error,
  loading,
  networkStatus,
  called })   {

useEffect(() => {
  // console.log(client)
  // console.log(loading)
  // console.log(error)
  // console.log(networkStatus)
  // console.log(called)
  // console.log(data)
  if (localStorage[process.env.REACT_APP_LOCAL_TOKEN]) {   
    const decoded = jwt_decode(localStorage[process.env.REACT_APP_LOCAL_TOKEN])
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      
      //window.location.href = '/'
    }

  }
  
  return () => {
    console.log("unmount")
  };
}, [data])



if (loading) return <div > loading </div>
if (error) return <div > error </div>
return (

      <Router history={history}>
        <HeaderBloc/>
          <Route exact path="/" component={LoginIndex} />
          {/* <PrivateRoute currentUser={user} exact path='/prosits' component={PrositFeedIndex} /> */}
        <Switch>
          <Route exact path="/feed" component={PrositfFeedBloc} />

          {/* <PrivateRoute currentUser={user} exact path='/prositsAdmin'  component={PrositFeedIndex}/> */}
        </Switch>
        <Route exact path="/error-page/:error" component={(Page)} />
      </Router>
            
    );
  }




export default graphql(CURRENT_USER_QUERY, {
  options: { fetchPolicy: 'network-only' }
})(App);
