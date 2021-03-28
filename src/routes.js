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
import Dashboard from "views/Dashboard.js";
import CreatePilot from "views/CreatePilotComponent.jsx";
import Pilot from "views/ListPilotComponent.jsx";
import CreateVehicle from "views/CreateVehicleComponent.jsx";
import Vehicle from "views/ListVehicleComponent.jsx";
import CreateImporter from "views/CreateImporterComponent.jsx";
import Importer from "views/ListImporterComponent.jsx";
import CreateCnfAgent from "views/CreateCnfAgentComponent.jsx";
import CnfAgent from "views/ListCnfAgentComponent.jsx";
import CreateCargo from "views/CreateCargoComponent.jsx";
import Cargo from "views/ListCargoComponent.jsx";
import CreateWeight from "views/CreateWeightComponent.jsx";
import Weight from "views/ListWeightComponent.jsx";
import CreateFastWeight from "views/CreateFastWeightComponent.jsx";
import FastWeight from "views/ListFastWeightComponent.jsx";
import Reports from "views/ReportGenerate.jsx";
import Login from "views/Login.jsx";



const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },

 {
           path: "/add-pilot/_add",
           name: "Add Pilot",
           icon: "nc-icon nc-single-02",
           component: CreatePilot,
           layout: "/admin",
         },
         {
             path: "/pilots",
             name: "All Pilot",
             icon: "nc-icon nc-single-02",
             component: Pilot,
             layout: "/admin",
           },
    {
              path: "/add-vehicle/_add",
               name: "Add Vehicle",
               icon: "nc-icon nc-ambulance",
               component: CreateVehicle,
               layout: "/admin",
             },
             {
                 path: "/vehicles",
                 name: "All Vehicle",
                 icon: "nc-icon nc-ambulance",
                 component: Vehicle,
                 layout: "/admin",
               },
      {
          path: "/add-importer/_add",
          name: "Add Importer",
          icon: "nc-icon nc-badge",
          component: CreateImporter,
          layout: "/admin",
        },
        {
            path: "/importer",
            name: "All Importer",
            icon: "nc-icon nc-badge",
            component: Importer,
            layout: "/admin",
          },
          {
              path: "/add-cnfagent/_add",
              name: "Add C&F Agent",
              icon: "nc-icon nc-chart",
              component: CreateCnfAgent,
              layout: "/admin",
            },
   {
                 path: "/cnfagents",
                 name: "All C&F Agent",
                 icon: "nc-icon nc-chart",
                 component: CnfAgent,
                 layout: "/admin",
               },

   {
       path: "/add-cargo/_add",
       name: "Add Cargo",
       icon: "nc-icon nc-delivery-fast",
       component: CreateCargo,
       layout: "/admin",
     },

     {
         path: "/cargo",
         name: "All Cargo",
         icon: "nc-icon nc-delivery-fast",
         component: Cargo,
         layout: "/admin",
       },
   {
         path: "/add-weight/_add",
         name: "Add Weight",
         icon: "nc-icon nc-bus-front-12",
         component: CreateWeight,
         layout: "/admin",
       },
       {
           path: "/weight",
           name: "All Weight",
           icon: "nc-icon nc-bus-front-12",
           component: Weight,
           layout: "/admin",
         },
{
         path: "/add-fastweight/_add",
         name: "Add Fast Weight",
         icon: "nc-icon nc-spaceship",
         component: CreateFastWeight,
         layout: "/admin",
       },
       {
           path: "/reports",
           name: "Reports",
           icon: "nc-icon nc-spaceship",
           component: Reports,
           layout: "/admin",
         },



];

export default dashboardRoutes;
