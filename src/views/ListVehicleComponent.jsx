import React, { Component } from 'react'
import VehicleService from '../services/VehicleService'
import MUIDataTable from 'mui-datatables';
import fetch from 'isomorphic-fetch';
import { BrowserRouter, Switch, Router } from "react-router-dom";
import ReactDOM from 'react-dom';

class ListVehicleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                vehicles: []
        }
        this.addVehicle = this.addVehicle.bind(this);
        this.editVehicle = this.editVehicle.bind(this);
        this.deleteVehicle = this.deleteVehicle.bind(this);
    }

    state = {
        page: 0,
        count: 10,
        data: [],
      };



    deleteVehicle(id){
        VehicleService.deleteVehicle(id).then( res => {
            this.setState({vehicles: this.state.vehicles.filter(vehicle => vehicle.id !== id)});
        });
    }
    viewVehicle(id){
        this.props.history.push(`/view-vehicle/${id}`);
    }
    editVehicle(id){
        this.props.history.push(`/add-vehicle/${id}`);
    }

    componentDidMount(){
        VehicleService.getVehicles().then((res) => {
            this.setState({ vehicles: res.data});
        });
        this.getData(this.state.page, this.state.count);
    }

    addVehicle(){
        this.props.history.push('/add-vehicle/_add');
    }
     // get data
      getData = (page, rowsPerPage) => {
        fetch(`http://localhost:8080/api/v1/vehicles`)
          .then(response => {
            if (response.status >= 400) {
              throw new Error('Bad response from server');
            }
            return response.json();
          })
          .then(data => {
            console.log('data: ', data);
            data = data.map(el => Object.values(el));
            console.log('data: ', data);
            this.setState({
              page,
              data,
            });
          });
      };
    render() {
    const columns = [
          'id',
          'Vehicle Reg No',
          'Chassis No',
          'Engine No',
          'Vehicle Reg Certificate No',
          'Owner of Vehicle',
          'Owner Address',
          'Owner Cell Phone',
        ];
        const { data, page, count } = this.state;

        const options = {
          filter: true,
          filterType: 'dropdown',
          responsive: 'scroll',
          serverSide: true,
          rowsPerPage: 10,
          count: 100,
          selectableRows: false,
          page: page,
          onTableChange: (action, tableState) => {
            console.log(action, tableState);
            // a developer could react to change on an action basis or
            // examine the state as a whole and do whatever they want

            switch (action) {
              case 'changePage':
                this.changePage(tableState.page, tableState.rowsPerPage);
                break;
            }
          },
        };
        return (
            <div>
                 <h2 className="text-center">Vehicles List</h2>

                 <br></br>

                       <MUIDataTable
                               title={'Vehicle list'}
                               data={data}
                               columns={columns}
                               options={options}
                             />
            </div>
        )
    }
}

export default ListVehicleComponent
