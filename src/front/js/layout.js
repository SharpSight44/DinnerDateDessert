import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Demo } from "./pages/demo";

import injectContext from "./store/appContext";

import { Login } from "./pages/login";
import { QuestionnairePage } from "./pages/questionnairepage";
import { UpcomingOutingsPage } from "./component/memberhome/upcomingoutingspage";
import { Sandbox } from "./pages/sandbox";
import { Accountsettings } from "./component/memberhome/accountsettings";
import { Tailor } from "./component/memberhome/tailor";
import { Desires } from "./component/memberhome/desires";
import { Memories } from "./component/memberhome/memories";
import { Footer } from "./component/footer";
import { MemberHome } from "./pages/memberhome";

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
            <Route exact path="/accountsettings">
              <Accountsettings />
            </Route>
            <Route exact path="/tailor">
              <Tailor />
            </Route>
            <Route exact path="/desires">
              <Desires />
            </Route>
            <Route exact path="/memories">
              <Memories />
            </Route>
            <Route exact path="/memberhome">
              <MemberHome />
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
