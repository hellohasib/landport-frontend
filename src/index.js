/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";
import LoginLayout from "./views/Login.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/login" render={(props) => <LoginLayout {...props} />} />

      <Redirect from="/" to="/admin/dashboard" />
//        <Redirect from="/admin/add-pilot/_add" to="/admin/pilots" />
//            <Redirect from="/admin/add-vehicle/_add" to="/admin/vehicles" />
//            <Redirect from="/admin/add-importer/_add" to="/admin/importer" />
//            <Redirect from="/admin/add-cnfagent/_add" to="/admin/cnfagents" />
//            <Redirect from="/admin/add-cargo/_add" to="/admin/cargo" />
//            <Redirect from="/admin/add-weight/_add" to="/admin/dashboard" />
//            <Redirect from="/admin/add-fastweight/_add" to="/admin/weight" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
