import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Demo } from "./pages/demo";

import injectContext from "./store/appContext";

import { Footer } from "./component/footer";
import Sandbox from "./component/Sandbox.jsx";
import { Login } from "./pages/login";
import { QuestionnairePage } from "./pages/questionnairepage";
import { UpcomingOutingsPage } from "./pages/upcomingoutingspage";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/questionnaire">
              <QuestionnairePage />
            </Route>
            <Route exact path="/upcomingoutings">
              <UpcomingOutingsPage />
            </Route>
            <Route exact path="/sandbox">
              <Sandbox />
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
