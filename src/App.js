import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import ListPilotComponent from './views/ListPilotComponent';
import CreatePilotComponent from './views/CreatePilotComponent';
import ListVehicleComponent from './views/ListVehicleComponent';
import CreateVehicleComponent from './views/CreateVehicleComponent';
import ListImporterComponent from './views/ListImporterComponent';
import CreateImporterComponent from './views/CreateImporterComponent';
import ListCnfAgentComponent from './views/ListCnfAgentComponent';
import CreateCnfAgentComponent from './views/CreateCnfAgentComponent';
import ListCargoComponent from './views/ListCargoComponent';
import CreateCargoComponent from './views/CreateCargoComponent';
import ListWeightComponent from './views/ListWeightComponent';
import CreateWeightComponent from './views/CreateWeightComponent';
import CreateFastWeightComponent from './views/CreateFastWeightComponent';
import ListFastWeightComponent from './views/ListFastWeightComponent';
import LoginComp from './views/Login';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />

                <div className="container">
                    <Switch>
                          <Route path = "/" exact component = {Dashboard}></Route>
                          <Route path = "/login" exact component = {Login}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>


                          <Route path = "/pilots" component = {ListPilotComponent}></Route>
                          <Route path = "/add-pilot/:id" component = {CreatePilotComponent}></Route>

                          <Route path = "/vehicles" component = {ListVehicleComponent}></Route>
                          <Route path = "/add-vehicle/:id" component = {CreateVehicleComponent}></Route>

                          <Route path = "/importers" component = {ListImporterComponent}></Route>
                          <Route path = "/add-importer/:id" component = {CreateImporterComponent}></Route>

                          <Route path = "/cnfagents" component = {ListCnfAgentComponent}></Route>
                          <Route path = "/add-cnfagent/:id" component = {CreateCnfAgentComponent}></Route>

                          <Route path = "/cargos" component = {ListCargoComponent}></Route>
                          <Route path = "/add-cargo/:id" component = {CreateCargoComponent}></Route>

                          <Route path = "/weights" component = {ListWeightComponent}></Route>
                          <Route path = "/add-weight/:id" component = {CreateWeightComponent}></Route>

                          <Route path = "/fastweights" component = {ListFastWeightComponent}></Route>
                          <Route path = "/add-fastweight/:id" component = {CreateFastWeightComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>

        </Router>
    </div>

  );
}

export default App;
