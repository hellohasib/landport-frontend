import React, { Component } from 'react'
import PilotService from '../services/PilotService'
import MUIDataTable from 'mui-datatables';
import fetch from 'isomorphic-fetch';
import { BrowserRouter, Switch, Router } from "react-router-dom";
import ReactDOM from 'react-dom';

class ListPilotComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                pilots: []
        }
        this.addPilot = this.addPilot.bind(this);
        this.editPilot = this.editPilot.bind(this);
        this.deletePilot = this.deletePilot.bind(this);
    }

    state = {
        page: 0,
        count: 10,
        data: [],
      };



    deletePilot(id){
        PilotService.deletePilot(id).then( res => {
            this.setState({pilots: this.state.pilots.filter(pilot => pilot.id !== id)});
        });
    }
    viewPilot(id){
        this.props.history.push(`/view-pilot/${id}`);
    }
    editPilot(id){
        this.props.history.push(`/add-pilot/${id}`);
    }

    componentDidMount(){

        this.getData(this.state.page, this.state.count);
    }

    addPilot(){
        this.props.history.push('/add-pilot/_add');
    }
     // get data
      getData = (page, rowsPerPage) => {
        fetch(`http://localhost:8080/api/v1/pilots`)
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
          'Pilot Name',
          'Father Name',
          'Address',
          'Driving License',
          'DOB',
          'Cell Phone',
          'Nationality',
          'Country',



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
                 <h2 className="text-center">Pilots List</h2>

                 <br></br>

                       <MUIDataTable
                               title={'Pilot list'}
                               data={data}
                               columns={columns}
                               options={options}

                             />

            </div>
        )
    }
}

export default ListPilotComponent
