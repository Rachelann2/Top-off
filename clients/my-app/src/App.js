import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import indexPage from "./pages/index";
import caterPage from "./pages/cater";
import topOffPage from "./pages/topOff";
import contactPage from "./pages/contact";
import galleryPage from "./pages/gallery";
import menuPage from "./pages/menu";


export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={indexPage} />

          <Route exact path="/cater" component={caterPage} />

          <Route exact path="/top-off" component={topOffPage} />

          <Route exact path="/contact" component={contactPage} />

          <Route exact path="/gallery" component={galleryPage} />

          <Route exact path="/menu" component={menuPage} />



        </Switch>
      </div>
    </Router>

  );
}

