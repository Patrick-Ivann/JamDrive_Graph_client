import React,{useEffect} from 'react';
import { Router, Route, Switch } from "react-router-dom";



import './App.css';
import Header from './component/layout/Header';
import PrivateRoute from './component/common/PrivateRoute';
import { graphql } from 'react-apollo';
import { CURRENT_USER_QUERY } from './graphql/queries/Auth';
import LoginIndex from './component/Login/LoginIndex';
import PrositFeedIndex from './component/PrositFeed/PrositFeedIndex';
import Page from './component/common/ErrorPage';




function App({ data: { loading, error, user } })   {

useEffect(() => {
  
  if (localStorage.jwtToken) {   
    // setAuthToken(localStorage.jwtToken);
    // const decoded = jwt_decode(localStorage.jwtToken)
    // const currentTime = Date.now() / 1000;
    // if (decoded.exp < currentTime) {
    //   store.dispatch(logoutUser())
    //   window.location.href = '/'
    }
  
  return () => {
    console.log("unmount")
  };
}, [])


      
    //check si il y a un token
    
    return (

      <Router>      
        <Header/>
          <Route exact path="/" component={LoginIndex} />
          <PrivateRoute exact path='/prosits' component={PrositFeedIndex} />
        <Switch>
          <PrivateRoute currentUser={user} exact path='/prositsAdmin'  component={PrositFeedIndex}/>
        </Switch>
        <Route exact path="/error-page/:error" component={(Page)} />
      </Router>
            
    );
  }




export default graphql(CURRENT_USER_QUERY, {
  options: { fetchPolicy: 'network-only' }
})(App);
