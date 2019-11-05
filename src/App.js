import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";

import LoginIndex from "./component/Login/LoginIndex";
import Page from "./component/common/ErrorPage";
import history from "./utils/history";

import jwt_decode from "jwt-decode";
import PrositfFeedBloc from "./component/PrositFeed/PrositfFeedBloc";
import HeaderBloc from "./component/layout/HeaderBloc";
import { useLogout } from "./graphql/handlers/authHandling";

import { Container, MainBody } from "./styles/layout";
import ThemeProviderWrapper from "./styles/ThemeProviderWrapper";
import Footer from "./component/layout/Footer";

import { PrivateRoute } from "./component/common/PrivateRoute";

function App(props)   {

 
  // function App(props) {
    const clearUser = useLogout();
    
    useEffect(() => {
      
      if (localStorage[process.env.REACT_APP_LOCAL_TOKEN]) {
      const decoded = jwt_decode(
        localStorage[process.env.REACT_APP_LOCAL_TOKEN]
      );
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        //window.location.href = '/'
      }
    }

    if (window.location.pathname === "/") clearUser();

    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <MainBody>
      <Router history={history}>
        <ThemeProviderWrapper>
          <Container>
            <HeaderBloc />

            <Route exact path="/" component={LoginIndex} />
            <PrivateRoute exact path='/feed' component={PrositfFeedBloc} />
            
            <Switch>
              {/* <Route exact path="/feed" component={PrositfFeedBloc} /> */}

              {/* <PrivateRoute currentUser={user} exact path='/prositsAdmin'  component={PrositFeedIndex}/> */}
            </Switch>
            <Route exact path="/error-page/:error" Component={Page} />

          </Container>
        </ThemeProviderWrapper>
      </Router>
      <Footer />
    </MainBody>
  );
}

// export default graphql(LOCAL_USERSTORE_QUERY, {
//   options: { fetchPolicy: 'network-only' }
// })(App);

export default App;
