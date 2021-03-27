import React, { Component } from 'react'
import CnfAgentService from '../services/CnfAgentService'
import MUIDataTable from 'mui-datatables';
import fetch from 'isomorphic-fetch';
import { BrowserRouter, Switch, Router } from "react-router-dom";
import ReactDOM from 'react-dom';
class ListCnfAgentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                cnfAgents: []
        }
        this.addCnfAgent = this.addCnfAgent.bind(this);
        this.editCnfAgent = this.editCnfAgent.bind(this);
        this.deleteCnfAgent = this.deleteCnfAgent.bind(this);
        this.getPilot = this.getPilot.bind(this);
                    this.getVehicle = this.getVehicle.bind(this);
                    this.getImporter = this.getImporter.bind(this);
                    this.getCnfAgent = this.getCnfAgent.bind(this);
                    this.getCargo = this.getCargo.bind(this);
                    this.getWeight = this.getWeight.bind(this);
                    this.getFastWeight = this.getFastWeight.bind(this);


    }

    state = {
        page: 0,
        count: 10,
        data: [],
      };


getPilot(){
                            this.props.history.push('/pilots');
                        }
            getVehicle(){
                                this.props.history.push('/vehicles');
                            }
            getImporter(){
                                this.props.history.push('/importers');
                            }
            getCnfAgent(){
                                this.props.history.push('/cnfagents');
                            }
            getCargo(){
                                this.props.history.push('/cargos');
                            }
            getWeight(){
                                this.props.history.push('/weights');
                            }
            getFastWeight(){
                                this.props.history.push('/fastweights');
                            }

    deleteCnfAgent(id){
        CnfAgentService.deleteCnfAgent(id).then( res => {
            this.setState({cnfAgents: this.state.cnfAgents.filter(cnfAgent => cnfAgent.id !== id)});
        });
    }
    viewCnfAgent(id){
        this.props.history.push(`/view-cnfAgent/${id}`);
    }
    editCnfAgent(id){
        this.props.history.push(`/add-cnfAgent/${id}`);
    }

    componentDidMount(){
        CnfAgentService.getCnfAgents().then((res) => {
            this.setState({ cnfAgents: res.data});
        });
        this.getData(this.state.page, this.state.count);
    }

    addCnfAgent(){
        this.props.history.push('/add-cnfAgent/_add');
    }
     // get data
      getData = (page, rowsPerPage) => {
        fetch(`http://45.79.126.105/tamabil/api/v1/cnfAgents`)
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
                    'Agent Name',
                    'Address',
                    'Proprietor Name',
                    'Trade License No',
                    'Cellphone',
                    'Email',
                    'NID No',
                    'Edit',
                    'Delete'
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
                 <h2 className="text-center">CnfAgents List</h2>

                 <br></br>

                       <MUIDataTable
                               title={'CnfAgent list'}
                               data={data}
                               columns={columns}
                               options={options}
                             />
            </div>
        )
    }
}

export default ListCnfAgentComponent
