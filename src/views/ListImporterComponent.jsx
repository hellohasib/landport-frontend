import React, { Component } from 'react'
import ImporterService from '../services/ImporterService'
import MUIDataTable from 'mui-datatables';
import fetch from 'isomorphic-fetch';
import { BrowserRouter, Switch, Router } from "react-router-dom";
import ReactDOM from 'react-dom';

class ListImporterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                importers: []
        }
        this.addImporter = this.addImporter.bind(this);
        this.editImporter = this.editImporter.bind(this);
        this.deleteImporter = this.deleteImporter.bind(this);
    }

    state = {
        page: 0,
            count: 1,
            data: [["Loading Data..."]],
            isLoading: false
      };



    deleteImporter(id){
        ImporterService.deleteImporter(id).then( res => {
            this.setState({importers: this.state.importers.filter(importer => importer.id !== id)});
        });
    }
    viewImporter(id){
        this.props.history.push(`/view-importer/${id}`);
    }
    editImporter(id){
        this.props.history.push(`/add-importer/${id}`);
    }

    componentDidMount(){
        ImporterService.getImporters().then((res) => {
            this.setState({ importers: res.data});
        });
        this.getData(this.state.page, this.state.count);
    }

    addImporter(){
        this.props.history.push('/add-importer/_add');
    }
     // get data
      getData = (page, rowsPerPage) => {
        fetch(`http://localhost:8080/api/v1/importers`)
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

              data,
            });
          });
      };

    render() {
    const columns = [
          'id',
          'Importer Name',
          'Address',
          'Proprietor Name',
          'Trade License No',
          'Cellphone',
          'Email',
          'NID No'
        ];
        const { data, page, count } = this.state;

        const options = {
              responsive: "scrollFullHeight",
              filters: false,
              rowsPerPage: 5,
              rowsPerPageOptions: [5],

              serverSide: true,
              //count, // Use total number of items
              count: -1, // Unknown number of items
              page,
              onTableChange: (action, tableState) => {
                // console.log(action, tableState);
                if (action === "changePage") {
                  console.log("Go to page", tableState.page);
                  this.changePage(tableState.page);
                }
              }
            };
        return (
            <div>
                 <h2 className="text-center">Importers List</h2>

                 <br></br>

                       <MUIDataTable
                               title={'Importer list'}
                               data={data}
                               columns={columns}
                               options={options}
                             />
            </div>
        )
    }
}

export default ListImporterComponent
