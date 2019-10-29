import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// import PrivateRoute from './component/common/PrivateRoute';
import { graphql, useQuery, Query } from "react-apollo";
import { CURRENT_USER_QUERY } from "./graphql/queries/Auth";
import LoginIndex from "./component/Login/LoginIndex";
import Page from "./component/common/ErrorPage";
import history from "./utils/history";

import jwt_decode from "jwt-decode";
import PrositfFeedBloc from "./component/PrositFeed/PrositfFeedBloc";
import HeaderBloc from "./component/layout/HeaderBloc";
import { useLogout } from "./graphql/handlers/authHandling";

import { Container, MainBody } from "./styles/layout";
import { LOCAL_THEMESTORE_QUERY } from "./graphql/local/localQueries";
import ThemeProviderWrapper from "./styles/ThemeProviderWrapper";
import Footer from "./component/layout/Footer";
import Modal from "./component/common/Modal";
import { useModal } from "./utils/customHooks";
import Upload from "./component/PrositForm/Upload";
import ModalMenu from "./component/common/ModalMenu";

// function App({ client,
//   data,
//   error,
//   loading,
//   networkStatus,
//   called })   {

function App(props) {
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
            {/* <PrivateRoute currentUser={user} exact path='/prosits' component={PrositFeedIndex} /> */}
            <Switch>
              <Route exact path="/feed" component={PrositfFeedBloc} />

              {/* <PrivateRoute currentUser={user} exact path='/prositsAdmin'  component={PrositFeedIndex}/> */}
            </Switch>
            <Route exact path="/error-page/:error" component={Page} />
            <Route exact path="/drop" component={Upload}></Route>
            <Route exact path="/pop" component={ModalMenu}></Route>
          </Container>
        </ThemeProviderWrapper>
      </Router>
      <Footer />
    </MainBody>
  );
}

// export default graphql(CURRENT_USER_QUERY, {
//   options: { fetchPolicy: 'network-only' }
// })(App);

export default App;
