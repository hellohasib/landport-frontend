import React, { Component } from 'react'
import WeightService from '../services/WeightService'
import MUIDataTable from 'mui-datatables';
import fetch from 'isomorphic-fetch';
import { BrowserRouter, Switch, Router } from "react-router-dom";
import ReactDOM from 'react-dom';
class ListFastWeightComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                fastweights: []
        }
        this.addWeight = this.addWeight.bind(this);
        this.editWeight = this.editWeight.bind(this);
        this.deleteWeight = this.deleteWeight.bind(this);
    }

    state = {
        page: 0,
        count: 10,
        data: [],
      };



    deleteWeight(id){
        WeightService.deleteWeight(id).then( res => {
            this.setState({weights: this.state.weights.filter(weight => weight.id !== id)});
        });
    }
    viewWeight(id){
        this.props.history.push(`/view-fastweight/${id}`);
    }
    editWeight(id){
        this.props.history.push(`/add-fastweight/${id}`);
    }

    componentDidMount(){
        WeightService.getWeights().then((res) => {
            this.setState({ weights: res.data});
        });
        this.getData(this.state.page, this.state.count);
    }

    addWeight(){
        this.props.history.push('/add-fastweight/_add');
    }
     // get data
      getData = (page, rowsPerPage) => {
        fetch(`http://45.79.126.105/tamabil/api/v1/fastweights`)
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
          'Import Id',
          'Serial No',
          'Description of Good',
          'Declared Weight',
          'Number of package',
          'Load Weight',
          'Unload Weight',
          'Net Weight'
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
                 <h2 className="text-center">Weights List</h2>

                 <br></br>

                       <MUIDataTable
                               title={'Weight list'}
                               data={data}
                               columns={columns}
                               options={options}
                             />
            </div>
        )
    }
}

export default ListFastWeightComponent
